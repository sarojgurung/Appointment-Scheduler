(this["webpackJsonpapp-scheduler"]=this["webpackJsonpapp-scheduler"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(10),i=n.n(s),r=(n(16),n(17),n(9)),d=n.n(r),l=n(11),o=n(3),j=n(4),h=n(2),u=n(6),b=n(5),m=n(7),v=n.n(m),O=n(0);function x(e){return Object(O.jsx)("div",{children:e.data.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("button",{class:"btn w-100 btn-secondary m-1",children:e[0]})})}))})}var f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getBookingTimesRenderer=a.getBookingTimesRenderer.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"getBookingTimesRenderer",value:function(e){return this.props.data.map((function(t){var n=[];if(e===t.day_of_week){var a=v()(t.available_at,"hh:mmA").format("HH:mm"),c=v()(t.available_until,"hh:mmA").format("HH:mm"),s=new Date("1/1/2015 "+a),i=new Date("1/1/2015 "+c);do{s<i&&n.push(v()(s).format("HH:mm")),s=new Date(s.getTime()+18e5)}while(s<i)}return n}))}},{key:"render",value:function(){return Object(O.jsx)("div",{class:"container",children:Object(O.jsxs)("div",{class:"row seven-cols",children:[Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Monday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Monday")})]}),Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Tuesday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Tuesday")})]}),Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Wednesday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Wednesday")})]}),Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Thursday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Thursday")})]}),Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Friday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Friday")})]}),Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Saturday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Saturday")})]}),Object(O.jsxs)("div",{class:"col-sm-12 col-md-2",children:[Object(O.jsx)("div",{children:"Sunday"}),Object(O.jsx)(x,{data:this.getBookingTimesRenderer("Sunday")})]})]})})}}]),n}(c.a.Component);function g(e){return Object(O.jsx)("div",{className:"col-xm-12 col-sm-6 col-md-4 col-lg-3",children:Object(O.jsx)("button",{className:"btn w-100",onClick:function(){return e.handleClick(e.name)},children:Object(O.jsx)("div",{className:"display-7 p-3 d-flex align-items-center justify-content-center coach-container",children:e.name})})})}n(21);var p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=function(e){var t=[];a.state.coaches.map((function(n){e===n.name&&t.push(n),a.setState({individualCoachAvailability:t})}))},a.state={loading:!0,coaches:null,totalCoaches:null,individualCoachAvailability:null},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://raw.githubusercontent.com/suyogshiftcare/jsontest/main/available.json",e.next=3,fetch("https://raw.githubusercontent.com/suyogshiftcare/jsontest/main/available.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.setState({coaches:n}),this.setState({totalCoaches:Array.from(n.reduce((function(e,t){return e.set(t.name,t)}),new Map).values()),loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[this.state.loading?Object(O.jsx)("div",{class:"spinner-border text-secondary",role:"status",children:Object(O.jsx)("span",{class:"sr-only"})}):Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col",children:Object(O.jsx)("h2",{className:"text-secondary bolder display-1 mb-5",children:"Our Coaches"})})}),Object(O.jsx)("div",{className:"row g-3",children:this.state.totalCoaches.map((function(t){return Object(O.jsx)(g,{name:t.name,handleClick:e.handleClick},t.name)}))})]}),this.state.individualCoachAvailability?Object(O.jsx)(f,{data:this.state.individualCoachAvailability}):Object(O.jsx)("div",{})]})}}]),n}(a.Component),y=p;var k=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(y,{})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(22);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.992448bd.chunk.js.map