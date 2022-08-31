(function(){"use strict";var t={4055:function(t,o,e){var n=e(9242),d=e(3396),i=e.p+"img/logo.a9699769.svg",a=e.p+"img/menu.97f744b2.svg";const c=t=>((0,d.dD)("data-v-0f5eba43"),t=t(),(0,d.Cn)(),t),s={class:"container"},r=(0,d.uE)('<div class="logo" data-v-0f5eba43><img src="'+i+'" alt="logo" srcset="" class="logo-img" data-v-0f5eba43><div class="logo-text" data-v-0f5eba43>TODO Application</div></div><div class="btns" data-v-0f5eba43><a href="https://github.com/yegych9923" class="btns__item" data-v-0f5eba43>Author</a><a href="https://github.com/yegych9923/todo" class="btns__item" data-v-0f5eba43>GitHub</a></div>',2),l=c((()=>(0,d._)("img",{src:a,alt:"menu"},null,-1)));function u(t,o,e,n,i,a){const c=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",s,[r,(0,d.Wm)(c,{class:"menu",to:"/menu"},{default:(0,d.w5)((()=>[l])),_:1})])}var m={name:"Header"},p=e(89);const v=(0,p.Z)(m,[["render",u],["__scopeId","data-v-0f5eba43"]]);var f=v,h={__name:"App",setup(t){return(t,o)=>{const e=(0,d.up)("router-view");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(f),(0,d.Wm)(e)],64)}}};const g=h;var b=g,_=e(2483);const y=t=>((0,d.dD)("data-v-c8bd454a"),t=t(),(0,d.Cn)(),t),w={class:"manage-container"},k={key:0,class:"container todoList"},T=y((()=>(0,d._)("div",{class:"line"},null,-1))),C={class:"todoList-items"},D={key:0,style:{"font-family":"'Montserrat'","font-style":"normal","font-weight":"400","font-size":"rem(16)",color:"#000000",margin:"0 auto","text-align":"center"}},M={key:1,style:{"font-family":"'Montserrat'","font-style":"normal","font-weight":"400","font-size":"rem(16)",color:"#000000",margin:"auto","text-align":"center"}},O=y((()=>(0,d._)("div",{class:"line"},null,-1)));function x(t,o,e,n,i,a){const c=(0,d.up)("Input"),s=(0,d.up)("Buttons"),r=(0,d.up)("TodoItem");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d._)("div",w,[(0,d.Wm)(c,{input:t.input,onAddTodo:a.addTodo},null,8,["input","onAddTodo"]),(0,d.Wm)(s,{onChangeMode:a.changeMode,mode:t.mode},null,8,["onChangeMode","mode"])]),t.todos.length>0?((0,d.wg)(),(0,d.iD)("div",k,[T,(0,d._)("div",C,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(t.todos,((t,o)=>((0,d.wg)(),(0,d.iD)(d.HY,{key:t},["all"==this.mode?((0,d.wg)(),(0,d.j4)(r,{key:0,id:o,todo:t,onRemoveTodo:a.removeTodo},null,8,["id","todo","onRemoveTodo"])):(0,d.kq)("",!0),"completed"==this.mode&&t.completed?((0,d.wg)(),(0,d.j4)(r,{key:1,id:o,todo:t,onRemoveTodo:a.removeTodo},null,8,["id","todo","onRemoveTodo"])):(0,d.kq)("",!0),"uncompleted"!=this.mode||t.completed?(0,d.kq)("",!0):((0,d.wg)(),(0,d.j4)(r,{key:2,id:o,todo:t,onRemoveTodo:a.removeTodo},null,8,["id","todo","onRemoveTodo"]))],64)))),128)),"completed"==this.mode&&t.todos.every((t=>0==t.completed))?((0,d.wg)(),(0,d.iD)("div",D,"Nothing completed 😔")):"uncompleted"==this.mode&&t.todos.every((t=>1==t.completed))?((0,d.wg)(),(0,d.iD)("div",M,"All completed 🎉")):(0,d.kq)("",!0)]),O])):(0,d.kq)("",!0)],64)}const I={class:"input-container"};function j(t,o,e,i,a,c){return(0,d.wg)(),(0,d.iD)("div",I,[(0,d._)("button",{class:"btn",onClick:o[0]||(o[0]=o=>{t.$emit("add-todo",this.title),this.title=""})},"+"),(0,d.wy)((0,d._)("input",{autofocus:"",type:"text",placeholder:"Some text...","onUpdate:modelValue":o[1]||(o[1]=o=>t.title=o),onKeyup:o[2]||(o[2]=(0,n.D2)((o=>{t.$emit("add-todo",this.title),this.title=""}),["enter"]))},null,544),[[n.nr,t.title]])])}var A={name:"Input",props:["input"],data:function(){return{title:""}}};const H=(0,p.Z)(A,[["render",j],["__scopeId","data-v-1da6755c"]]);var R=H,W=e(7139);const Z={class:"buttons-container"};function q(t,o,e,n,i,a){return(0,d.wg)(),(0,d.iD)("div",Z,[(0,d._)("div",{onClick:o[0]||(o[0]=t=>a.change("all")),class:(0,W.C_)([{selected:"all"==this.currentMode},"btn"])},"All",2),(0,d._)("div",{onClick:o[1]||(o[1]=t=>a.change("completed")),class:(0,W.C_)([{selected:"completed"==this.currentMode},"btn"])},"Completed",2),(0,d._)("div",{onClick:o[2]||(o[2]=t=>a.change("uncompleted")),class:(0,W.C_)([{selected:"uncompleted"==this.currentMode},"btn"])},"Uncompleted",2)])}var B={name:"Buttons",props:["mode"],currentMode:"all",data:function(){return{currentMode:this.mode}},methods:{change(t){this.$emit("change-mode",t),this.currentMode=t}}};const z=(0,p.Z)(B,[["render",q],["__scopeId","data-v-071020b4"]]);var U=z,Y=e.p+"img/delete.6d708342.svg";const $=t=>((0,d.dD)("data-v-329f5d55"),t=t(),(0,d.Cn)(),t),G={class:"container"},P={class:"manage"},V=["todo"],E=$((()=>(0,d._)("img",{src:Y,alt:"Delete"},null,-1))),K=[E];function L(t,o,e,i,a,c){return(0,d.wg)(),(0,d.iD)("div",G,[(0,d._)("div",P,[(0,d.wy)((0,d._)("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=o=>t.completed=o),class:"doneBtn",todo:e.todo,onInput:o[1]||(o[1]=t=>this.todoo.completed=t.target.checked)},null,40,V),[[n.e8,t.completed]]),(0,d._)("div",{class:(0,W.C_)(["num",{done:e.todo.completed}])},(0,W.zw)(e.id+1),3)]),(0,d._)("div",{class:(0,W.C_)(["text",{done:e.todo.completed}])},(0,W.zw)(e.todo.text),3),(0,d._)("button",{class:"delBtn",onClick:o[2]||(o[2]=o=>t.$emit("remove-todo",e.id))},K)])}var F={name:"TodoItem",props:["todo","id"],data:function(){return{todoo:this.todo,todoss:this.todos,completed:!1}},mounted:function(){this.completed=this.todo.completed}};const N=(0,p.Z)(F,[["render",L],["__scopeId","data-v-329f5d55"]]);var S=N,J={name:"HomeView",components:{Input:R,Buttons:U,TodoItem:S},data:function(){return{input:"",mode:"all",todos:[]}},mounted:function(){},methods:{changeMode(t){this.mode=t,console.log(t)},removeTodo(t){this.todos.splice(t,1)},addTodo(t){if(""!=t){const o={text:t,completed:!1};this.todos.push(o)}}}};const Q=(0,p.Z)(J,[["render",x],["__scopeId","data-v-c8bd454a"]]);var X=Q;const tt=t=>((0,d.dD)("data-v-b52e0828"),t=t(),(0,d.Cn)(),t),ot={class:"container"},et=(0,d.Uk)("Go back"),nt=tt((()=>(0,d._)("a",{class:"btn",href:"https://github.com/yegych9923"},"Author",-1))),dt=tt((()=>(0,d._)("a",{class:"btn",href:"https://github.com/yegych9923/todo"},"GitHub",-1)));function it(t,o){const e=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("div",ot,[(0,d.Wm)(e,{class:"btn",to:"/"},{default:(0,d.w5)((()=>[et])),_:1}),nt,dt])}const at={},ct=(0,p.Z)(at,[["render",it],["__scopeId","data-v-b52e0828"]]);var st=ct;const rt=[{path:"/",name:"home",component:X},{path:"/menu",name:"menu",component:st}],lt=(0,_.p7)({history:(0,_.PO)(),routes:rt});var ut=lt,mt=e(65),pt=(0,mt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(b).use(pt).use(ut).mount("#app"),ut.replace({path:"*",redirect:"/"})}},o={};function e(n){var d=o[n];if(void 0!==d)return d.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,d,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],d=t[l][1],i=t[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[s])}))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var r=d();void 0!==r&&(o=r)}}return o}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,d,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p="/todo/"}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var d,i,a=n[0],c=n[1],s=n[2],r=0;if(a.some((function(o){return 0!==t[o]}))){for(d in c)e.o(c,d)&&(e.m[d]=c[d]);if(s)var l=s(e)}for(o&&o(n);r<a.length;r++)i=a[r],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},n=self["webpackChunktodo"]=self["webpackChunktodo"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4055)}));n=e.O(n)})();
//# sourceMappingURL=app.a332edbd.js.map