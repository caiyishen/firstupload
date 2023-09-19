"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = _interopRequireDefault(require("@/router"));

var _index = require("@/api/login/index.js");

var _mutationTypes = require("@/store/mutation-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: {
    token: '',
    username: '',
    realname: '',
    info: {},
    avatar: '',
    dictionary: {},
    permissionList: []
  },
  getters: {},
  mutations: {
    SET_TOKEN: function SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_INFO: function SET_INFO(state, payload) {
      state.info = payload;
    },
    SET_NAME: function SET_NAME(state, payload) {
      state.username = payload.username;
      state.realname = payload.realname;
    },
    SET_AVATAR: function SET_AVATAR(state, payload) {
      state.avatar = payload;
    },
    SET_DICTIONARY: function SET_DICTIONARY(state, payload) {
      state.dictionary = payload;
    },
    SET_PERMISSION: function SET_PERMISSION(state, payload) {
      state.permissionList = payload;
    }
  },
  actions: {
    Login: function Login(_ref, payload) {
      var commit = _ref.commit;
      return new Promise(function (resovle, rejecet) {
        (0, _index.login)(payload).then(function (res) {
          // console.log(res,'res')
          if (res.code == 200) {
            var _ref2 = res.result || {},
                token = _ref2.token,
                userInfo = _ref2.userInfo,
                sysAllDictItems = _ref2.sysAllDictItems;

            localStorage.setItem(_mutationTypes.ACCESS_TOKEN, token);
            localStorage.setItem(_mutationTypes.USER_NAME, userInfo.username);
            localStorage.setItem(_mutationTypes.USER_INFO, JSON.stringify(userInfo));
            localStorage.setItem(_mutationTypes.UI_CACHE_DB_DICT_DATA, JSON.stringify(sysAllDictItems));
            commit('SET_TOKEN', token);
            commit('SET_INFO', userInfo);
            commit('SET_NAME', {
              username: userInfo.username,
              realname: userInfo.realname
            });
            commit('SET_AVATAR', userInfo.avatar);
            commit('SET_DICTIONARY', sysAllDictItems);

            _router["default"].replace({
              path: '/'
            });

            resovle(res);
          } else {
            rejecet(res);
          }
        });
      });
    },
    // 退出登录
    LogOut: function LogOut(_ref3) {
      var commit = _ref3.commit;
      return new Promise(function (resolve) {
        (0, _index.logout)().then(function () {
          commit('SET_TOKEN', '');
          commit('SET_INFO', {});
          commit('SET_NAME', {
            username: '',
            realname: ''
          });
          commit('SET_AVATAR', '');
          commit('SET_DICTIONARY', []);
          localStorage.removeItem(_mutationTypes.ACCESS_TOKEN);
          localStorage.removeItem(_mutationTypes.USER_NAME);
          localStorage.removeItem(_mutationTypes.USER_INFO);
          localStorage.removeItem(_mutationTypes.UI_CACHE_DB_DICT_DATA);
          resolve();
        });
      });
    },
    //获取路由按钮权限
    getPermissionData: function getPermissionData(_ref4) {
      var commit = _ref4.commit;
      return new Promise(function (resolve, reject) {
        var token = localStorage.getItem(_mutationTypes.ACCESS_TOKEN);
        var params = {
          token: token
        };
        (0, _index.getPermissionsByUser)(params).then(function (res) {
          // console.log(res,'res路由按钮')
          var _ref5 = res.result || {},
              auth = _ref5.auth,
              allAuth = _ref5.allAuth,
              menu = _ref5.menu;

          localStorage.setItem(_mutationTypes.USER_AUTH, JSON.stringify(auth));
          localStorage.setItem(_mutationTypes.SYS_BUTTON_AUTH, JSON.stringify(allAuth));
          commit('SET_PERMISSION', menu); // console.log(menu,'menu');

          if (menu && menu.length > 0) {
            resolve();
          } else {
            reject();
          }
        });
      });
    }
  },
  modules: {}
};
exports["default"] = _default;