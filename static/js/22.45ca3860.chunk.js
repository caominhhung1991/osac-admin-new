(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[22],{428:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.default=t.exports,t.exports.__esModule=!0},433:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var n=a(18),i=a(35),c=a(12),s=a.n(c),r=a(24),h=a(16);function u(t){var e=t.Instance,a=t.onPending,c=t.addSelectedId;return{onAddAsync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(s.a.mark((function n(i){var r,u,o,m;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.validatedValues,i(a(!0)),u=new e,o=u.pathDatas,n.next=6,Object(h.a)(o,r);case 6:return m=n.sent,c&&i(null===c||void 0===c?void 0:c(null===m||void 0===m?void 0:m.id)),i(a(!1)),n.abrupt("return",m);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},onUpdateAsync:function(t){return function(){var n=Object(r.a)(s.a.mark((function n(c){var r,u,o,m,l;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.currentData,u=t.validatedValues,o=r.id,c(a(!0)),m=new e,l=[].concat(Object(i.a)(m.pathDatas),[o]),n.next=7,Object(h.h)(l,u);case 7:return c(a(!1)),n.abrupt("return",!0);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},onActiveAsync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var n=Object(r.a)(s.a.mark((function n(c){var r,u,o,m;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,u=t.active,c(a(!0)),o=new e,m=[].concat(Object(i.a)(o.pathDatas),[r]),n.next=6,Object(h.h)(m,{active:u});case 6:c(a(!1));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},onDeleteAsync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var i=Object(r.a)(s.a.mark((function i(c){var r,u,o,m,l,d;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return u=t.id,c(a(!0)),o=new e,m=o.getPathDatas(u),l=o.getPathDeleted(u),r={},Object(n.a)(r,m,null),Object(n.a)(r,l,t),d=r,i.next=8,Object(h.h)(null,d);case 8:return c(a(!1)),i.abrupt("return",!0);case 10:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()}}}},435:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(11),i=a(38),c=a(104),s={className:"text-small",isSearch:!0,form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},r={hoTen:{id:"hoTen",name:"H\u1ecd t\xean",width:120,className:"text-small font-weight-bold",isSearch:!0,fixed:!0,form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},gioiTinh:{id:"gioiTinh",name:"Gi\u1edbi t\xednh",width:80,className:"text-small",isSearch:!0,align:"center",form:{type:"select",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}],options:i.d}},ngaySinh:{id:"ngaySinh",name:"Ng\xe0y sinh",width:80,className:"text-small",isSearch:!0,align:"center",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},danToc:{id:"danToc",name:"D\xe2n t\u1ed9c",width:80,className:"text-small",isSearch:!0,form:{type:"input"}},soCMND:Object(n.a)({id:"soCMND",name:"CMND",width:100},s),ngayCap:{id:"ngayCap",name:"Ng\xe0y c\u1ea5p",width:80,align:"center",className:"text-small",form:{type:"date-picker",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},noiCap:Object(n.a)({id:"noiCap",name:"N\u01a1i c\u1ea5p",width:100},s),hoKhauThuongTru:{id:"hoKhauThuongTru",name:"HK th\u01b0\u1eddng tr\xfa",width:140,className:"text-small",form:{type:"text-area",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp"}]}},anhChanDung:{id:"anhChanDung",name:"\u1ea2nh ch\xe2n dung",width:100,className:"text-small",align:"center"},anhMatTruoc:{id:"anhMatTruoc",name:"CMND m\u1eb7t tr\u01b0\u1edbc",width:100,className:"text-small"},anhMatSau:{id:"anhMatSau",name:"CMND m\u1eb7t sau",width:100,className:"text-small"},getTableColumns:function(){return[i.c.stt,this.hoTen,this.gioiTinh,this.ngaySinh,this.danToc,this.soCMND,this.ngayCap,this.noiCap,this.hoKhauThuongTru,i.c.editRow,i.c.active]},getInputFields:function(t){return[this.hoTen,this.gioiTinh,this.ngaySinh,this.danToc,this.soCMND,this.ngayCap,this.noiCap,this.hoKhauThuongTru]},getExcelFields:function(){return[this.hoTen,this.gioiTinh,this.ngaySinh,this.danToc,this.soCMND,this.ngayCap,this.noiCap,this.hoKhauThuongTru,this.anhChanDung,this.anhMatTruoc,this.anhMatSau,i.c.active]},getFormViewFields:function(){var t=[this.hoTen,this.gioiTinh,this.ngaySinh,this.danToc,this.soCMND,this.ngayCap,this.noiCap,this.hoKhauThuongTru];return Object(c.g)(t)}}},446:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(38),i={chucVuName:{id:"chucVuName",name:"Ch\u1ee9c v\u1ee5",className:"text-small font-weight-bold",width:120,align:"",isSearch:!0,form:{required:!0,type:"input"}},ghiChuChucVu:{id:"ghiChuChucVu",name:"Ghi ch\xfa",className:"text-small",width:100,align:"",form:{type:"text-area"}},getTableColumns:function(){return[n.c.stt,this.chucVuName,this.ghiChuChucVu,n.c.active,n.c.editRow]},getInputFields:function(t){return[this.chucVuName,this.ghiChuChucVu]}}},447:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(38),i={boPhanName:{id:"boPhanName",name:"T\xean b\u1ed9 ph\u1eadn",className:"text-small font-weight-bold",width:100,align:"",isSearch:!0,form:{required:!0,type:"input",innerProps:{autoFocus:!0}}},truongBoPhan:{id:"truongBoPhan",name:"Tr\u01b0\u1edfng b\u1ed9 ph\u1eadn",className:"text-small",width:100,align:"",form:{type:"input"}},phoBoPhan:{id:"phoBoPhan",name:"Ph\xf3 b\u1ed9 ph\u1eadn",className:"text-small",width:100,align:"",form:{type:"input"}},getTableColumns:function(){return[n.c.stt,this.boPhanName,this.truongBoPhan,this.phoBoPhan,n.c.active,n.c.editRow]},getInputFields:function(t){return[this.boPhanName,this.truongBoPhan,this.phoBoPhan]}}},448:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(11),i=a(38),c=a(435),s=a(104),r=a(446),h=a(447),u=a(452),o={maNV:{id:"maNV",name:"M\xe3 NV",className:"text-small font-weight-bold",width:65,align:"center",isSearch:!0,fixed:!0,form:{type:"input",rules:[{required:!0,message:"Ch\u01b0a nh\u1eadp m\xe3 nh\xe2n vi\xean"}]}},soDienThoai:{id:"soDienThoai",name:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",className:"text-small",width:100,align:"center",isSearch:!0,form:{type:"input",rules:[{len:10,message:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ea7n 10 s\u1ed1"}]}},email:{id:"email",name:"Email",className:"text-small",width:100,align:"",form:{type:"input",rules:[{type:"email",message:"\u0110\u1ecbnh d\u1ea1ng email ch\u01b0a \u0111\xfang"}]}},ngayVaoLam:{id:"ngayVaoLam",name:"Ng\xe0y v\xe0o l\xe0m",className:"text-small",width:100,align:"center",isSearch:!0,form:{type:"date-picker"},render:s.d},getTableColumns:function(){return[i.c.stt,c.a.hoTen,Object(n.a)(Object(n.a)({},this.maNV),{},{fixed:!1}),c.a.ngaySinh,c.a.gioiTinh,h.a.boPhanName,r.a.chucVuName,u.a.caLamViecName,this.soDienThoai,this.ngayVaoLam,i.c.editRow,i.c.active]},getInputFields:function(){return[i.c.id,this.maNV,this.soDienThoai,this.email,this.ngayVaoLam]},getExcelFields:function(){return[this.maNV,c.a.hoTen,c.a.ngaySinh,c.a.gioiTinh,h.a.boPhanName,r.a.chucVuName,u.a.caLamViecName,this.soDienThoai,this.ngayVaoLam,i.c.active]}}},452:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(38),i={caLamViecName:{id:"caLamViecName",name:"Ca l\xe0m vi\u1ec7c",className:"text-small font-weight-bold",width:100,align:"center",isSearch:!0,form:{required:!0,type:"input"}},gioBatDau:{id:"gioBatDau",name:"Gi\u1edd b\u1eaft \u0111\u1ea7u",className:"text-small",width:100,align:"",form:{type:"input",style:{width:"100%"}}},gioKetThuc:{id:"gioKetThuc",name:"Gi\u1edd k\u1ebft th\xfac",className:"text-small",width:100,align:"",form:{type:"input"}},soGioLamViec:{id:"soGioLamViec",name:"S\u1ed1 gi\u1edd l\xe0m vi\u1ec7c",className:"text-small",width:100,align:"",form:{type:"input-number"}},getTableColumns:function(){return[n.c.stt,this.caLamViecName,this.gioBatDau,this.gioKetThuc,this.soGioLamViec,n.c.active,n.c.editRow]},getInputFields:function(t){return[this.caLamViecName,this.gioBatDau,this.gioKetThuc,this.soGioLamViec]}}},752:function(t,e,a){"use strict";a.r(e);var n=a(18),i=a(11),c=a(42),s=a(0),r=a.n(s),h=a(193),u=a(436),o=a(39),m=(a(147),a(200)),l=(a(204),a(38)),d=a(135),g=a(433),p=(a(448),a(7));l.e.nhanSuModal;e.default=function(){Object(o.b)(),Object(g.a)({Instance:d.a,onPending:m.e,addSelectedId:m.a}),Object(o.c)((function(t){return t.table})).selectedRows;var t=Object(o.c)((function(t){return t.nhanSu})),e=(t.tabsData,t.loading,t.nhanSus),a=Object(o.c)((function(t){return t.boPhan})).boPhans,s=Object(o.c)((function(t){return t.chucVu})).chucVus,l=Object(o.c)((function(t){return t.cMND})).cMNDs,f=Object(o.c)((function(t){return t.caLamViec})).caLamViecs,b=Object(u.useForm)();Object(c.a)(b,1)[0];r.a.useMemo((function(){return e?Object.entries(e).reduce((function(t,e){var r,h,u=Object(c.a)(e,2),o=u[0],m=u[1],d=m.boPhanId,g=m.chucVuId,p=m.cMNDId,b=m.caLamViecId,N=(null===(r=a[d])||void 0===r?void 0:r.boPhanName)||d,v=(null===(h=s[g])||void 0===h?void 0:h.chucVuName)||g,T=l[p]||{},y=f[b]||{};return Object(i.a)(Object(i.a)({},t),{},Object(n.a)({},o,Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({},m),{},{boPhanName:N,chucVuName:v},y),T),{},{id:o})))}),{}):{}}),[e,a,s,l,f]);return Object(p.b)(p.a,{children:Object(p.b)(h.a,{})})}}}]);