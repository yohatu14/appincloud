(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{54:function(e,t,a){e.exports=a(67)},59:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},61:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(7),r=a.n(l),o=(a(59),a(13)),i=a(26),c=a(16),m=a(38),h=a(39),u=a(45),d=(a(60),a(61),a(106)),g=a(109),p=a(100),E=a(104),f=a(108),w=a(107),v=a(112),y=a(110),b=a(44),x=a.n(b),C=a(111),k=a(105),j=a(113),M=a(24),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleClickShowMessage=function(e){var t=a.state.list;t.push({message:a.state.message,from:!1}),a.setState({list:t,message:"",showMessage:!1},(function(){return a.messageEnd.scrollIntoView({behavior:"smooth"})})),console.log("handleClickShowMessage",a.state.message),fetch("https://myappenlanube.mybluemix.net/listen",{method:"post",body:JSON.stringify({message:a.state.message}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.success&&(t.push({message:e.text.text,from:!0}),a.setState({list:t,showMessage:!0},(function(){return a.messageEnd.scrollIntoView({behavior:"smooth"})})))})),a.messageEnd.scrollIntoView({behavior:"smooth"})},a.handleChange=function(e){return function(t){a.setState(Object(o.a)({},e,t.target.value))}},a.state={showMessage:!0,message:"",user:"",list:[],humanlist:[],messa:0},a.messageEnd="",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.messa;t.attach;return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("div",{style:{height:475,overflow:"auto"}},s.a.createElement(p.a,null,a.slice(n).map((function(e){return s.a.createElement("div",null,e.from&&s.a.createElement(E.a,null,s.a.createElement(k.a,{container:!0,direction:"row ",justify:"flex-start"},s.a.createElement("div",null,s.a.createElement(d.a,{style:{backgroundColor:"#76c1c7",maxWidth:400,borderRadius:15,padding:10,color:"white"}},s.a.createElement(E.a,{alignItems:"flex-start"},s.a.createElement(w.a,null,s.a.createElement(j.a,{alt:"Remy Sharp",src:"https://www.pratechgroup.com/wp-content/themes/pratech/img/products/parly/icono.png"})),s.a.createElement(f.a,{primary:s.a.createElement(M.a,{style:{color:"white"}},e.message)})))))),!e.from&&s.a.createElement(E.a,{alignItems:"flex-start"},s.a.createElement(k.a,{container:!0,direction:"row",justify:"flex-end"},s.a.createElement("div",null,s.a.createElement(d.a,{style:{backgroundColor:"#bac0bc",maxWidth:400,borderRadius:15,padding:10,color:"white"}},s.a.createElement(E.a,{alignItems:"flex-start"},s.a.createElement(w.a,null,s.a.createElement(j.a,{alt:"Remy Sharp",src:"https://png.pngtree.com/svg/20160421/personal_68980.png"})),s.a.createElement(f.a,{primary:s.a.createElement(M.a,{style:{color:"white"}},e.message)})))))))})),s.a.createElement("div",null,s.a.createElement("div",{className:"MessageContainer"},s.a.createElement("div",{className:"MessagesList"}),s.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messageEnd=t}}))))),s.a.createElement("div",{style:{width:"100%"}},s.a.createElement(d.a,{position:"end"},s.a.createElement(g.a,null,s.a.createElement(v.a,{type:"text",id:"standard-full-width",variant:"filled",fullWidth:!0,label:"Message",value:this.state.message,onChange:this.handleChange("message"),InputProps:{endAdornment:s.a.createElement(y.a,{onKeyDown:this.handleKey,variant:"filled",position:"end"},s.a.createElement(C.a,{onClick:this.handleClickShowMessage},this.state.showMessage?s.a.createElement(x.a,null):null))}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.590f7c4b.chunk.js.map