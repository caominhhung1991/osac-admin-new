(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[70],{1089:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(37),d=n(212),c=n(408),r=n(211),l=n(91),s=n(24),u=n(100),h={khoId:{id:"khoId",name:"khoId"},tenKho:{id:"tenKho",name:"T\xean kho",width:100,className:"text-small font-weight-bold",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},diaChiKho:{id:"diaChiKho",name:"\u0110\u1ecba ch\u1ec9",width:150,className:"text-small",form:{type:"input"}},getTableColumns:function(){return[]},getInputFields:function(){return[]}},b={getTableColumns:function(){return[s.a.stt,h.tenKho,h.diaChiKho,s.a.active,s.a.editRow]},getInputFields:function(){return[h.tenKho,h.diaChiKho]},getExcelFields:function(){return[s.a.stt,h.tenKho,h.diaChiKho,s.a.active]}},f=n(99),p=n(3),m=n.n(p),v=n(8),O=n(6),j=n(98),g=n(468),K=n(438),I=n(36),S=n(12),k=s.d.danhSachKhoModal;var x=function(e){var t,n,a=e.onAfterAddFinish,d=Object(o.b)(),c=Object(o.c)((function(e){return e.form})),l=c.modal,s=c.datas,u=Object(o.c)((function(e){return e.account})).accountData,h=null===u||void 0===u||null===(t=u.paths)||void 0===t||null===(n=t.danhSachKho)||void 0===n?void 0:n.edit,f=Object(j.a)({Instance:g.a,onPending:K.d,addSelectedId:K.a,isEdit:h}),p=i.a.useMemo((function(){var e;return!!(null===l||void 0===l||null===(e=l[k])||void 0===e?void 0:e.open)}),[l[k]]);function x(){return(x=Object(v.a)(m.a.mark((function e(t,n){var i,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return",Object(I.h)());case 2:if(i=!0,o=Object(O.convertMomentToString)(b.getInputFields(),n),!n){e.next=18;break}if(null===t||void 0===t?void 0:t.id){e.next=13;break}return e.next=8,d(f.onAddAsync({validatedValues:o}));case 8:i=e.sent,null===a||void 0===a||a(null===(c=i)||void 0===c?void 0:c.id),i=Boolean(i),e.next=18;break;case 13:return e.t0=Boolean,e.next=16,d(f.onUpdateAsync({currentData:t,validatedValues:o}));case 16:e.t1=e.sent,i=(0,e.t0)(e.t1);case 18:i&&d(r.a({modalId:k}));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(S.b)(O.MyModal,{form:!0,title:Object(S.b)("div",{children:"Kho"}),visible:p,onClose:function(){d(r.a({modalId:k}))},onOkModal:function(e,t){return x.apply(this,arguments)},formOptions:Object(O.getFormItemFields)(b.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:k,datas:s})},C=n(17),w=s.d.danhSachKhoModal;t.default=function(){var e,t,n=Object(o.b)(),a=Object(o.c)((function(e){return e.danhSachKho})),s=a.tabsData,h=a.loading,p=a.pageSize,m=a.danhSachKhos,v=Object(o.c)((function(e){var t;return null===(t=e.tagsPage)||void 0===t?void 0:t[w]})),O=Object(o.c)((function(e){return e.account})).accountData,k=null===O||void 0===O||null===(e=O.paths)||void 0===e||null===(t=e.danhSachKho)||void 0===t?void 0:t.edit,y=Object(j.a)({Instance:g.a,onPending:K.d,addSelectedId:K.a,isEdit:k});return i.a.useEffect((function(){return n(Object(K.c)()),function(){Object(C.j)("danhSachKho")}}),[]),Object(S.c)("div",{className:"danhSachKho-page",css:u.a,children:[Object(S.b)(l.b,{className:"tabs",options:s,activeKey:v?"aside":"",onTabClick:function(e){if("add"===e&&k){if(!k)return Object(I.h)();var t=new g.a;n(Object(r.c)({modalId:w,data:t.initData}))}else"aside"===e?n(Object(c.b)({tagPageId:w})):"taiExcel"===e&&n(Object(d.b)({tableId:w,constants:b,fileSheet:"danhSachKhoSheet",fileName:"danhSachKhoName"}))}}),Object(S.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(S.b)("div",{className:"aside-main",children:Object(S.b)(f.a,{isEdit:k,constants:b,actions:y,datas:m,loading:h,modalId:w,expandable:{expandedRowRender:function(e){return Object(S.b)("div",{children:e.id})},expandRowByClick:!1},isSelection:!1,pagination:!0,pageSize:p,onChange:function(e){n(Object(K.e)(e.pageSize))},onRow:function(e){return{onClick:function(){k&&n(Object(r.c)({modalId:w,data:e}))}}}})})}),Object(S.b)(x,{})]})}}}]);