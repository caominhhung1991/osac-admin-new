(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[47],{1086:function(a,n,e){"use strict";e.r(n);var t=e(34),i=e(0),o=e.n(i),c=e(37),d=e(212),r=e(408),h=e(211),l=e(91),u=e(24),m=e(100),s=e(797),b={getTableColumns:function(){return[s.a.ma,s.a.doanhThu,s.a.tongChiPhi,s.a.doanhThuCom,s.a.doanhThuCombo,s.a.chiPhiCom,s.a.chiPhiCombo,s.a.chiPhi,s.a.thucPham,s.a.trangMieng,s.a.gao,s.a.giaVi,s.a.khac,s.a.gas,s.a.dien,s.a.nuoc,s.a.nhanSu]},getInputFields:function(){return[]},getExcelFields:function(){return[s.a.ma,s.a.doanhThu,s.a.tongChiPhi,s.a.doanhThuCom,s.a.doanhThuCombo,s.a.chiPhiCom,s.a.chiPhiCombo,s.a.chiPhi,s.a.thucPham,s.a.trangMieng,s.a.gao,s.a.giaVi,s.a.khac,s.a.gas,s.a.dien,s.a.nuoc,s.a.nhanSu]}},g=e(99),f=e(355),C=e(98),v=e(286),j=e(63),O=e(72),T=e(12),N=function(a){var n,e=a.dateTimePicker,t=Object(c.b)();return Object(T.b)(T.a,{children:Object(T.b)(l.a,{header:Object(T.b)("div",{className:"font-weight-bold",children:Object(T.b)("span",{children:"Th\xf4ng Tin Trang "})}),body:Object(T.b)("div",{className:"form-input-aside",style:{padding:"5px"},children:Object(T.b)("div",{children:(null===e||void 0===e||null===(n=e.getMonthRender)||void 0===n?void 0:n.call(e))||null})}),footer:Object(T.b)("div",{children:Object(T.b)(j.a,{icon:Object(T.b)(O.a,{}),onClick:function(){t(Object(r.b)({tagPageId:u.d.baoCaoComDauGiayModal}))},children:"\u0110\xf3ng m\u1edf r\u1ed9ng"})})})})},x=e(36),w=e(411),P=e(17),p=e(15),D=e(9),y=e(21),S=e(420),G=u.d.baoCaoComDauGiayModal,M=Object(i.memo)((function(a){var n=a.pageData,e=Object(c.c)((function(a){return a.hideColumns})),t=null===e||void 0===e?void 0:e[G||""],i=[s.a.doanhThu,s.a.tongChiPhi,s.a.doanhThuCom,s.a.doanhThuCombo,s.a.chiPhiCom,s.a.chiPhiCombo,s.a.chiPhi,s.a.thucPham,s.a.trangMieng,s.a.gao,s.a.giaVi,s.a.khac,s.a.gas,s.a.dien,s.a.nuoc,s.a.nhanSu],d=o.a.useMemo((function(){return[{id:0,colSpan:2,cellClassName:"text-small font-weight-bold text-danger"}].concat(Object(y.a)(i.map((function(a,n){return{id:n+1,colSpan:1,cellClassName:"text-small font-weight-bold text-right",render:a.render}}))))}),[t]),r=o.a.useMemo((function(){return n.reduce((function(a,n){var e=i.reduce((function(a,e){var t=((null===a||void 0===a?void 0:a[e.id])||0)+((null===n||void 0===n?void 0:n[e.id])||0);return Object(D.a)(Object(D.a)({},a),{},Object(p.a)({},e.id,t))}),a);return Object(D.a)(Object(D.a)({},a),e)}),{tong:"T\u1ed5ng ti\u1ec1n"})}),[n]),h=o.a.useMemo((function(){return["tong"].concat(Object(y.a)(i.map((function(a){return a.id})))).map((function(a,n){return Object(D.a)(Object(p.a)({},n,r[a]),r)}))}),[r]);return Object(T.b)(S.a,{columns:d,dataSource:h})})),k=u.d.baoCaoComDauGiayModal;n.default=function(){var a,n,e=Object(c.b)(),i=Object(c.c)((function(a){return a.baoCaoComDauGiay})),u=i.tabsData,s=i.loading,j=i.pageSize,O=i.baoCaoComDauGiays,p=Object(c.c)((function(a){var n;return null===(n=a.tagsPage)||void 0===n?void 0:n[k]})),D=Object(c.c)((function(a){return a.account})).accountData,y=null===D||void 0===D||null===(a=D.paths)||void 0===a||null===(n=a.baoCaoComDauGiay)||void 0===n?void 0:n.edit,S=Object(C.a)({Instance:f.a,onPending:v.e,addSelectedId:v.a}),G=Object(w.b)(),I=Object(t.a)(G,2),E=I[0],V=I[1];return o.a.useEffect((function(){return e(Object(v.c)(E)),function(){Object(P.j)("baoCaoComDauGiay")}}),[E]),Object(T.c)("div",{className:"baoCaoComDauGiay-page",css:m.a,children:[Object(T.b)(l.b,{className:"tabs",options:u,activeKey:p?"aside":"",onTabClick:function(a){if("add"===a&&y){if(!y)return Object(x.h)();var n=new f.a;e(Object(h.c)({modalId:k,data:n.initData}))}else"aside"===a?e(Object(r.b)({tagPageId:k})):"taiExcel"===a&&e(Object(d.b)({tableId:k,constants:b,fileSheet:"baoCaoComDauGiaySheet",fileName:"baoCaoComDauGiayName"}))}}),Object(T.c)("div",{className:"tabs-main",style:{marginTop:"10px"},children:[p&&Object(T.b)(N,{dateTimePicker:V}),Object(T.b)("div",{className:"aside-main",children:Object(T.b)(g.a,{isEdit:y,constants:b,actions:S,datas:O,loading:s,modalId:k,isSelection:!0,pagination:!0,pageSize:j,onChange:function(a){e(Object(v.f)(a.pageSize))},summary:function(a){return Object(T.b)(M,{pageData:a})}})})]})]})}},797:function(a,n,e){"use strict";e.d(n,"a",(function(){return u}));var t=e(24),i=e(6),o=(e(0),e(73)),c=e(12),d=function(a,n,e){var t=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Math.round(100*a)/100}(a/n*100),i=t>e,d=t===Math.round(t)?".0":"";return i?Object(c.b)(o.a,{title:"Qu\xe1 cao",children:Object(c.c)("span",{className:"text-10 text-danger",children:["(",t,d,")"]})}):Object(c.c)("span",{className:"text-10 text-danger",children:["(",t,d,")"]})},r=function(a,n){var e=(null===n||void 0===n?void 0:n.doanhThu)||1;return d(a||0,e,87)};function h(a,n){return Object(c.c)("div",{children:[Object(c.b)("div",{children:a?Object(i.formatNumber)(a):""}),Object(c.b)("div",{children:r(a,n)})]})}function l(a,n){return Object(c.c)("div",{children:[Object(c.b)("div",{children:a?Object(i.formatNumber)(a):""}),Object(c.b)("div",{className:"font-weight-bold",children:n?d(a,n,87):""})]})}var u={ma:{id:"key",name:"Ng\xe0y",className:"text-small text-info hoverClassBG font-weight-bold",width:85,fixed:!0,render:function(a,n,e,t){return a}},doanhThu:{id:"doanhThu",name:"Doanh thu",className:"text-small font-weight-bold",width:110,align:"right",fixed:!0,render:function(a){return a?Object(i.formatNumber)(a):0}},doanhThuCom:{id:"doanhThuCom",name:"DT C\u01a1m",className:"text-small font-weight-bold",align:"right",width:110,render:h},doanhThuCombo:{id:"doanhThuCombo",name:"DT Combo",className:"text-small font-weight-bold",align:"right",width:110,render:h},tongChiPhi:{id:"tongChiPhi",name:"T\u1ed5ng chi ph\xed",className:"text-small font-weight-bold",width:110,fixed:!0,align:"right",render:h},chiPhiCom:{id:"chiPhiCom",name:"CP C\u01a1m",width:110,className:"text-small font-weight-bold",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},chiPhiCombo:{id:"chiPhiCombo",name:"CP Combo",width:110,className:"text-small font-weight-bold",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCombo)}},chiPhi:{id:"chiPhi",name:"Chi ph\xed (ch\u01b0a NS)",width:120,className:"text-small font-weight-bold",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},thucPham:{id:"thucPham",name:"Th\u1ef1c ph\u1ea9m",width:110,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},trangMieng:{id:"trangMieng",name:"Tr\xe1ng mi\u1ec7ng",width:90,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},gao:{id:"gao",name:"G\u1ea1o",width:90,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},giaVi:{id:"giaVi",name:"Gia v\u1ecb",width:90,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},khac:{id:"khac",name:"Kh\xe1c",width:90,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},gas:{id:"gas",name:"Gas",width:90,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},dien:{id:"dien",name:"\u0110i\u1ec7n",width:90,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},nuoc:{id:"nuoc",name:"N\u01b0\u1edbc",width:70,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},nhanSu:{id:"nhanSu",name:"Nh\xe2n s\u1ef1",width:100,className:"text-small",align:"right",render:function(a,n){return l(a,null===n||void 0===n?void 0:n.doanhThuCom)}},getTableColumns:function(){return[t.a.stt,t.a.editRow]},getInputFields:function(){return[]},getExcelFields:function(){return[t.a.active]}}}}]);