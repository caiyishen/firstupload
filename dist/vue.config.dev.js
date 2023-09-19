"use strict";

var path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

var _require = require('@vue/cli-service'),
    defineConfig = _require.defineConfig; //gzip压缩


var CompressionPlugin = require('compression-webpack-plugin'); //将打包后的文件直接压缩


var FileManagerPlugin = require("filemanager-webpack-plugin"); // vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档


var isProduction = process.env.NODE_ENV == 'production';
module.exports = defineConfig({
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
  publicPath: isProduction ? '/' : '/',
  // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  outputDir: 'dist',
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: 'static',
  // 是否开启eslint保存检测，有效值：ture | false | 'error'
  lintOnSave: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: isProduction,
  indexPath: 'index.html',
  //定制ant-design 主题
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#3cb67b',
            //全局主题
            'link-color': '#1DA57A',
            //链接色
            'border-radius-base': '2px' //组件圆角

          },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: function configureWebpack(config) {
    //生产环境取消console.console.log();
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    } //持久化缓存打包速度提升80%


    config.cache = {
      type: 'filesystem',
      allowCollectingMemory: true
    }; //代码分割 将vue vue-router vuex ant-design-vue 分开打包 避免臃肿加载

    config.optimization = {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vue: {
            name: 'vue',
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: -10
          },
          vuex: {
            name: 'vuex',
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            priority: -10
          },
          'vue-router': {
            name: 'vue-router',
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            priority: -10
          },
          'ant-design-vue': {
            name: 'ant-design-vue',
            test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
            priority: -10
          },
          'vendors': {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -20
          }
        }
      }
    };
  },
  chainWebpack: function chainWebpack(config) {
    //svg生成雪碧图  
    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/icons')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({
      symbolId: 'icon-[name]'
    }).end(); //图片10kb 转base64 /和svg-icon冲突 下面不匹配svg

    config.module.rule('images').test(/\.(png|jpe?g|gif|webp)$/).set('parser', {
      dataUrlCondition: {
        maxSize: 10 * 1024 // 10kb

      }
    }); //生产环境，开启js/css压缩

    if (isProduction) {
      config.plugin('compressionPlugin').use(new CompressionPlugin({
        test: /\.js$|.\css|.\less/,
        // 匹配文件名
        threshold: 10240,
        // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件 

      }));
    } //打包dist直接解压成dist.zip


    if (isProduction) {
      config.plugin('compress').use(FileManagerPlugin, [{
        events: {
          onEnd: {
            "delete": ['./dist.zip'],
            archive: [{
              source: './dist',
              destination: './dist.zip'
            }]
          }
        }
      }]);
    }
  },
  transpileDependencies: false,
  devServer: {
    port: 8080,
    open: true,
    //自动打开
    hot: true,
    //热更新
    proxy: {
      '/cloud_job': {
        target: 'http://122.224.147.120:9516/cloud_job',
        // 请求本地 需要jeecg-boot后台项目
        ws: false,
        changeOrigin: true
      }
    }
  }
});