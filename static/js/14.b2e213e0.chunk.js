(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[14],{659:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(12),i=n(5),u=n.n(i),o=n(32),c=n(9),r=n(25);function d(e){var t=e.Instance,n=e.onPending,i=e.addSelectedId,d=e.onDelete,h=e.onActive;return{onAddAsync:function(e){return function(){var a=Object(c.a)(u.a.mark((function a(c){var d,h,s,l,p;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return d=e.validatedValues,h=d.otherPath,c(n(!0)),s=new t,l=h?[].concat(Object(o.a)(s.pathDatas),Object(o.a)(h)):s.pathDatas,a.next=7,Object(r.a)(l,d);case 7:return p=a.sent,i&&c(null===i||void 0===i?void 0:i(null===p||void 0===p?void 0:p.id)),c(n(!1)),a.abrupt("return",p);case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onUpdateAsync:function(e){return function(){var a=Object(c.a)(u.a.mark((function a(i){var c,d,h,s,l,p;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.currentData,d=e.validatedValues,h=c.id,s=c.otherPath,i(n(!0)),l=new t,p=s?[].concat(Object(o.a)(l.pathDatas),Object(o.a)(s),[h]):[].concat(Object(o.a)(l.pathDatas),[h]),a.next=7,Object(r.h)(p,d);case 7:return i(n(!1)),a.abrupt("return",!0);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onActiveAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var a=Object(c.a)(u.a.mark((function a(i){var c,d,s,l,p;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.id,d=e.active,s=e.otherPath,i(n(!0)),l=new t,p=s?[].concat(Object(o.a)(l.pathDatas),Object(o.a)(s),[c]):[].concat(Object(o.a)(l.pathDatas),[c]),a.next=6,Object(r.h)(p,{active:d});case 6:h&&i(h(c,d)),i(n(!1));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},onDeleteAsync:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var i=Object(c.a)(u.a.mark((function i(c){var h,s,l,p,m,b,g,f;return u.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s=e.id,l=e.otherPath,c(n(!0)),p=new t,m=l?[].concat(Object(o.a)(l),[s]).join("/"):s,b=p.getPathDatas(m),g=p.getPathDeleted(m),h={},Object(a.a)(h,b,null),Object(a.a)(h,g,e),f=h,i.next=9,Object(r.h)(null,f);case 9:return d&&c(d(e)),c(n(!1)),i.abrupt("return",!0);case 12:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()}}}},660:function(e,t,n){"use strict";var a=n(662);n.d(t,"a",(function(){return a.a}));n(661),n(663),n(664);var i=n(665);n.d(t,"b",(function(){return i.a}))},666:function(e,t,n){"use strict";var a=n(44),i=n(29),u=n(667),o=n(0),c=n.n(o),r=n(54),d=n(11),h=n(327),s=n(14),l=["modalId","constants","actions","datas","loading","isSelection","form","rowSelection","summary"];t.a=function(e){var t=e.modalId,n=e.constants,o=e.actions,p=e.datas,m=e.loading,b=e.isSelection,g=e.form,f=e.rowSelection,v=e.summary,C=Object(u.a)(e,l),y=Object(r.b)(),O=Object(r.c)((function(e){return e.table})).selectedRowKeys,j=Object(r.c)((function(e){return e.hideColumns})),N=null===j||void 0===j?void 0:j[t||""],D=c.a.useMemo((function(){var e={};return b?e.rowSelection=Object(i.a)({selectedRowKeys:O[t||""]||[],onChange:function(e,n){y(Object(h.d)({tableId:t,selectedRowKeys:e,selectedRows:n}))}},f):delete e.rowSelection,e}),[b,O]);function w(e,t){var n=Object(i.a)(Object(i.a)({},e),{},{active:t});y(null===o||void 0===o?void 0:o.onActiveAsync(n))}function A(e){(null===o||void 0===o?void 0:o.onDeleteAsync)&&y(o.onDeleteAsync(e))}var T=Object(d.useSearchText)(),P=Object(a.a)(T,3),B=P[0],x=P[1],I=P[2],V=c.a.useMemo((function(){var e=Object(d.getTableColumns)(n,{onActiveItem:w,onDeleteItem:A,searchText:B,searchInput:I,setSearchText:x,modalId:t,constants:n,form:g});return N&&(e=e.filter((function(e){return!(null===N||void 0===N?void 0:N[e.id])}))),e}),[B,N]),S=c.a.useMemo((function(){var t=Object.values(p||{});return(null===e||void 0===e?void 0:e.onCallbackDataSource)&&(t=e.onCallbackDataSource(t)),t}),[p]);return Object(s.b)("div",{className:"table",children:Object(s.b)(d.MyTable,Object(i.a)(Object(i.a)(Object(i.a)({},D),C),{},{rowKey:"id",height:"100%",loading:m,columns:V,dataSource:S,summary:v||null}))})}},717:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(40),i=n(11),u={tenNhaCungCap:{id:"tenNhaCungCap",name:"T\xean NCC",width:120,isSearch:!0,fixed:!0,className:"text-small font-weight-bold",sorter:Object(i.sortByText)("tenNhaCungCap"),form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},nganhNgheKinhDoanh:{id:"nganhNgheKinhDoanh",name:"Ng\xe0nh ngh\u1ec1 KD",width:100,className:"text-small ",isSearch:!0,form:{type:"input"}},diaChiNhaCungCap:{id:"diaChiNhaCungCap",name:"\u0110\u1ecba ch\u1ec9",width:140,className:"text-small ",isSearch:!0,form:{type:"text-area"}},nguoiLienHe:{id:"nguoiLienHe",name:"Ng\u01b0\u1eddi li\xean h\u1ec7",width:100,className:"text-small ",form:{type:"input"}},soDienThoai:{id:"soDienThoai",name:"S\u1ed1 \u0110T",width:100,className:"text-small ",align:"center",form:{type:"input"}},getTableColumns:function(){return[a.a.stt,this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai,a.a.active,a.a.editRow]},getInputFields:function(){return[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai]},getExcelFields:function(){return[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai,a.a.active]},getFormViewFields:function(){var e=[this.tenNhaCungCap,this.nganhNgheKinhDoanh,this.diaChiNhaCungCap,this.nguoiLienHe,this.soDienThoai];return Object(i.getFormItemViewFields)(e)}}},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(40),i=n(11),u={tenDonViTinh:{id:"tenDonViTinh",name:"\u0110\u01a1n v\u1ecb t\xednh",width:120,className:"text-small font-weight-bold",form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},getTableColumns:function(){return[a.a.stt,this.tenDonViTinh,a.a.active,a.a.editRow]},getInputFields:function(){return[this.tenDonViTinh]},getExcelFields:function(){return[this.tenDonViTinh,a.a.active]},getFormViewFields:function(){var e=[this.tenDonViTinh];return Object(i.getFormItemViewFields)(e)}}},874:function(e){e.exports=JSON.parse('{"1603874064831":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603874064831"],"createdAt":1603874064831,"createdBy":"Admin","id":"1603874064831","name":"\xc1o thun xanh nh\xe2n vi\xean","price":75000,"tonCuoi":87,"updatedAt":1618793640359,"updatedBy":"luuha","vendor":"\xe1i qu\u1ed1c, Sao Vi\u1ec7t"},"1603874086587":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603874086587"],"createdAt":1603874086587,"createdBy":"Admin","id":"1603874086587","name":"\xc1o thun xanh coban VP","price":90000,"tonCuoi":-3,"updatedAt":1618793653183,"updatedBy":"luuha"},"1603940588331":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603940588331"],"createdAt":1603940588331,"createdBy":"luuha","id":"1603940588331","name":"T\u1ea1p d\u1ec1","price":35000,"tonCuoi":83,"updatedAt":1618793670390,"updatedBy":"luuha","vendor":"\xe1i qu\u1ed1c"},"1603940668375":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603940668375"],"createdAt":1603940668375,"createdBy":"luuha","id":"1603940668375","name":"N\xf3n nh\xe2n vi\xean","price":35000,"tonCuoi":125,"updatedAt":1618793676007,"updatedBy":"luuha","vendor":"\xe1i qu\u1ed1c"},"1603940826032":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603940826032"],"createdAt":1603940826032,"createdBy":"luuha","id":"1603940826032","name":"N\xf3n V\u0103n Ph\xf2ng","price":40000,"tonCuoi":38,"updatedAt":1618793688591,"updatedBy":"luuha"},"1603940886471":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603940886471"],"createdAt":1603940886471,"createdBy":"luuha","id":"1603940886471","name":"\xc1o B\u1ebfp","price":125000,"tonCuoi":1,"updatedAt":1618793699303,"updatedBy":"luuha"},"1603940983743":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603940983743"],"createdAt":1603940983743,"createdBy":"luuha","id":"1603940983743","name":"N\xf3n B\u1ebfp","price":35000,"tonCuoi":2,"updatedAt":1618793712535,"updatedBy":"luuha"},"1603941013638":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603941013638"],"createdAt":1603941013638,"createdBy":"luuha","id":"1603941013638","name":"N\xf3n Qu\u1ea7y N\u01b0\u1edbc","price":40000,"tonCuoi":59,"updatedAt":1618793724174,"updatedBy":"luuha"},"1603941042070":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603941042070"],"createdAt":1603941042070,"createdBy":"luuha","id":"1603941042070","name":"B\u1ea3ng T\xean + D\xe2y \u0111eo","price":25000,"tonCuoi":47,"updatedAt":1617954027041,"updatedBy":"oanhphu"},"1603943416948":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603943416948"],"createdAt":1603943416948,"createdBy":"luuha","id":"1603943416948","name":"\xc1o Thun V\xe0ng","price":90000,"tonCuoi":37,"updatedAt":1618793833807,"updatedBy":"luuha"},"1603943428308":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603943428308"],"createdAt":1603943428308,"createdBy":"luuha","id":"1603943428308","name":"\u1ee6ng","price":58000,"tonCuoi":-6,"updatedAt":1618793843894,"updatedBy":"luuha"},"1603943442859":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603943442859"],"createdAt":1603943442859,"createdBy":"luuha","id":"1603943442859","name":"Gi\xe0y m\u1ecdi","price":33000,"tonCuoi":-24,"updatedAt":1618793849533,"updatedBy":"luuha"},"1603970747233":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1603970747233"],"createdAt":1603970747233,"createdBy":"Admin","id":"1603970747233","name":"\xc1o Blouse","price":100000,"tonCuoi":-6,"updatedAt":1618793856149,"updatedBy":"luuha"},"1604727426117":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1604727426117"],"createdAt":1604727426117,"createdBy":"Admin","id":"1604727426117","name":"Qu\u1ea7n, \xe1o b\u1ea3o v\u1ec7","price":225000,"tonCuoi":2,"updatedAt":1608089110654,"updatedBy":"luuha"},"1604727434904":{"active":true,"api":["employee","thietLap","dongPhuc","datas","1604727434904"],"createdAt":1604727434904,"createdBy":"Admin","id":"1604727434904","name":"N\xf3n b\u1ea3o v\u1ec7","price":25000,"tonCuoi":4,"updatedAt":1608089114342,"updatedBy":"luuha"}}')},918:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(29),u=n(44),o=n(0),c=n.n(o),r=n(54),d=n(660),h=n(217),s=n(40),l=n(668),p=n(11),m=n(717),b=n(736),g={tenDongPhuc:{id:"tenDongPhuc",name:"T\xean \u0111\u1ed3ng ph\u1ee5c",width:150,className:"text-small font-weight-bold",isSearch:!0,form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},nhaCungCapId:{id:"nhaCungCapId",name:"Nh\xe0 cung c\u1ea5p",width:100},giaNhap:{id:"giaNhap",name:"Gi\xe1 nh\u1eadp",width:100,className:"text-small font-weight-bold",align:"right",sorter:Object(p.sortByNumber)("giaNhap"),form:{type:"input-number-format"},render:p.numberRender},tonCuoi:{id:"tonCuoi",name:"T\u1ed3n cu\u1ed1i",width:80,className:"text-small font-weight-bold",align:"right",sorter:Object(p.sortByNumber)("giaNhap"),form:{type:"input-number-format"},render:p.numberRender},getTableColumns:function(){return[Object(i.a)(Object(i.a)({},s.a.stt),{},{fixed:!1}),this.tenDongPhuc,this.giaNhap,this.tonCuoi,Object(i.a)(Object(i.a)({},b.a.tenDonViTinh),{},{align:"center"}),m.a.tenNhaCungCap,s.a.active,s.a.editRow]},getInputFields:function(){return[this.tenDongPhuc,this.giaNhap,this.tonCuoi]},getExcelFields:function(){return[this.tenDongPhuc,this.giaNhap,this.tonCuoi,b.a.tenDonViTinh,m.a.tenNhaCungCap,s.a.active]},getFormViewFields:function(){var e=[this.tenDongPhuc,this.giaNhap];return Object(p.getFormItemViewFields)(e)}},f=n(666),v=n(5),C=n.n(v),y=n(9),O=n(659),j=n(362),N=n(349),D=n(874),w=n(344),A=n(14),T=function(e){var t=Object(r.b)(),n=Object(r.c)((function(e){return e.nhaCungCap})).nhaCungCaps,a=c.a.useMemo((function(){return Object.values(n).filter((function(e){return e.active})).map((function(e){var t="".concat(e.tenNhaCungCap," - ").concat(e.nganhNgheKinhDoanh);return{value:e.id,label:t}}))}),[n]);return Object(A.b)(p.MyFormItem,{label:"Nh\xe0 CC",type:"select",name:"nhaCungCapId",innerProps:{showSearch:!0,allowClear:!0,filterOption:p.onSelectSearch,onChange:function(e){t(Object(w.a)(e))}},options:a})},P=n(345),B=function(e){var t=Object(r.b)(),n=Object(r.c)((function(e){return e.donViTinh})).donViTinhs,a=c.a.useMemo((function(){return Object.values(n).filter((function(e){return e.active})).map((function(e){var t=e.tenDonViTinh;return{value:e.id,label:t}}))}),[n]);return Object(A.b)(p.MyFormItem,{label:"DonViTinh",type:"select",name:"donViTinhId",innerProps:{showSearch:!0,allowClear:!0,filterOption:p.onSelectSearch,onChange:function(e){t(Object(P.a)(e))}},options:a})},x=s.d.duLieuDongPhucModal,I=function(e){var t=e.onAfterAddFinish,n=Object(O.a)({Instance:j.a,onPending:N.d,addSelectedId:N.a}),a=Object(r.b)(),i=Object(r.c)((function(e){return e.form})),u=i.modal,o=i.datas,d=c.a.useMemo((function(){var e;return!!(null===u||void 0===u||null===(e=u[x])||void 0===e?void 0:e.open)}),[u[x]]);function s(){return(s=Object(y.a)(C.a.mark((function e(i,u){var o,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=!0,!u){e.next=15;break}if(i.id){e.next=10;break}return e.next=5,a(n.onAddAsync({validatedValues:u}));case 5:o=e.sent,null===t||void 0===t||t(null===(c=o)||void 0===c?void 0:c.id),o=Boolean(o),e.next=15;break;case 10:return e.t0=Boolean,e.next=13,a(n.onUpdateAsync({currentData:i,validatedValues:u}));case 13:e.t1=e.sent,o=(0,e.t0)(e.t1);case 15:o&&a(h.a({modalId:x}));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.useEffect((function(){}),[D]),Object(A.c)(p.MyModal,{form:!0,title:"DuLieuDongPhuc",visible:d,onClose:function(){a(h.a({modalId:x}))},onOkModal:function(e,t){return s.apply(this,arguments)},formOptions:Object(p.getFormItemFields)(g.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:x,datas:o,children:[Object(A.b)(T,{}),Object(A.b)(B,{})]})},V=n(327),S=s.d.duLieuDongPhucModal;t.default=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.duLieuDongPhuc})),n=t.tabsData,o=t.loading,s=t.duLieuDongPhucs,p=Object(r.c)((function(e){return{nhaCungCaps:e.nhaCungCap.nhaCungCaps,donViTinhs:e.donViTinh.donViTinhs}})),m=p.nhaCungCaps,b=p.donViTinhs,v=Object(O.a)({Instance:j.a,onPending:N.d,addSelectedId:N.a});var C=c.a.useMemo((function(){return s?Object.entries(s).reduce((function(e,t){var n,o,c=Object(u.a)(t,2),r=c[0],d=c[1],h=d.nhaCungCapId,s=d.donViTinhId,l=(null===(n=m[h])||void 0===n?void 0:n.tenNhaCungCap)||h,p=(null===(o=b[s])||void 0===o?void 0:o.tenDonViTinh)||s;return Object(i.a)(Object(i.a)({},e),{},Object(a.a)({},r,Object(i.a)(Object(i.a)({},d),{},{tenNhaCungCap:l,tenDonViTinh:p})))}),{}):{}}),[s,m,b]);return Object(A.c)("div",{className:"duLieuDongPhuc-page",css:l.a,children:[Object(A.b)(d.b,{className:"tabs",options:n,activeKey:"all",onTabClick:function(t){if("add"===t){var n=new j.a;e(h.c({modalId:S,data:n.initData}))}else"taiExcel"===t&&e(Object(V.b)({tableId:S,constants:g,fileSheet:"duLieuDongPhucSheet",fileName:"duLieuDongPhucName"}))}}),Object(A.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(A.b)("div",{className:"aside-main",children:Object(A.b)(f.a,{constants:g,actions:v,datas:C,loading:o,modalId:S,isSelection:!0})})}),Object(A.b)(I,{})]})}}}]);