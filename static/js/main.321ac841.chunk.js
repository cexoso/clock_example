(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(9),c=n.n(o),s=n(1),r=n(2),l=n(4),u=n(3),h=n(5),m=n(6),p=n.n(m),v=function(t){function e(){var t,n;Object(s.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).onClick=function(t){return function(){n.props.onClickBigger(t)}},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.wiseDelta=t.wisePosition-this.props.wisePosition,this.min=this.wiseDelta>0?this.props.wisePosition:t.wisePosition,this.max=this.wiseDelta<=0?this.props.wisePosition:t.wisePosition}},{key:"transitionDelay",value:function(t){if(this.wiseDelta&&t>=this.min&&t<=this.max){var e=this.wiseDelta>0?t-this.min:t-this.max;return"".concat(.7/this.wiseDelta*e,"s")}}},{key:"render",value:function(){var t=this,e=Array.from({length:72}),n=this.props.wisePosition;return a.a.createElement(a.a.Fragment,null,e.map(function(e,i){var o=i/36*Math.PI+Math.PI,c=i%9===0;return a.a.createElement("div",{onClick:c?t.onClick(i):void 0,className:"".concat(p.a.pointer," ").concat(c?p.a.big:p.a.small),key:i,style:{left:"".concat(50-45*Math.sin(o),"%"),top:"".concat(50+45*Math.cos(o),"%"),opacity:n>=i?1:.3,transitionDelay:t.transitionDelay(i)}},c&&a.a.createElement("div",{className:"".concat(p.a.small)}))}))}}]),e}(a.a.PureComponent),w=n(7),f=n.n(w),d=function(t){function e(){var t,n;Object(s.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={wisePosition:0},n.onClickBigger=function(t){n.setState({wisePosition:t})},n}return Object(h.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=function(e){var n=window.event||e,i=n.detail?-120*n.detail:n.wheelDelta,a=t.state.wisePosition;t.setState({wisePosition:Math.floor(Math.min(Math.abs(a-i/100),72))})},n=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";document.attachEvent?document.attachEvent("on"+n,e):document.addEventListener&&document.addEventListener(n,e,!1)}},{key:"render",value:function(){var t=this.state.wisePosition;return console.log(t),a.a.createElement("div",{className:f.a.container},a.a.createElement(v,{onClickBigger:this.onClickBigger,wisePosition:t}),a.a.createElement("div",{className:f.a.clockWise,style:{transform:"rotate(".concat(5*t-90,"deg)")}}),a.a.createElement("div",{className:f.a.center}))}}]),e}(a.a.PureComponent),k=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(d,null))}}]),e}(a.a.PureComponent);n(16);c.a.render(a.a.createElement(k,null),document.getElementById("root"))},6:function(t,e,n){t.exports={pointer:"tick_pointer__1_FaU",small:"tick_small__3AH9-",big:"tick_big__1PljO"}},7:function(t,e,n){t.exports={container:"clock_container__1tNRt",clockWise:"clock_clockWise__2Py7y",center:"clock_center__3XHE-"}}},[[10,1,2]]]);
//# sourceMappingURL=main.321ac841.chunk.js.map