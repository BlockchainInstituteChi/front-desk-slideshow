(this["webpackJsonpfront-desk"]=this["webpackJsonpfront-desk"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e){e.exports=JSON.parse("{}")},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),r=n.n(s),l=(n(13),n(1)),o=n(2),c=n(4),u=n(3),d=n(5),m=(n(14),n(15),{}.hasOwnProperty);function p(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e+=" "+n;else if(Array.isArray(n))e+=" "+p.apply(null,n);else if("object"===a)for(var i in n)m.call(n,i)&&n[i]&&(e+=" "+i)}}return e.substr(1)}var f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0,maxIndex:n.props.slides.length,slides:n.props.slides},n.jumpToSlide=n.jumpToSlide,n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"slideTimer",value:function(e){var t=this;console.log("sliderTimer started "+e+" "+new Date),setTimeout((function(){console.log("sliderTimer Expired "+new Date),t.nextSlide()}),1e3*e)}},{key:"nextSlide",value:function(){console.log("next slide triggered "+new Date);var e=this.state.activeIndex,t=this.state.activeIndex+1;e==this.state.maxIndex-1&&(t=0),this.jumpToSlide(t)}},{key:"jumpToSlide",value:function(e){this.slideTimer(this.state.slides[e].delay),this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"slideshow"},i.a.createElement("ul",{className:"slideshow-slides"},this.props.slides.map((function(t,n){return i.a.createElement("li",{className:p({active:n==e.state.activeIndex})},i.a.createElement("figure",null,i.a.createElement("img",{src:t.imageUrl}),t.caption?i.a.createElement("figcaption",null,t.caption):null))}))),i.a.createElement("ul",{className:"slideshow-dots"},this.props.slides.map((function(t,n){return i.a.createElement("li",{className:n==e.state.activeIndex?"active":""},i.a.createElement("a",{onClick:function(t){return e.jumpToSlide(n)}},n+1))}))))}}]),t}(i.a.Component),h=[{imageUrl:"https://i.ytimg.com/vi/MxwjEacvrtY/hqdefault.jpg",caption:"Allan Allan Al Al Allan",delay:4},{imageUrl:"https://pbs.twimg.com/profile_images/2576554888/s8vftzr3j0a9r703xdfn.jpeg",caption:"Steve Steve Steve",delay:3}],v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(f,{slides:h})}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.778c10db.chunk.js.map