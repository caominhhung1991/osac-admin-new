(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[30],{1035:function(e,a,n){"use strict";n.r(a);var t=n(3),c=n.n(t),i=n(14),o=n(13),d=n(7),r=n(34),l=n(0),u=n.n(l),b=n(48),s=n(391),m=n(120),O=n(166),j=n(109),v=n(500),h=n(502),f=n(101),g=n(169),p=n(384),y=n(35),D=n(250),C=n(385),I=n(249),V=n(194),M=n(193),T=n(147),w=n(9),N=n(79),F=n(61),G=n(122),L=n(170),S=n(103),k={getTableColumns:function(){return[y.a.stt,F.b.maNV,F.b.hoTen,L.a.tenBoPhan,G.a.tenChucVu,N.a.tenCaLamViec,S.a.gioVao,S.a.gioRa,S.a.tongGio,S.a.congNgay,S.a.congTangCaNgay,S.a.lyDoVang,y.a.capNhatRow]},getInputFields:function(){return[S.a.congNgay,S.a.congTangCaNgay,S.a.lyDoVang]},getExcelFields:function(){return[F.b.maNV,F.b.hoTen,F.b.boPhanId,G.a.tenChucVu,N.a.tenCaLamViec,S.a.congNgay,S.a.congTangCaNgay,S.a.lyDoVang]}},x=n(256),R=n(764),P=n(42),B=n(15),E=y.d.diemDanhDauGiayModal;var K=function(e){var a,n,t,i=e.selectedTime,l=Object(g.useForm)(),s=Object(r.a)(l,1)[0],m=Object(g.useForm)(),O=Object(r.a)(m,1)[0],j=Object(b.b)(),v=Object(b.c)((function(e){return e.form})),h=v.modal,f=v.datas,p=Object(b.c)((function(e){return e.caLamViec})).caLamViecs,y=Object(b.c)((function(e){return e.account})).accountData,D=null===y||void 0===y||null===(a=y.paths)||void 0===a||null===(n=a.diemDanhDauGiay)||void 0===n?void 0:n.edit,C=u.a.useMemo((function(){var e;return!!(null===h||void 0===h||null===(e=h[E])||void 0===e?void 0:e.open)}),[null===(t=h[E])||void 0===t?void 0:t.open]),I=null===f||void 0===f?void 0:f[E];function V(){return(V=Object(d.a)(c.a.mark((function e(){var a,n,t,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D){e.next=2;break}return e.abrupt("return",Object(P.f)());case 2:return!0,e.next=5,O.validateFields();case 5:return n=e.sent,t=null===n||void 0===n?void 0:n.caLamViecId,d=null===p||void 0===p||null===(a=p[t])||void 0===a?void 0:a.tenCaLamViec,e.next=10,j(Object(x.f)({selectedTime:i,nhanSuArray:[Object(o.a)(Object(o.a)({},I),{},{caLamViecId:t,tenCaLamViec:d})],noiDungDiemDanhs:n}));case 10:e.sent&&j(M.a({modalId:E}));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.useEffect((function(){var e=null===f||void 0===f?void 0:f[E];e?(s.setFieldsValue(e),O.setFieldsValue(e)):(s.resetFields(),O.resetFields())}),[I]);var T=[F.b.maNV,F.b.hoTen],N=k.getInputFields();return Object(B.c)(w.MyModal,{title:"\u0110i\u1ec3m Danh",visible:C,onClose:function(){j(M.a({modalId:E}))},onOkModal:function(){return V.apply(this,arguments)},width:700,modalId:E,datas:f,children:[Object(B.b)(w.MyForm,{form:s,options:Object(w.getFormItemFields)(T),labelCol:{span:8},wrapperCol:{span:16}}),Object(B.b)(w.MyForm,{form:O,options:Object(w.getFormItemFields)(N),labelCol:{span:8},wrapperCol:{span:16}}),Object(B.b)(R.a,{form:O})]})},Y=n(478),z=n(776),A=n(8),J=n(18),Q=n(19),q=function(e){Object(J.a)(n,e);var a=Object(Q.a)(n);function n(){var e;Object(A.a)(this,n);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).initData={},e}return n}(n(236).a),H=n(17),U=n(60),W=n(517),X=n(545),Z=n.n(X),$=n(509),_=n(397),ee=y.b.diemDanhDauGiay,ae=function(e){var a=e.modalId,n=Object(b.b)(),t=Object(b.c)((function(e){return e.form})),c=t.modal,i=t.datas,o=Object(b.c)((function(e){return e.hideColumns})),d=null===o||void 0===o?void 0:o[y.d.diemDanhDauGiayModal],r=u.a.useMemo((function(){return a||ee}),[a]),l=u.a.useMemo((function(){var e;return!!(null===c||void 0===c||null===(e=c[ee])||void 0===e?void 0:e.open)}),[c[ee]]);var s=u.a.useMemo((function(){return k.getTableColumns()}),[]);return Object(B.b)(w.MyModal,{title:"Ch\u1ee9c n\u0103ng kh\xe1c",visible:l,onClose:function(){n(M.a({modalId:ee}))},width:600,modalId:r,datas:i,children:Object(B.b)($.b,{dataSource:s,renderItem:function(e){return Object(B.c)($.b.Item,{className:(null===d||void 0===d?void 0:d[e.id])?"hoverClass font-weight-bold":"bg-gold hoverClass",onClick:function(){n(Object(_.b)({tableId:y.d.diemDanhDauGiayModal,columnId:e.id}))},children:[Object(B.b)($.b.Item.Meta,{title:e.name}),Object(B.b)("div",{children:e.fixed?"[\u0110\xe3 c\u1ed1 \u0111\u1ecbnh]":""})]})}})})},ne=n(386),te=function(e){var a,n=e.dateTimePicker,t=Object(b.b)();return Object(B.c)(B.a,{children:[Object(B.b)(p.a,{header:Object(B.b)("div",{className:"font-weight-bold",children:Object(B.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(B.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(B.b)("div",{children:null===n||void 0===n||null===(a=n.getDayRender)||void 0===a?void 0:a.call(n)}),Object(B.b)("div",{children:Object(B.b)(U.a,{type:"primary",icon:Object(B.b)(W.a,{}),onClick:function(){return t(Object(M.c)({modalId:y.b.diemDanhDauGiay}))},children:"\u1ea8n c\u1ed9t c\u1ee7a b\u1ea3ng"})})]}),footer:Object(B.b)("div",{children:Object(B.b)(U.a,{icon:Object(B.b)(Z.a,{}),onClick:function(){t(Object(ne.b)({tagPageId:y.d.diemDanhDauGiayModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})}),Object(B.b)(ae,{modalId:y.d.diemDanhDauGiayModal})]})},ce=n(68),ie=n(37),oe=n.n(ie),de=y.d.diemDanhDauGiayModal;a.default=function(){var e,a,n,t,l=Object(b.b)(),N=Object(b.c)((function(e){return e.account})).isDev,F=Object(g.useForm)(),G=Object(r.a)(F,1)[0],L=Object(s.b)({defaultTime:N?oe()("31/03/2022","DD/MM/YYYY"):oe()()}),R=Object(r.a)(L,2),E=R[0],A=R[1],J=Object(b.c)((function(e){var a;return null===(a=e.tagsPage)||void 0===a?void 0:a[de]})),Q=Object(b.c)((function(e){return{nhanSusDauGiay:e.nhanSu.nhanSusDauGiay,selectedRows:e.table.selectedRows}})),U=Q.nhanSusDauGiay,W=Q.selectedRows,X=Object(b.c)((function(e){return e.nhanSu})).nhanSus,Z=Object(b.c)((function(e){return e.diemDanh})),$=Z.loading,_=Z.diemDanhsDay,ee=Z.bamVanTayByMonth,ae=Object(b.c)((function(e){return e.diemDanhDauGiay})),ie=ae.tabsData,re=ae.pageSize,le=Object(b.c)((function(e){return e.account})).accountData,ue=null===le||void 0===le||null===(e=le.paths)||void 0===e||null===(a=e.diemDanhDauGiay)||void 0===a?void 0:a.edit,be=Object(I.a)({Instance:q,onPending:x.e,addSelectedId:Y.a});function se(){return(se=Object(d.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue){e.next=2;break}return e.abrupt("return",Object(P.f)());case 2:if(a=G.getFieldsValue(),0!==(n=W[de]||[]).length){e.next=6;break}return e.abrupt("return",m.b.info("Ch\u01b0a ch\u1ecdn d\u1eef li\u1ec7u!"));case 6:return e.next=8,l(Object(x.f)({selectedTime:E,nhanSuArray:n,noiDungDiemDanhs:a}));case 8:l(Object(V.c)());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.useEffect((function(){return l(Object(x.d)(E)),l(Object(x.b)(E)),function(){Object(H.i)("diemDanhDauGiayNgay")}}),[E]),u.a.useEffect((function(){G.setFieldsValue({congNgay:1}),l(Object(T.i)())}),[]);var me=u.a.useMemo((function(){var e={trangThaiNhanSuId:ce.c.working.id,diaDiemId:"xuongDauGiay"},a=l(Object(T.c)(U,e)),n="ngayQuet"+(null===E||void 0===E?void 0:E.format("DD"));return Object.entries(a).reduce((function(e,a){var t,c=Object(r.a)(a,2),d=c[0],l=c[1],u=(null===ee||void 0===ee||null===(t=ee[d])||void 0===t?void 0:t[n])||{},b=(null===_||void 0===_?void 0:_[d])||{},s=Object(o.a)(Object(o.a)(Object(o.a)({},l),b),u);return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},d,s))}),{})}),[U,_,ee,E]);return Object(B.c)("div",{className:"diemDanhDauGiay-page",css:D.a,children:[Object(B.b)(p.b,{className:"tabs",options:ie,activeKey:"all",onTabClick:function(e){"taiExcel"===e?l(Object(V.b)({tableId:de,constants:k,fileSheet:"diemDanhDauGiayCom",fileName:"diemDanhDauGiayCom"})):"aside"===e?l(Object(ne.b)({tagPageId:de})):"xemThongKe"===e&&l(Object(M.c)({modalId:y.d.thongKeDiemDanhModal}))}}),Object(B.c)("div",{className:"tabs-main",children:[J&&Object(B.b)(te,{dateTimePicker:A,selectedTime:E}),Object(B.c)("div",{className:"aside-main",children:[Object(B.c)(O.a,{className:"form-selects",gutter:10,style:{marginTop:"7px"},children:[Object(B.b)(j.a,{sm:7,md:6,lg:5,children:A.getDayRender()}),Object(B.b)(j.a,{sm:17,md:18,lg:19,children:Object(B.c)(v.a,{layout:"inline",form:G,children:[Object(B.b)(v.a.Item,{name:S.a.congNgay.id,children:Object(B.b)(h.a,{placeholder:"C\xf4ng ng\xe0y",min:0})}),Object(B.b)(v.a.Item,{name:S.a.congTangCaNgay.id,children:Object(B.b)(h.a,{placeholder:"T\u0103ng ca",min:0})}),Object(B.b)(v.a.Item,{name:S.a.lyDoVang.id,children:Object(B.b)(f.a,{placeholder:"L\xfd do v\u1eafng",options:(null===(n=S.a.lyDoVang)||void 0===n||null===(t=n.form)||void 0===t?void 0:t.options)||[],allowClear:!0})}),Object(B.b)(w.MyButton,{onClick:function(){return se.apply(this,arguments)},children:"\u0110i\u1ec3m danh"})]})})]}),Object(B.b)(C.a,{constants:k,actions:be,datas:me,loading:$,modalId:de,pageSize:re,isSelection:!0,onChange:function(e){l(Object(Y.c)(e.pageSize))},pagination:!0,onRow:function(e){return{onClick:function(){console.log(e)}}},expandable:{expandedRowRender:function(e){var a=(null===X||void 0===X?void 0:X[e.id||""])||{};return Object(B.c)("div",{children:[e.id," - ",a.tenDiaDiem," - ",a.tenBoPhan," - ",a.tiengLamViec]})},expandRowByClick:!1}})]})]}),Object(B.b)(K,{selectedTime:E}),Object(B.b)(z.a,{datas:me})]})}},764:function(e,a,n){"use strict";var t=n(0),c=n.n(t),i=n(9),o=n(48),d=n(398),r=n(15);a.a=function(e){var a=e.form,n=Object(o.b)(),t=Object(o.c)((function(e){return e.caLamViec})).caLamViecs,l=c.a.useMemo((function(){return Object.values(t||{}).map((function(e){var a=e.tenCaLamViec;return{value:e.id,label:a}}))}),[t]);var u=Object(r.b)(i.MyFormItem,{label:"Ca L\xe0m Vi\u1ec7c",type:"select",name:"caLamViecId",innerProps:{showSearch:!0,allowClear:!0,filterOption:i.onSelectSearch,onChange:function(e){n(Object(d.addSelectedId)(e))}},options:l});return a?Object(r.b)(i.MyForm,{form:a,labelCol:{span:8},wrapperCol:{span:16},children:u}):u}},776:function(e,a,n){"use strict";var t=n(14),c=n(13),i=n(0),o=n.n(i),d=n(9),r=n(48),l=n(193),u=n(35),b=n(103),s=n(385),m=n(15),O=u.d.thongKeDiemDanhModal;a.a=function(e){var a,n=e.datas,i=Object(r.b)(),u=Object(r.c)((function(e){return e.form})).modal,j=Object(r.c)((function(e){return e.caLamViec})).caLamViecs,v=o.a.useMemo((function(){var e;return!!(null===u||void 0===u||null===(e=u[O])||void 0===e?void 0:e.open)}),[null===(a=u[O])||void 0===a?void 0:a.open]),h=o.a.useMemo((function(){return v?Object.values(n).reduce((function(e,a){var n=a.caLamViecId,i=a.congNgay,o=a.congTangCaNgay,d=null===j||void 0===j?void 0:j[n||""],r=(null===e||void 0===e?void 0:e[n||""])||{},l=(null===r||void 0===r?void 0:r.tong)||0,u=(null===r||void 0===r?void 0:r.diLam)||0,b=i||o?1:0,s=(null===r||void 0===r?void 0:r.vang)||0,m=i||o?0:1;return n?Object(c.a)(Object(c.a)({},e),{},Object(t.a)({},n,Object(c.a)(Object(c.a)({},d),{},{tong:l+1,diLam:u+b,vang:s+m}))):e}),{}):{}}),[v,n,j]);return Object(m.b)(d.MyModal,{title:"Th\u1ed1ng K\xea \u0110i\u1ec3m Danh",visible:v,onClose:function(){return i(l.a({modalId:O}))},width:700,modalId:O,datas:n,children:Object(m.b)(s.a,{scroll:{x:500},constants:b.b,datas:h,pagination:!1})})}}}]);