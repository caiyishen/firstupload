"use strict";(self.webpackChunkhello_world=self.webpackChunkhello_world||[]).push([[673],{91673:function(e,t,l){l.r(t),l.d(t,{default:function(){return o}}),l(57658);var a={name:"RouteView",data(){return{collapsed:!1,openKeys:[]}},watch:{openKeys(e){console.log("openKeys",e)}},computed:{permissionList(){return this.$store.getters.permissionList},keepAlive(){return this.$route.meta.keepAlive},username(){return"cai"}},mounted(){},methods:{titleClick(e){console.log("titleClick",e)},handleClick(e){console.log("handleClick",e)},menuClick(e){console.log("menuClick",e),this.$router.push(e.key)},handleLogout(){let e=this;this.$confirm({content:"确定退出登录?",onOk(){e.$store.dispatch("user/LogOut").then((()=>{e.$router.replace("/login")}))}})}}},o=(0,l(1001).Z)(a,(function(){var e=this,t=e._self._c;return t("a-layout",{attrs:{id:"components-layout-demo-custom-trigger"}},[t("a-layout-sider",{attrs:{trigger:null,collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[t("div",{staticClass:"logo"},[e._v(e._s(e.collapsed?"后台":"后台管理")+" ")]),t("a-menu",{staticClass:"aMenu",style:{width:e.collapsed?"100%":"auto"},attrs:{"default-selected-keys":[e.permissionList[0].path],"open-keys":e.openKeys,mode:"inline"},on:{"update:openKeys":function(t){e.openKeys=t},"update:open-keys":function(t){e.openKeys=t},click:e.handleClick}},[e._l(e.permissionList,(function(l,a){return[l.children?t("a-sub-menu",{key:l.path,on:{titleClick:e.titleClick}},[t("span",{attrs:{slot:"title"},slot:"title"},[t("a-icon",{attrs:{type:"appstore"}}),t("span",[e._v(e._s(l.meta.title))])],1),e._l(l.children,(function(l,a){return l.hidden?e._e():t("a-menu-item",{key:l.path,on:{click:e.menuClick}},[e._v(" "+e._s(l.meta.title)+" ")])}))],2):[t("a-menu-item",{key:l.path,on:{click:e.menuClick}},[t("a-icon",{attrs:{type:"appstore"}}),t("span",[e._v(e._s(l.meta.title))])],1)]]}))],2)],1),t("a-layout",[t("a-layout-header",{staticClass:"flex-between",staticStyle:{background:"#fff",padding:"0"}},[t("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:()=>e.collapsed=!e.collapsed}}),t("a-dropdown",{staticStyle:{"margin-right":"16px"}},[t("span",[e._v(e._s(e.username)+" "),t("a-avatar",{attrs:{size:"small",icon:"user"}})],1),t("a-menu",{staticClass:"user-dropdown-menu-wrapper",attrs:{slot:"overlay"},slot:"overlay"},[t("a-menu-item",{on:{click:e.handleLogout}},[t("span",[e._v("退出登录")])])],1)],1)],1),t("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:"280px"}},[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[[e.keepAlive?t("keep-alive",[t("router-view",{key:e.$route.fullPath})],1):t("router-view",{key:e.$route.fullPath})]],2)],1)],1)],1)}),[],!1,null,"41f1eb52",null).exports}}]);
//# sourceMappingURL=673.3172cadf.js.map