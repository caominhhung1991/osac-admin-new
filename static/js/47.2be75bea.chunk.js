(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[47],{1071:function(n,a,e){"use strict";e.r(a);var t=e(34),i=e(0),o=e.n(i),c=e(48),d=e(196),h=e(396),r=e(195),u=e(394),l=e(30),m=e(254),b=e(818),s={getTableColumns:function(){return[b.a.ma,b.a.doanhThu,b.a.tongChiPhi,b.a.doanhThuCom,b.a.doanhThuCombo,b.a.chiPhiCom,b.a.chiPhiCombo,b.a.chiPhi,b.a.thucPham,b.a.trangMieng,b.a.gao,b.a.giaVi,b.a.khac,b.a.gas,b.a.dien,b.a.nuoc,b.a.nhanSu]},getInputFields:function(){return[]},getExcelFields:function(){return[b.a.ma,b.a.doanhThu,b.a.tongChiPhi,b.a.doanhThuCom,b.a.doanhThuCombo,b.a.chiPhiCom,b.a.chiPhiCombo,b.a.chiPhi,b.a.thucPham,b.a.trangMieng,b.a.gao,b.a.giaVi,b.a.khac,b.a.gas,b.a.dien,b.a.nuoc,b.a.nhanSu]}},g=e(395),f=e(342),C=e(253),v=e(271),j=e(61),O=e(70),T=e(15),N=function(n){var a,e=n.selectedTime,t=n.dateTimePicker,i=Object(c.b)(),o=Object(c.c)((function(n){return n.account})).isDev;return Object(T.b)(T.a,{children:Object(T.b)(u.a,{header:Object(T.b)("div",{className:"font-weight-bold",children:Object(T.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(T.c)("div",{className:"form-input-aside",style:{padding:"5px"},children:[Object(T.b)("div",{children:(null===t||void 0===t||null===(a=t.getMonthRender)||void 0===a?void 0:a.call(t))||null}),o?Object(T.b)("div",{children:Object(T.b)("button",{onClick:function(){return i(Object(v.h)(e))},children:"C\u1eadp nh\u1eadt b\xe1o c\xe1o c\u01a1m BD"})}):null,o?Object(T.c)("div",{className:"mt-1",children:[Object(T.b)("button",{onClick:function(){return i(Object(v.c)(e))},children:"L\u1ea5y b\xe1o c\xe1o c\u01a1m theo th\xe1ng BD"}),Object(T.b)("button",{onClick:function(){return i(Object(v.d)(e))},children:"L\u1ea5y b\xe1o c\xe1o c\u01a1m theo th\xe1ng DG"})]}):null]}),footer:Object(T.b)("div",{children:Object(T.b)(j.a,{icon:Object(T.b)(O.a,{}),onClick:function(){i(Object(h.b)({tagPageId:l.d.baoCaoComXuongBinhDuongModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},x=e(39),p=e(399),w=e(17),P=e(14),D=e(10),M=e(21),S=e(410),k=l.d.baoCaoComXuongBinhDuongModal,B=Object(i.memo)((function(n){var a=n.pageData,e=Object(c.c)((function(n){return n.hideColumns})),t=null===e||void 0===e?void 0:e[k||""],i=[b.a.doanhThu,b.a.tongChiPhi,b.a.doanhThuCom,b.a.doanhThuCombo,b.a.chiPhiCom,b.a.chiPhiCombo,b.a.chiPhi,b.a.thucPham,b.a.trangMieng,b.a.gao,b.a.giaVi,b.a.khac,b.a.gas,b.a.dien,b.a.nuoc,b.a.nhanSu],d=o.a.useMemo((function(){return[{id:0,colSpan:2,cellClassName:"text-small font-weight-bold text-danger"}].concat(Object(M.a)(i.map((function(n,a){return{id:a+1,colSpan:1,cellClassName:"text-small font-weight-bold text-right",render:n.render}}))))}),[t]),h=o.a.useMemo((function(){return a.reduce((function(n,a){var e=i.reduce((function(n,e){var t=((null===n||void 0===n?void 0:n[e.id])||0)+((null===a||void 0===a?void 0:a[e.id])||0);return Object(D.a)(Object(D.a)({},n),{},Object(P.a)({},e.id,t))}),n);return Object(D.a)(Object(D.a)({},n),e)}),{tong:"T\u1ed5ng ti\u1ec1n"})}),[a]),r=o.a.useMemo((function(){return["tong"].concat(Object(M.a)(i.map((function(n){return n.id})))).map((function(n,a){return Object(D.a)(Object(P.a)({},a,h[n]),h)}))}),[h]);return Object(T.b)(S.a,{columns:d,dataSource:r})})),X=e(35),y=e.n(X),I=l.d.baoCaoComXuongBinhDuongModal;a.default=function(){var n,a,e=Object(c.b)(),i=Object(c.c)((function(n){return n.baoCaoComXuongBinhDuong})),l=i.tabsData,b=i.loading,j=i.pageSize,O=i.baoCaoComXuongBinhDuongs,P=Object(c.c)((function(n){var a;return null===(a=n.tagsPage)||void 0===a?void 0:a[I]})),D=Object(c.c)((function(n){return n.account})),M=D.accountData,S=D.isDev,k=null===M||void 0===M||null===(n=M.paths)||void 0===n||null===(a=n.baoCaoComXuongBinhDuong)||void 0===a?void 0:a.edit,X=Object(C.a)({Instance:f.a,onPending:v.g,addSelectedId:v.a}),E=Object(p.b)({defaultTime:S?y()("01/03/2022","DD/MM/YYYY"):y()()}),G=Object(t.a)(E,2),V=G[0],F=G[1];return o.a.useEffect((function(){return e(Object(v.e)(V)),function(){Object(w.i)("baoCaoComXuongBinhDuong")}}),[V]),Object(T.c)("div",{className:"baoCaoComXuongBinhDuong-page",css:m.a,children:[Object(T.b)(u.b,{className:"tabs",options:l,activeKey:P?"aside":"",onTabClick:function(n){if("add"===n&&k){if(!k)return Object(x.h)();var a=new f.a;e(Object(r.c)({modalId:I,data:a.initData}))}else"aside"===n?e(Object(h.b)({tagPageId:I})):"taiExcel"===n&&e(Object(d.b)({tableId:I,constants:s,fileSheet:"baoCaoComXuongBinhDuongSheet",fileName:"baoCaoComXuongBinhDuongName"}))}}),Object(T.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[P&&Object(T.b)(N,{selectedTime:V,dateTimePicker:F}),Object(T.b)("div",{className:"aside-main",children:Object(T.b)(g.a,{isEdit:k,constants:s,actions:X,datas:O,loading:b,modalId:I,isSelection:!0,pagination:!0,pageSize:j,onChange:function(n){e(Object(v.i)(n.pageSize))},summary:function(n){return Object(T.b)(B,{pageData:n})}})})]})]})}},818:function(n,a,e){"use strict";e.d(a,"a",(function(){return l}));var t=e(30),i=e(9),o=(e(0),e(71)),c=e(15),d=function(n,a,e){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(100*n)/100}(n/a*100),i=t>e,d=t===Math.round(t)?".0":"";return i?Object(c.b)(o.a,{title:"Qu\xe1 cao",children:Object(c.c)("span",{className:"text-10 text-danger",children:["(",t,d,")"]})}):Object(c.c)("span",{className:"text-10 text-danger",children:["(",t,d,")"]})},h=function(n,a){var e=(null===a||void 0===a?void 0:a.doanhThu)||1;return d(n||0,e,87)};function r(n,a){return Object(c.c)("div",{children:[Object(c.b)("div",{children:n?Object(i.formatNumber)(n):""}),Object(c.b)("div",{children:h(n,a)})]})}function u(n,a){return Object(c.c)("div",{children:[Object(c.b)("div",{children:n?Object(i.formatNumber)(n):""}),Object(c.b)("div",{className:"font-weight-bold",children:a?d(n,a,87):""})]})}var l={ma:{id:"key",name:"Ng\xe0y",className:"text-small text-info hoverClassBG font-weight-bold",width:85,fixed:!0,render:function(n,a,e,t){return n}},doanhThu:{id:"doanhThu",name:"Doanh thu",className:"text-small font-weight-bold",width:110,align:"right",fixed:!0,render:function(n){return n?Object(i.formatNumber)(n):0}},doanhThuCom:{id:"doanhThuCom",name:"DT C\u01a1m",className:"text-small font-weight-bold",align:"right",width:110,render:r},doanhThuCombo:{id:"doanhThuCombo",name:"DT Combo",className:"text-small font-weight-bold",align:"right",width:110,render:r},tongChiPhi:{id:"tongChiPhi",name:"T\u1ed5ng chi ph\xed",className:"text-small font-weight-bold",width:110,fixed:!0,align:"right",render:r},chiPhiCom:{id:"chiPhiCom",name:"CP C\u01a1m",width:110,className:"text-small font-weight-bold",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},chiPhiCombo:{id:"chiPhiCombo",name:"CP Combo",width:110,className:"text-small font-weight-bold",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCombo)}},chiPhi:{id:"chiPhi",name:"Chi ph\xed (ch\u01b0a NS)",width:120,className:"text-small font-weight-bold",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},thucPham:{id:"thucPham",name:"Th\u1ef1c ph\u1ea9m",width:110,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},trangMieng:{id:"trangMieng",name:"Tr\xe1ng mi\u1ec7ng",width:90,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},gao:{id:"gao",name:"G\u1ea1o",width:90,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},giaVi:{id:"giaVi",name:"Gia v\u1ecb",width:90,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},khac:{id:"khac",name:"Kh\xe1c",width:90,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},gas:{id:"gas",name:"Gas",width:90,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},dien:{id:"dien",name:"\u0110i\u1ec7n",width:90,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},nuoc:{id:"nuoc",name:"N\u01b0\u1edbc",width:70,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},nhanSu:{id:"nhanSu",name:"Nh\xe2n s\u1ef1",width:100,className:"text-small",align:"right",render:function(n,a){return u(n,null===a||void 0===a?void 0:a.doanhThuCom)}},getTableColumns:function(){return[t.a.stt,t.a.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[t.a.active]}}}}]);