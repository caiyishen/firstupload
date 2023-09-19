"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterObj = exports.handleChildRouters = exports.handleRouters = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var handleRouters = function handleRouters(data) {
  //生成首页路由
  var Layouts = function Layouts(resolve) {
    return require(['@/components/layouts/RouteView.vue'], resolve);
  };

  var routes = [{
    path: '/',
    name: 'Layouts',
    component: Layouts,
    children: _toConsumableArray(handleChildRouters(data)),
    meta: {
      title: '首页'
    },
    redirect: '/home/index'
  }, {
    path: '*',
    redirect: '/404',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/404.vue'));
      });
    }
  }];
  return routes;
};

exports.handleRouters = handleRouters;

var handleChildRouters = function handleChildRouters(data) {
  //生成特定格式
  var routes = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var item = _step.value;
      var component = '';

      if (item.component.indexOf('layouts') >= 0) {
        return "continue";
      } else {
        component = 'views/' + item.component;
      }

      var componentPath = void 0; // console.log(component,'component')
      // console.log('@/' + component + '.vue','.....');

      componentPath = function componentPath(resolve) {
        return require(['@/' + component + '.vue'], resolve);
      };

      var menu = {
        path: item.path,
        name: item.name,
        redirect: item.redirect,
        component: componentPath,
        hidden: item.hidden,
        meta: {
          icon: item.meta.icon,
          title: item.meta.title,
          url: item.meta.url,
          keepAlive: item.meta.keepAlive
        }
      };

      if (menu.children && menu.children.length > 0) {
        menu.children = _toConsumableArray(handleChildRouters(item.children));
      } //子路由


      routes.push(menu);
    };

    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return routes;
};
/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */


exports.handleChildRouters = handleChildRouters;

var filterObj = function filterObj(obj) {
  if (!_typeof(obj) === 'object') return;

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && (obj[key] === undefined || obj[key] === null || obj[key] == '')) {
      delete obj[key];
    }
  }

  return obj;
};

exports.filterObj = filterObj;