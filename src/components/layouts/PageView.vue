<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed"
                    :trigger="null"
                    collapsible>
      <div class="logo">
        {{ collapsed?'后台':'后台管理' }}
      </div>
      <a-menu class="aMenu"
              :style="{width:collapsed?'100%':'auto'}"
              :default-selected-keys="[permissionList[0].path]"
              :open-keys.sync="openKeys"
              mode="inline"
              @click="handleClick">
        <template v-for="(permission) in permissionList">
          <a-sub-menu v-if="permission.children"
                      :key="permission.path"
                      @titleClick="titleClick">
            <span slot="title">
              <a-icon type="appstore" /><span>{{ permission.meta.title }}</span>
            </span>
            <a-menu-item v-for="(item) in permission.children"
                         v-if="!item.hidden"
                         :key="item.path"
                         @click="menuClick">
              {{ item.meta.title }}
            </a-menu-item>
          </a-sub-menu>
          <template v-else>
            <a-menu-item :key="permission.path"
                         @click="menuClick">
              <a-icon type="appstore" />
              <span>{{ permission.meta.title }}</span>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding:0"
                       class="flex-between">
        <a-icon class="trigger"
                :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                @click="() => (collapsed = !collapsed)" />
        <a-dropdown style="margin-right:16px">
          <span>{{ username }}
            <svg-icon icon-class="button"
                      class="right-logo" />
          </span>
          <a-menu slot="overlay"
                  class="user-dropdown-menu-wrapper">
            <a-menu-item @click="handleLogout">
              <span>退出登录</span>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <transition name="fade-transform"
                    mode="out-in">

          <RouteView />

        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import RouteView from './RouteView'
export default {
  name: 'PageView',
  components: {
    RouteView
  },
  data () {
    return {
      collapsed: false,
      openKeys: []
    };
  },
  computed: {
    permissionList () {
      return this.$store.getters.permissionList
    },

    username () {
      return 'cai'
    },

  },
  watch: {
    openKeys (val) {
      console.log('openKeys', val);
    },
  },
  mounted () {
  },
  methods: {
    titleClick (e) {
      console.log('titleClick', e);
    },
    handleClick (e) {
      console.log('handleClick', e);
    },
    menuClick (e) {
      console.log('menuClick', e);
      this.$router.push(e.key)
    },
    handleLogout () {
      let that = this
      this.$confirm({
        content: '确定退出登录?',
        onOk () {
          that.$store.dispatch('user/LogOut').then(() => {
            that.$router.replace('/login')
          })
        }
      })

    }
  }
};
</script>
<style scoped  lang='less'>
#components-layout-demo-custom-trigger {
  height: 100vh;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    text-align: center;
    height: 32px;
    line-height: 32px;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .aMenu {
    // width: 200px;
    height: calc(100% - 64px);
  }
}
.right-logo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
