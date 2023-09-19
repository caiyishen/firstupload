import service from '@/utils/request'
import {filterObj} from '@/utils/util'
import {downloadFile} from '@/utils/func'
export const mixin = {
  data(){
    return{
      //上传headers
      tokenHeader:{
        'X-Access-Token':localStorage.getItem('token')
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
          showTotal: (total, range) => {
            return range[0] + '-' + range[1] + ' 共' + total + '条'
          },
          showQuickJumper: true,
          showSizeChanger: true,
          total: 0,
      },
            /* 排序参数 */
      isorter: {
        column: 'createTime',
        order: 'desc',
      },
      /* 筛选参数 */
      filters: {},
      /* table加载状态 */
      loading: false,
      /* table选中keys */
      selectedRowKeys: [],
      /* table选中records */
      selectionRows: [],
    }
  },
  created() {
    if(!this.disableCrated){
      this.loadData()
    }
  },
  methods: {
    loadData(arg){
      // console.log(this.url,'this.url');
      if(!this.url.list) return
      if(arg===1) this.pagination.current = 1
      this.loading = true
      let params = this.getQueryParams()
      // console.log(params,'params');
      service({
        method:'get',
        url:this.url.list,
        params
      }).then(res=>{
        // console.log(res,'res');
        if(res.success){
          this.dataSource  =res.result.records ||  []
          this.pagination.total = res.result.total || 0
        }else{
          this.$message.error(res.message)
        }
        this.loading = false
      }).finally(()=>{
        this.loading = false
      })
      
    },
    getQueryParams(){
      let params = {
        ...this.queryParam,
      }
      params.pageNo = this.pagination.current
      params.pageSize = this.pagination.pageSize
      return filterObj(params) 
    },
    onSelectChange (selectedRowKeys, selectionRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectionRows = selectionRows
    },
    onClearSelected () {
      this.selectedRowKeys = []
      this.selectionRows = []
    },
    searchQuery () {
      this.loadData(1)
    },
    searchReset () {
      this.queryParam = {}
      this.loadData(1)
    },
    handleTableChange (pagination, filters, sorter) {
      // 分页、排序、筛选变化时触发
      // TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field
        this.isorter.order = sorter.order == 'ascend' ? 'asc' : 'desc'
      }
      this.pagination = pagination
      this.loadData()
    },
    handleExportXls (fileName,method) {
      if (!fileName || typeof fileName !== 'string') {
        fileName = '导出文件'
      }
      const param = { ...this.queryParam }
      // console.log('导出参数', param)
      downloadFile(this.url.exportXlsUrl,fileName,param,method) 
    },
  },
}