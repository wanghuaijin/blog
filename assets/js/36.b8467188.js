(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{326:function(e,t,r){},370:function(e,t,r){"use strict";r(326)},426:function(e,t,r){"use strict";r.r(t);var a=r(287),n=r.n(a),d=(r(288),{name:"LatexRenderer2",props:{latexCode:{type:String,required:!0},id:{type:String,default:""},tag:{type:String,default:""}},data:()=>({renderedLatex:""}),watch:{latexCode:"updateLatex",tag:"updateLatex"},methods:{renderLatex(e){try{return n.a.renderToString(e,{throwOnError:!1,displayMode:!0})}catch(e){return console.error("Error rendering LaTeX:",e),`<p>Error rendering LaTeX: ${e.message}</p>`}},updateLatex(){this.renderedLatex=this.renderLatex(this.latexCode+"\\tag{"+this.tag+"}")}},mounted(){this.updateLatex()}}),i=(r(370),r(5)),s=Object(i.a)(d,(function(){var e=this._self._c;return e("div",{staticClass:"latex-container",attrs:{id:this.id,"data-tag":this.tag}},[e("div",{domProps:{innerHTML:this._s(this.renderedLatex)}})])}),[],!1,null,"36366f7b",null);t.default=s.exports}}]);