(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{327:function(e,t,r){},371:function(e,t,r){"use strict";r(327)},427:function(e,t,r){"use strict";r.r(t);var a=r(287),n=r.n(a),s=(r(288),{name:"LatexRenderer2",props:{latexCode:{type:String,required:!0},id:{type:String,default:""}},data:()=>({tag:"",renderedLatex:""}),methods:{renderLatex(e){try{return n.a.renderToString(e,{throwOnError:!1,displayMode:!0})}catch(e){return console.error("Error rendering LaTeX:",e),`<p>Error rendering LaTeX: ${e.message}</p>`}},updateLatex(e){this.tag=e,this.renderedLatex=this.renderLatex(this.latexCode+`\\tag{${this.tag}}`)}},mounted(){this.updateLatex(this.$slots.tag?this.$slots.tag[0].text:"")}}),i=(r(371),r(5)),d=Object(i.a)(s,(function(){var e=this._self._c;return e("div",{staticClass:"latex-container",attrs:{id:this.id}},[e("div",{domProps:{innerHTML:this._s(this.renderedLatex)}})])}),[],!1,null,"02133da8",null);t.default=d.exports}}]);