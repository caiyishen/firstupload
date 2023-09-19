"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _moment = _interopRequireDefault(require("moment"));

require("@/icons");

require("@/utils/ant");

require("@/assets/styles/base.css");

require("@/assets/styles/reset.css");

var _request = _interopRequireDefault(require("@/utils/request.js"));

var _vueBus = _interopRequireDefault(require("@/utils/vueBus"));

var _filter = _interopRequireDefault(require("./utils/filter"));

require("@/permission");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入icon组件
// icon
//ant-design-vue按需引入
//样式
//请求封装
_vue["default"].prototype.$axios = _request["default"];
_vue["default"].prototype.$moment = _moment["default"];
_vue["default"].config.productionTip = false; //EventBus

_vue["default"].use(_vueBus["default"]); //filters


Object.keys(_filter["default"]).forEach(function (key) {
  _vue["default"].filter(key, _filter["default"][key]);
}); //路由守卫

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');