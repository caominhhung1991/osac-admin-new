(this["webpackJsonpreact-antd-admin"]=this["webpackJsonpreact-antd-admin"]||[]).push([[22],{696:function(a,t,e){"use strict";var n=e(5),i=e.n(n),c=e(15),s=e(9),o=e(115),d=e(0),r=e.n(d),l=e(10),u=e(45),b=e(184),m=e(86),p=e(11),f=["modalId","constants","actions","modalTitle","onAfterAddFinish","isEdit"];t.a=function(a){var t=a.modalId,e=a.constants,n=a.actions,d=a.modalTitle,v=a.onAfterAddFinish,O=a.isEdit,j=Object(o.a)(a,f),h=Object(u.b)(),k=Object(u.c)((function(a){return a.form})),I=k.modal,g=k.edit,x=k.datas,y=r.a.useMemo((function(){var a;return!!(null===(a=I[t])||void 0===a?void 0:a.open)}),[I[t]]),A=r.a.useMemo((function(){return Object(l.getFormItemFields)(e.getInputFields(),g)}),[g]);function w(){return(w=Object(s.a)(i.a.mark((function a(e,c){var s,o;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s=!0,!c){a.next=17;break}if(O){a.next=4;break}return a.abrupt("return",Object(m.d)());case 4:if(e.id){a.next=12;break}return a.next=7,h(n.onAddAsync({validatedValues:c}));case 7:s=a.sent,null===v||void 0===v||v(null===(o=s)||void 0===o?void 0:o.id),s=Boolean(s),a.next=17;break;case 12:return a.t0=Boolean,a.next=15,h(n.onUpdateAsync({currentData:e,validatedValues:c}));case 15:a.t1=a.sent,s=(0,a.t0)(a.t1);case 17:s&&h(b.a({modalId:t}));case 18:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(p.b)(l.MyModal,Object(c.a)(Object(c.a)({},j),{},{form:!0,title:d,modalId:t,visible:y,onClose:function(a,t){return w.apply(this,arguments)},formOptions:A,formProps:{labelCol:{span:8},wrapperCol:{span:16}},datas:x}))}},933:function(a,t,e){"use strict";e.r(t);e(0);var n=e(45),i=e(356),c=e(184),s=e(370),o=e(35),d=e(237),r=e(79),l=e(357),u=e(696),b=e(218),m=e(11),p=o.d.khachHangModal;t.default=function(){var a=Object(n.b)(),t=Object(n.c)((function(a){return a.caLamViec})),e=t.tabsData,o=t.loading,f=t.caLamViecs;return Object(m.c)("div",{className:"ca-lam-viec-page",css:d.a,children:[Object(m.b)(i.b,{className:"tabs",options:e,activeKey:"all",onTabClick:function(t){if("add"===t){var e=new b.a;a(c.c({modalId:p,data:e.initData}))}}}),Object(m.b)("div",{className:"tabs-main",style:{marginTop:"10px"},children:Object(m.b)("div",{className:"aside-main",children:Object(m.b)(l.a,{constants:r.a,actions:s,datas:f,loading:o,modalId:p,pagination:!0})})}),Object(m.b)(u.a,{modalTitle:"Ca l\xe0m vi\u1ec7c",constants:r.a,actions:s,modalId:p})]})}}}]);