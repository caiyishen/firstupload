"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

var _util = require("@/utils/util");

var _func = require("@/utils/func");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mixin = {
  data: function data() {
    return {
      //上传headers
      tokenHeader: {
        'X-Access-Token': localStorage.getItem('token')
      },
      //参数
      queryParam: {},
      //列表数据
      dataSource: [],

      /* 分页参数 */
      pagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: function showTotal(total, range) {
          return range[0] + '-' + range[1] + ' 共' + total + '条';
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },

      /* 排序参数 */
      isorter: {
        column: 'createTime',
        order: 'desc'
      },

      /* 筛选参数 */
      filters: {},

      /* table加载状态 */
      loading: false,

      /* table选中keys */
      selectedRowKeys: [],

      /* table选中records */
      selectionRows: []
    };
  },
  created: function created() {
    if (!this.disableCrated) {
      this.loadData();
    }
  },
  methods: {
    loadData: function loadData(arg) {
      var _this = this;

      // console.log(this.url,'this.url');
      if (!this.url.list) return;
      if (arg === 1) this.pagination.current = 1;
      this.loading = true;
      var params = this.getQueryParams(); // console.log(params,'params');

      (0, _request["default"])({
        method: 'get',
        url: this.url.list,
        params: params
      }).then(function (res) {
        // console.log(res,'res');
        if (res.success) {
          _this.dataSource = res.result.records || [];
          _this.pagination.total = res.result.total || 0;
        } else {
          _this.$message.error(res.message);
        }

        _this.loading = false;
      })["finally"](function () {
        _this.loading = false;
      });
    },
    getQueryParams: function getQueryParams() {
      var params = _objectSpread({}, this.queryParam);

      params.pageNo = this.pagination.current;
      params.pageSize = this.pagination.pageSize;
      return (0, _util.filterObj)(params);
    },
    onSelectChange: function onSelectChange(selectedRowKeys, selectionRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectionRows = selectionRows;
    },
    onClearSelected: function onClearSelected() {
      this.selectedRowKeys = [];
      this.selectionRows = [];
    },
    searchQuery: function searchQuery() {
      this.loadData(1);
    },
    searchReset: function searchReset() {
      this.queryParam = {};
      this.loadData(1);
    },
    handleTableChange: function handleTableChange(pagination, filters, sorter) {
      // 分页、排序、筛选变化时触发
      // TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field;
        this.isorter.order = sorter.order == 'ascend' ? 'asc' : 'desc';
      }

      this.pagination = pagination;
      this.loadData();
    },
    handleExportXls: function handleExportXls(fileName, method) {
      if (!fileName || typeof fileName !== 'string') {
        fileName = '导出文件';
      }

      var param = _objectSpread({}, this.queryParam); // console.log('导出参数', param)


      (0, _func.downloadFile)(this.url.exportXlsUrl, fileName, param, method);
    }
  }
};
exports.mixin = mixin;