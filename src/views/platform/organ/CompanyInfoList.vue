<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form
        layout="inline"
        @keyup.enter.native="searchQuery"
      >
        <a-row :gutter="24">
          <a-col
            :md="6"
            :sm="8"
          >
            <a-form-item label="姓名">
              <a-input
                v-model="queryParam.name"
                placeholder="请输入姓名"
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="8"
          >
            <a-form-item label="简历编号">
              <a-input
                v-model="queryParam.randomId"
                placeholder="请输入简历编号"
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="6"
            :sm="8"
          >
            <span
              style="float: left;overflow: hidden;"
              class="table-page-search-submitButtons"
            >
              <a-button
                type="primary"
                icon="search"
                @click="searchQuery"
              >查询</a-button>
              <a-button
                icon="reload"
                style="margin-left: 8px"
                @click="searchReset"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button
        type="primary"
        icon="plus"
        @click="handleAdd"
      >
        新增
      </a-button>
      <a-button
        type="primary"
        icon="download"
        @click="handleExportXls('消息模板')"
      >
        导出
      </a-button>
      <a-upload
        name="file"
        :show-upload-list="false"
        :multiple="false"
        :headers="tokenHeader"
        :action="importExcelUrl"
        @change="handleImportExcel"
      >
        <a-button
          type="primary"
          icon="import"
        >
          导入
        </a-button>
      </a-upload>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item
            key="1"
            @click="batchDel"
          >
            <a-icon type="delete" />
            删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>

    <!-- table区域-begin -->
    <div>
      <div
        class="ant-alert ant-alert-info"
        style="margin-bottom: 16px;"
      >
        <i class="anticon anticon-info-circle ant-alert-icon" /> 已选择 <a style="font-weight: 600">{{
          selectedRowKeys.length }}</a>项
        <a
          style="margin-left: 24px"
          @click="onClearSelected"
        >清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        row-key="id"
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        :loading="loading"
        :row-selection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        @change="handleTableChange"
      >
        <!-- 字符串超长截取省略号显示-->
        <span slot="templateContent">
          <!-- <j-ellipsis :value="text"
                      :length="25" /> -->
        </span>

        <!-- <span slot="action"
              slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>

          <a-divider type="vertical" />
          <a-dropdown>
            <a class="ant-dropdown-link">更多
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a-popconfirm title="确定删除吗?"
                              @confirm="() => handleDelete(record.id)">
                  <a>删除</a>
                </a-popconfirm>
              </a-menu-item>
              <a-menu-item>
                <a @click="handleTest(record)">发送测试</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span> -->
      </a-table>
    </div>
    <!-- table区域-end -->

    <!-- 表单区域 -->
    <!-- <sysMessageTemplate-modal ref="modalForm"
                              @ok="modalFormOk" />

    <sysMessageTest-modal ref="testModal" /> -->
  </a-card>
</template>

<script>
// import SysMessageTemplateModal from './modules/SysMessageTemplateModal'
// import SysMessageTestModal from './modules/SysMessageTestModal'
import { mixin } from '@/mixins/mixin'
// import { getJobFairList } from '@/api/list/index'
// import JEllipsis from '@/components/jeecg/JEllipsis'

export default {
  name: 'PlatformOrgan',
  components: {
    // JEllipsis,
    // SysMessageTemplateModal,
    // SysMessageTestModal
  },
  mixins: [mixin],
  data () {
    return {
      queryParam: {
        identityRole: 1
      },
      toggleSearchStatus: '',
      description: '消息模板管理页面',
      // 表头
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          align: 'center',
          customRender: function (t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '模板CODE',
          align: 'center',
          dataIndex: 'templateCode'
        },
        {
          title: '模板标题',
          align: 'center',
          dataIndex: 'templateName'
        },
        {
          title: '模板内容',
          align: 'center',
          dataIndex: 'templateContent',
          scopedSlots: { customRender: 'templateContent' }
        },
        {
          title: '模板类型',
          align: 'center',
          dataIndex: 'templateType',
          customRender: function (text) {
            if (text == '1') {
              return '短信'
            }
            if (text == '2') {
              return '邮件'
            }
            if (text == '3') {
              return '微信'
            }
            if (text == '4') {
              return '系统'
            }
          }
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      selectedRowKeys: [],
      url: {
        list: '/accept/jobAccept/listAdmin/Desensitization',
        delete: '/message/sysMessageTemplate/delete',
        deleteBatch: '/message/sysMessageTemplate/deleteBatch',
        exportXlsUrl: 'message/sysMessageTemplate/exportXls',
        importExcelUrl: 'message/sysMessageTemplate/importExcel'
      }
    }
  },
  computed: {

  },
  mounted () {
    // console.log(this.$route, 'routeCompanInfo');
  },
  methods: {
    handleImportExcel () {
    },
    handleAdd () {

    }
  }
}
</script>
<style lang="less" scoped>
/** Button按钮间距 */
.ant-btn {
  margin-left: 3px;
}

.ant-card-body .table-operator {
  margin-bottom: 18px;
}

.ant-table-tbody .ant-table-row td {
  padding-top: 15px;
  padding-bottom: 15px;
}

.anty-row-operator button {
  margin: 0 5px;
}

.ant-btn-danger {
  background-color: #ffffff;
}

.ant-modal-cust-warp {
  height: 100%;
}

.ant-modal-cust-warp .ant-modal-body {
  height: calc(100% - 110px) !important;
  overflow-y: auto;
}

.ant-modal-cust-warp .ant-modal-content {
  height: 90% !important;
  overflow-y: hidden;
}
</style>
