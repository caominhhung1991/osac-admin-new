(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[16],{716:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={appSettings:"/app-settings",diaDiem:"/app-settings/dia-diem",khachHang:"/app-settings/khach-hang",noiPhucVu:"/app-settings/noi-phuc-vu",donViTinh:"/app-settings/don-vi-tinh",nhaCungCap:"/app-settings/nha-cung-cap"}},754:function(e,t,n){"use strict";var a=n(3),c=n.n(a),i=n(8),o=n(0),r=n.n(o),d=n(12),l=n(60),u=n(48),b=n(289),s=n(47),h=n(189),f=n(230),g=n(244),O=n(395),m=n(33),j=n(378),p=n(57),v=n(716),k=n(14),C=m.d.khachHangModal;t.a=function(e){var t,n,a=e.onAfterAddFinish,o=Object(g.a)({Instance:O.a,onPending:j.e,addSelectedId:j.a}),m=Object(s.b)(),M=Object(u.u)(),y=Object(s.c)((function(e){return e.form})),I=y.modal,x=y.datas,N=Object(s.c)((function(e){return e.account})).accountData,S=null===N||void 0===N||null===(t=N.paths)||void 0===t||null===(n=t.khachHang)||void 0===n?void 0:n.edit,T=r.a.useMemo((function(){var e;return!!(null===I||void 0===I||null===(e=I[C])||void 0===e?void 0:e.open)}),[I[C]]);function w(){return(w=Object(i.a)(c.a.mark((function e(t,n){var i,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return",Object(p.f)());case 2:if(i=!0,r=Object(d.convertMomentToString)(f.a.getInputFields(),n),!n){e.next=18;break}if(null===t||void 0===t?void 0:t.id){e.next=13;break}return e.next=8,m(o.onAddAsync({validatedValues:r}));case 8:i=e.sent,null===a||void 0===a||a(null===(l=i)||void 0===l?void 0:l.id),i=Boolean(i),e.next=18;break;case 13:return e.t0=Boolean,e.next=16,m(o.onUpdateAsync({currentData:t,validatedValues:r}));case 16:e.t1=e.sent,i=(0,e.t0)(e.t1);case 18:i&&m(h.a({modalId:C}));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.b)(d.MyModal,{form:!0,title:Object(k.c)("div",{children:["Kh\xe1ch H\xe0ng ",Object(k.b)(l.a,{icon:Object(k.b)(b.a,{}),onClick:function(){M(v.a.khachHang)},children:"Trang qu\u1ea3n l\xfd"})]}),visible:T,onClose:function(){m(h.a({modalId:C}))},onOkModal:function(e,t){return w.apply(this,arguments)},formOptions:Object(d.getFormItemFields)(f.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:C,datas:x})}},788:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(60),o=n(119),r=n(48),d=n(12),l=n(47),u=n(378),b=n(754),s=n(89),h=n(289),f=n(189),g=n(33),O=n(716),m=n(14);t.a=function(e){var t,n,a=e.form,j=e.name,p=e.mode,v=e.label,k=e.labelCol,C=e.wrapperCol,M=e.rules,y=e.isAddNew,I=e.isTrangQuanLy,x=e.onAfterSelect,N=e.disabled,S=Object(l.b)(),T=Object(r.u)(),w=Object(l.c)((function(e){return e.khachHang})).khachHangs,H=Object(l.c)((function(e){return e.account})).accountData,F=c.a.useMemo((function(){return Object.values(w).filter((function(e){return e.active})).map((function(e){var t="".concat(e.khachHangName);return{value:e.id,label:t}}))}),[w]),q=null===H||void 0===H||null===(t=H.paths)||void 0===t||null===(n=t.khachHang)||void 0===n?void 0:n.edit;var D=Object(m.b)(d.MyFormItem,{label:v||"Kh\xe1ch h\xe0ng",type:"select",name:j||"khachHangId",innerProps:{mode:p,showSearch:!0,allowClear:!0,filterOption:d.onSelectSearch,onChange:function(e){S(Object(u.a)(e)),null===x||void 0===x||x(e)},disabled:N,notFoundContent:q?Object(m.c)("div",{children:[y?Object(m.b)(i.a,{icon:Object(m.b)(s.a,{}),type:"primary",onClick:function(){return S(Object(f.c)({modalId:g.d.khachHangModal}))},children:"Th\xeam"}):null,I?Object(m.b)(i.a,{icon:Object(m.b)(h.a,{}),type:"dashed",onClick:function(){T(O.a.khachHang)},children:"Q. l\xfd"}):null]}):Object(m.b)(o.a,{})},options:F,rules:M||[]});return a?Object(m.c)(m.a,{children:[Object(m.b)(d.MyForm,{form:a,labelCol:k||{span:8},wrapperCol:C||{span:16},children:D}),q&&Object(m.b)(b.a,{onAfterAddFinish:function(e){a.setFieldsValue({khachHangId:e})}})]}):Object(m.c)(m.a,{children:[D,q&&Object(m.b)(b.a,{})]})}},978:function(e,t,n){"use strict";n.r(t);var a=n(36),c=n(0),i=n.n(c),o=n(39),r=n.n(o),d=n(168),l=n(47),u=n(367),b=n(189),s=n(33),h=n(245),f=n(133),g=n(368),O=n(3),m=n.n(O),j=n(15),p=n(8),v=n(12),k=n(57),C=n(406),M=n(14),y=s.d.bcqnTienMatModal,I=function(){var e,t,n=Object(l.b)(),a=Object(l.c)((function(e){return e.form})),c=a.modal,o=a.datas,r=Object(l.c)((function(e){return e.account})).accountData,d=null===r||void 0===r||null===(e=r.paths)||void 0===e||null===(t=e.bcqnTienMat)||void 0===t?void 0:t.edit,u=i.a.useMemo((function(){var e;return!!(null===c||void 0===c||null===(e=c[y])||void 0===e?void 0:e.open)}),[c[y]]);function s(){return(s=Object(p.a)(m.a.mark((function e(t,a){var c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return",Object(k.f)());case 2:if(c=Object(v.convertMomentToString)(f.a.getInputFields(),a),!a){e.next=7;break}return i=Object(j.a)(Object(j.a)({},c),{},{id:t.id}),e.next=7,n(Object(C.g)(i));case 7:n(b.a({modalId:y}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(M.b)(v.MyModal,{form:!0,title:Object(M.b)("div",{children:"B\xe1o C\xe1o Ti\u1ec1n M\u1eb7t Qu\u1ea7y N\u01b0\u1edbc"}),visible:u,onClose:function(){n(b.a({modalId:y}))},onOkModal:function(e,t){return s.apply(this,arguments)},formOptions:Object(v.getFormItemFields)(f.a.getInputFields()),formProps:{labelCol:{span:8},wrapperCol:{span:16}},width:700,modalId:y,datas:o})},x=n(225),N=n(244),S=n(190),T=n(369),w=n(60),H=n(69),F=n(788),q=function(e){var t,n=e.selectedTime,a=e.dateTimePicker,c=e.form,i=Object(l.b)();function o(){return(o=Object(p.a)(m.a.mark((function e(){var t,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===c||void 0===c||null===(t=c.validateFields)||void 0===t?void 0:t.call(c);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:return a=e.t0,o=a.khachHangId,e.next=9,i(Object(C.e)(n,o));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(M.b)(M.a,{children:Object(M.b)(u.a,{header:Object(M.b)("div",{className:"font-weight-bold",children:Object(M.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(M.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(M.b)("div",{children:Object(M.b)(F.a,{form:c,rules:[{required:!0,message:"Ch\u01b0a ch\u1ecdn kh\xe1ch h\xe0ng"}],onAfterSelect:function(e){localStorage.setItem("khachHangId",e)}})}),Object(M.b)("div",{children:(null===a||void 0===a||null===(t=a.getDayRender)||void 0===t?void 0:t.call(a))||null}),Object(M.b)("div",{children:Object(M.b)(w.a,{block:!0,onClick:function(){return o.apply(this,arguments)},type:"primary",children:"Hi\u1ec3n th\u1ecb d\u1eef li\u1ec7u m\u1ed9t th\xe1ng"})})]}),footer:Object(M.b)("div",{children:Object(M.b)(w.a,{icon:Object(M.b)(H.a,{}),onClick:function(){i(Object(T.b)({tagPageId:s.d.bcqnTienMatModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},D=n(383),P=n(13),V=n(29),A=n(422),B=n(73),L=s.d.bcqnTienMatModal,E=Object(c.memo)((function(e){var t=e.pageData,n=Object(l.c)((function(e){return e.bcqnTienMat})).noiPhucVuFields,a=Object(l.c)((function(e){return e.hideColumns})),c=null===a||void 0===a?void 0:a[L||""],o=i.a.useMemo((function(){var e=[f.a.ngay,B.a.tenCaLamViec],t=[f.a.ghiChu],a=e.reduce((function(e,t){var n=t.id;return e+((null===c||void 0===c?void 0:c[n])?0:1)}),0),i=t.reduce((function(e,t){var n=t.id;return e+((null===c||void 0===c?void 0:c[n])?0:1)}),0);return[{id:0,colSpan:1+a,cellClassName:"text-center font-weight-bold text-danger"}].concat(Object(V.a)(n.map((function(e,t){return{id:t+1,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.tongNgay||1,a=Math.round(e/n*1e3)/10;return Object(M.c)("div",{children:[Object(v.formatNumber)(e)," ",Object(M.c)("span",{className:"text-dark",children:[a,"%"]})]})}}}))),[{id:n.length+1,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(v.formatNumber)(e)}},{id:n.length+2,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(v.formatNumber)(Math.round(e))}},{id:n.length+3,colSpan:1,cellClassName:"text-right font-weight-bold text-small text-danger",render:function(e){return Object(v.formatNumber)(e)}},{id:n.length+4,colSpan:i}])}),[c,n]),r=i.a.useMemo((function(){return t.reduce((function(e,t){var a=e.tongCa+(t.tongCa||0),c=e.tongNgay+("caSang"===t.caLamViecId&&t.tongNgay||0),i=e.thuBoSung+(t.thuBoSung||0),o=n.reduce((function(e,n){var a=n.id,c=((null===e||void 0===e?void 0:e[a])||0)+((null===t||void 0===t?void 0:t[a])||0);return Object(j.a)(Object(j.a)({},e),{},Object(P.a)({},a,c))}),e);return Object(j.a)(Object(j.a)(Object(j.a)({},e),o),{},{tongCa:a,tongNgay:c,thuBoSung:i})}),{tong:"T\u1ed5ng ti\u1ec1n",tongCa:0,tongNgay:0,thuBoSung:0})}),[t,n]),d=i.a.useMemo((function(){return["tong"].concat(Object(V.a)(n.map((function(e){return e.id}))),["tongCa","tongNgay","thuBoSung"]).map((function(e,t){var n,a=null===r||void 0===r?void 0:r.tongNgay;return n={},Object(P.a)(n,t,r[e]),Object(P.a)(n,"tongNgay",a),n}))}),[r,n]);return Object(M.b)(A.a,{columns:o,dataSource:d})})),z=E,K=n(378),Q=s.d.bcqnTienMatModal;t.default=function(){var e,t,n=Object(l.b)(),c=Object(d.useForm)(),o=Object(a.a)(c,1)[0],s=Object(l.c)((function(e){return e.bcqnTienMat})),O=s.tabsData,m=s.loading,j=s.pageSize,p=s.bcqnTienMats,y=s.tableConstants,w=Object(l.c)((function(e){var t;return null===(t=e.tagsPage)||void 0===t?void 0:t[Q]})),H=Object(l.c)((function(e){return e.account})).accountData,F=null===H||void 0===H||null===(e=H.paths)||void 0===e||null===(t=e.bcqnTienMat)||void 0===t?void 0:t.edit,P=Object(l.c)((function(e){return e.khachHang})).khachHangId,V=Object(l.c)((function(e){return e.noiPhucVu})).noiPhucVus,A=Object(D.b)({defaultTime:r()("16-12-2021","L")}),B=Object(a.a)(A,2),L=B[0],E=B[1],J=Object(N.a)({Instance:x.a,onPending:C.f,addSelectedId:C.a});return i.a.useEffect((function(){n(Object(C.c)())}),[P,V]),i.a.useEffect((function(){var e=localStorage.getItem("khachHangId");o.setFieldsValue({khachHangId:e}),n(Object(K.a)(e)),n(Object(C.e)(L,e))}),[]),Object(M.c)("div",{className:"bcqnTienMat-page",css:h.a,children:[Object(M.b)(u.b,{className:"tabs",options:O,activeKey:w?"aside":"",onTabClick:function(e){if("add"===e&&F){if(!F)return Object(k.f)();var t=new x.a;n(b.c({modalId:Q,data:t.initData}))}else if("aside"===e)n(Object(T.b)({tagPageId:Q}));else if("taiExcel"===e)n(Object(S.b)({tableId:Q,constants:f.a,fileSheet:"bcqnTienMatSheet",fileName:"bcqnTienMatName"}));else if("capNhatDuLieu"===e){if(!F)return Object(k.f)();if(!window.confirm("X\xe1c nh\u1eadn c\u1eadp nh\u1eadt?"))return;n(Object(C.d)(L,E))}}}),Object(M.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[w&&Object(M.b)(q,{form:o,selectedTime:L,dateTimePicker:E}),Object(M.b)("div",{className:"aside-main",children:Object(M.b)(g.a,{constants:y,actions:J,datas:p,loading:m,modalId:Q,isEdit:F,isSelection:!0,pagination:!0,pageSize:j,rowClassName:function(e){return"CN"===r()(e.dayId,"YYMMDD").format("dd")?"bg-gold-less":""},onRow:function(e){return{onClick:function(){var t=Object(v.convertToMoment)([f.a.ngay],e);"caSang"===t.caLamViecId&&n(Object(b.c)({modalId:Q,data:t}))}}},onChange:function(e){n(Object(C.h)(e.pageSize))},summary:function(e){return Object(M.b)(z,{pageData:e})}})})]}),Object(M.b)(I,{})]})}}}]);