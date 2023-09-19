"use strict";

var _router = _interopRequireDefault(require("./router"));

var _mutationTypes = require("@/store/mutation-types");

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

var _whiteList = require("@/utils/whiteList");

var _util = require("./utils/util");

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_router["default"].beforeEach(function (to, next) {
  _nprogress["default"].start();

  var token = localStorage.getItem(_mutationTypes.ACCESS_TOKEN); //有token 无token 根据白名单

  if (token) {
    //登录
    if (to.path == '/login') {
      next();

      _nprogress["default"].done();
    } else {
      //其他看是否有动态路由 有
      if (_store["default"].getters.permissionList && _store["default"].getters.permissionList.length > 0) {
        next();
      } else {
        //没有 获取动态路由
        _store["default"].dispatch('user/getPermissionData').then(function () {
          if (_store["default"].getters.permissionList && _store["default"].getters.permissionList == 0) return; //处理动态路由

          var routes = (0, _util.handleRouters)(_store["default"].getters.permissionList); // console.log(routes,'routes');

          _router["default"].addRoutes(routes); // console.log(router,'router')
          // 检测路由是否添加成功


          next(_objectSpread({}, to, {
            replace: true
          }));
        })["catch"](function () {// console.log(err,'err');
        });
      }
    }
  } else {
    if (_whiteList.whiteList.indexOf(to.path) > -1 || to.path == '/login') {
      next();
    } else {
      next({
        path: '/login'
      });

      _nprogress["default"].done();
    }
  }
});

_router["default"].afterEach(function () {
  _nprogress["default"].done();
});