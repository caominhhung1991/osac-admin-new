(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[18],{659:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(12),c=n(5),r=n.n(c),i=n(32),o=n(9),s=n(25),u=n(116);function d(t){var e=t.Instance,n=t.onPending,c=t.addSelectedId,d=t.onDelete,l=t.onActive;return{onAddAsync:function(t){return function(){var a=Object(o.a)(r.a.mark((function a(o){var u,d,l,b,f;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=t.validatedValues,d=u.otherPath,o(n(!0)),l=new e,b=d?[].concat(Object(i.a)(l.pathDatas),Object(i.a)(d)):l.pathDatas,a.next=7,Object(s.a)(b,u);case 7:return f=a.sent,c&&o(null===c||void 0===c?void 0:c(null===f||void 0===f?void 0:f.id)),o(n(!1)),a.abrupt("return",f);case 11:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()},onUpdateAsync:function(t){return function(){var a=Object(o.a)(r.a.mark((function a(c){var o,d,l,b,f,v;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=t.currentData,d=t.validatedValues,l=o.id,b=o.otherPath,l){a.next=4;break}return a.abrupt("return",u.b.error("Ch\u01b0a c\xf3 id"));case 4:return c(n(!0)),f=new e,v=b?[].concat(Object(i.a)(f.pathDatas),Object(i.a)(b),[l]):[].concat(Object(i.a)(f.pathDatas),[l]),a.next=9,Object(s.h)(v,d);case 9:return c(n(!1)),a.abrupt("return",!0);case 11:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()},onActiveAsync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var a=Object(o.a)(r.a.mark((function a(c){var o,u,d,b,f;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=t.id,u=t.active,d=t.otherPath,c(n(!0)),b=new e,f=d?[].concat(Object(i.a)(b.pathDatas),Object(i.a)(d),[o]):[].concat(Object(i.a)(b.pathDatas),[o]),a.next=6,Object(s.h)(f,{active:u});case 6:l&&c(l(o,u)),c(n(!1));case 8:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()},onDeleteAsync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var c=Object(o.a)(r.a.mark((function c(o){var u,l,b,f,v,h,m,p;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l=t.id,b=t.otherPath,o(n(!0)),f=new e,v=b?[].concat(Object(i.a)(b),[l]).join("/"):l,h=f.getPathDatas(v),m=f.getPathDeleted(v),u={},Object(a.a)(u,h,null),Object(a.a)(u,m,t),p=u,c.next=9,Object(s.h)(null,p);case 9:return d&&o(d(t)),o(n(!1)),c.abrupt("return",!0);case 12:case"end":return c.stop()}}),c)})));return function(t){return c.apply(this,arguments)}}()}}}},660:function(t,e,n){"use strict";var a=n(662);n.d(e,"a",(function(){return a.a}));n(661),n(663),n(664);var c=n(665);n.d(e,"b",(function(){return c.a}))},666:function(t,e,n){"use strict";var a=n(44),c=n(29),r=n(667),i=n(0),o=n.n(i),s=n(54),u=n(11),d=n(327),l=n(14),b=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary"];e.a=function(t){var e=t.modalId,n=t.constants,i=t.actions,f=t.datas,v=t.loading,h=t.isSelection,m=t.form,p=t.rowSelection,j=t.summary,O=Object(r.a)(t,b),w=Object(s.b)(),y=Object(s.c)((function(t){return t.table})).selectedRowKeys,D=Object(s.c)((function(t){return t.hideColumns})),g=null===D||void 0===D?void 0:D[e||""],T=o.a.useMemo((function(){var t={};return h?t.rowSelection=Object(c.a)({selectedRowKeys:y[e||""]||[],onChange:function(t,n){w(Object(d.d)({tableId:e,selectedRowKeys:t,selectedRows:n}))}},p):delete t.rowSelection,t}),[h,y]);function I(t,e){var n=Object(c.a)(Object(c.a)({},t),{},{active:e});w(null===i||void 0===i?void 0:i.onActiveAsync(n))}function x(t){(null===i||void 0===i?void 0:i.onDeleteAsync)&&w(i.onDeleteAsync(t))}var A=Object(u.useSearchText)(),V=Object(a.a)(A,3),S=V[0],k=V[1],C=V[2],F=o.a.useMemo((function(){var t=Object(u.getTableColumns)(n,{onActiveItem:I,onDeleteItem:x,searchText:S,searchInput:C,setSearchText:k,modalId:e,constants:n,form:m});return g&&(t=t.filter((function(t){return!(null===g||void 0===g?void 0:g[t.id])}))),t}),[S,g]),M=o.a.useMemo((function(){var e=Object.values(f||{});return(null===t||void 0===t?void 0:t.onCallbackDataSource)&&(e=t.onCallbackDataSource(e)),e}),[f]);return Object(l.b)("div",{className:"table",children:Object(l.b)(u.MyTable,Object(c.a)(Object(c.a)(Object(c.a)({},T),O),{},{rowKey:"id",height:"100%",loading:v,columns:F,dataSource:M,summary:j||null}))})}},671:function(t,e,n){"use strict";var a=n(5),c=n.n(a),r=n(29),i=n(9),o=n(667),s=n(0),u=n.n(s),d=n(11),l=n(54),b=n(217),f=n(14),v=["modalId","constants","actions","modalTitle","onAfterAddFinish"];e.a=function(t){var e=t.modalId,n=t.constants,a=t.actions,s=t.modalTitle,h=t.onAfterAddFinish,m=Object(o.a)(t,v),p=Object(l.b)(),j=Object(l.c)((function(t){return t.form})),O=j.modal,w=j.edit,y=j.datas,D=u.a.useMemo((function(){var t;return!!(null===(t=O[e])||void 0===t?void 0:t.open)}),[O[e]]),g=u.a.useMemo((function(){return Object(d.getFormItemFields)(n.getInputFields(),w)}),[w]);function T(){return(T=Object(i.a)(c.a.mark((function t(n,r){var i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=!0,!r){t.next=15;break}if(n.id){t.next=10;break}return t.next=5,p(a.onAddAsync({validatedValues:r}));case 5:i=t.sent,null===h||void 0===h||h(null===(o=i)||void 0===o?void 0:o.id),i=Boolean(i),t.next=15;break;case 10:return t.t0=Boolean,t.next=13,p(a.onUpdateAsync({currentData:n,validatedValues:r}));case 13:t.t1=t.sent,i=(0,t.t0)(t.t1);case 15:i&&p(b.a({modalId:e}));case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(f.b)(d.MyModal,Object(r.a)(Object(r.a)({},m),{},{form:!0,title:s,modalId:e,visible:D,onClose:function(t,e){return T.apply(this,arguments)},formOptions:g,formProps:{labelCol:{span:8},wrapperCol:{span:16}},datas:y}))}},736:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(40),c=n(11),r={tenDonViTinh:{id:"tenDonViTinh",name:"\u0110\u01a1n v\u1ecb t\xednh",width:120,className:"text-small font-weight-bold",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},getTableColumns:function(){return[a.a.stt,this.tenDonViTinh,a.a.active,a.a.editRow]},getInputFields:function(){return[this.tenDonViTinh]},getExcelFields:function(){return[this.tenDonViTinh,a.a.active]},getFormViewFields:function(){var t=[this.tenDonViTinh];return Object(c.getFormItemViewFields)(t)}}},908:function(t,e,n){"use strict";n.r(e);n(0);var a=n(54),c=n(660),r=n(217),i=n(40),o=n(668),s=n(736),u=n(666),d=n(671),l=n(406),b=n(659),f=n(345),v=n(327),h=n(14),m=i.d.donViTinhModal;e.default=function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.donViTinh})),n=e.tabsData,i=e.loading,p=e.donViTinhs,j=Object(b.a)({Instance:l.a,onPending:f.d,addSelectedId:f.a});return Object(h.c)("div",{className:"donViTinh-page",css:o.a,children:[Object(h.b)(c.b,{className:"tabs",options:n,activeKey:"all",onTabClick:function(e){if("add"===e){var n=new l.a;t(r.c({modalId:m,data:n.initData}))}else"taiExcel"===e&&t(Object(v.b)({tableId:m,constants:s.a,fileSheet:"donViTinh",fileName:"donViTinh"}))}}),Object(h.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(h.b)("div",{className:"aside-main",children:Object(h.b)(u.a,{constants:s.a,actions:j,datas:p,loading:i,modalId:m,isSelection:!0})})}),Object(h.b)(d.a,{modalTitle:"DonViTinh",constants:s.a,actions:j,modalId:m})]})}}}]);