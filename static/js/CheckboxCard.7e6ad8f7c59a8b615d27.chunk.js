(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,a){var o=a(211);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(12).default)("e91641ce",o,!0,{})},206:function(e,t,a){var o=a(213);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(12).default)("81bb6994",o,!0,{})},207:function(e,t,a){var o=a(215);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,a(12).default)("77ec0b88",o,!0,{})},208:function(e,t,a){"use strict";a(219),a(85),a(84);var o=a(220),i=a.n(o),n=(a(221),a(222)),d=a.n(n),s={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){var e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new d.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){var a=new RegExp("<"+t+"[^>]*>"),o=e.match(a);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},l=(a(210),a(212),a(0)),r=Object(l.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("pre",{class:{bg:e.bg}},[a("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),a("span",{staticClass:"scale",on:{click:e.scale}},[a("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[a("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),a("span",{staticClass:"copy",on:{click:e.clip}},[a("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),a("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[a("pre",{class:{bg:e.bg}},[e._v("            "),a("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)}),[],!1,null,"7df69c7c",null);t.a=r.exports},209:function(e,t,a){"use strict";a(84);var o=a(218),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{var e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},n=(a(214),a(0)),d=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[a("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[a("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),a("header",{staticClass:"example-header"},[a("span",[e._v("\n                "+e._s(e.title)+"\n                "),a("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),a("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),a("div",{staticClass:"example-split"}),e._v(" "),a("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[a("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?a("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[a("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),a("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)}),[],!1,null,null,null);t.a=d.exports},210:function(e,t,a){"use strict";var o=a(205);a.n(o).a},211:function(e,t,a){(e.exports=a(11)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},212:function(e,t,a){"use strict";var o=a(206);a.n(o).a},213:function(e,t,a){(e.exports=a(11)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},214:function(e,t,a){"use strict";var o=a(207);a.n(o).a},215:function(e,t,a){(e.exports=a(11)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},327:function(e,t,a){"use strict";a.r(t);var o=a(216),i=a(217),n=a(208),d=a(209),s={},l={type:"CheckboxCard",model:"card",showCheckBox:!1,cardWidth:"220px",cardHeight:"150px",options:[{id:"11",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]},r={card:[]};s.data={field:l,model:r},s.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(l)+",\n            model: "+JSON.stringify(r)+"\n        };\n    }\n    methods: {\n        handleClick(value) {\n            console.log(value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-checkboxCard-click='handleClick'\n        />\n    </Form>\n</template>\n";var c={},v={type:"CheckboxCard",model:"card",checkAll:!0,cardWidth:"220px",cardHeight:"220px",options:[{id:"22",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：这是北京鸟巢",header:"美丽北京"},{id:"33",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：这是上海",header:"美丽上海"},{id:"00",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：这是上海",header:"美丽上海"}]},p={card:[]};c.data={field:v,model:p},c.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(v)+",\n            model: "+JSON.stringify(p)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var _={},m={type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",options:[{id:"44",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：44这是北京鸟巢",header:"美丽北京"},{id:"55",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：55这是上海",header:"美丽上海"},{id:"66",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：66这是北京鸟巢",header:"美丽北京"},{id:"77",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：77这是上海",header:"美丽上海"},{id:"88",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg",footer:"文案：88这是北京鸟巢",header:"美丽北京"},{id:"99",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg",footer:"文案：99这是上海",header:"美丽上海"}]},h={card:[]};_.data={field:m,model:h},_.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(m)+",\n            model: "+JSON.stringify(h)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var g={},u={type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",options:"/checkboxCardApi"},f={card:[]};g.data={field:u,model:f},g.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(u)+",\n            model: "+JSON.stringify(f)+"\n        };\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n        />\n    </Form>\n</template>\n";var b={},x={type:"CheckboxCard",model:"card",cardWidth:"220px",cardHeight:"250px",headerEditable:!0,footerEditable:!0,openCarousel:!0,carouselOptions:{loop:!1,radiusDot:!1},options:[{id:"carousel1",footer:"大北京夜上海",header:"美丽中国",urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"]},{id:"carousel2",footer:"夜上海大北京",header:"中华大地",urls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"]}]},F={card:[]};b.data={field:x,model:F},b.code="\n<script>\nexport default {\n    data() {\n        return {\n            field: "+JSON.stringify(x)+",\n            model: "+JSON.stringify(F)+"\n        };\n    }\n    methods: {\n        handleClick(value) {\n            console.log(value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model='model'>\n        <FieldGenerator\n            :field='field'\n            @on-checkboxCard-click='handleClick'\n        />\n    </Form>\n</template>\n";var y={simple:s,checkAll:c,page:_,api:g,carousel:b},w={components:{iArticle:o.a,inAnchor:i.a,iCode:n.a,Demo:d.a},data:()=>({code:y}),computed:{pageModel(){return this.code.page.data.model}},watch:{pageModel:{handler(){},deep:!0}},methods:{handleClick(){}}},C=a(0),k=Object(C.a)(w,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i-article",[a("article",[a("h1",[e._v("CheckboxCard 选择框卡片")]),e._v(" "),a("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),a("p",[e._v("基本组件-选择框卡片。主要用于可选的卡片-支持图片和视频显示")]),e._v(" "),a("div",{staticClass:"api"},[a("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),a("inAnchor",{attrs:{title:"核心配置",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("model")]),e._v(" "),a("td",[e._v("绑定的值的名称")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("不可为空")])]),e._v(" "),a("tr",[a("td",[e._v("options")]),e._v(" "),a("td",[e._v("选项列表,如\n                                "),a("pre",[e._v("[\n    {\n        header: '',\n        type: '',\n        url: '',\n        footer: '',\n        showCheckBox: true,\n        disabled: false\n    }\n]\n                                ")])]),e._v(" "),a("td",[e._v("Array(option) | String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("optionsType")]),e._v(" "),a("td",[e._v("内容类型(图片:image,视频:video)")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("image")])]),e._v(" "),a("tr",[a("td",[e._v("api")]),e._v(" "),a("td",[e._v("获取选项的接口")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("''，api的返回值格式为:\n                                "),a("pre",[e._v('{\n    status: 0,\n    data: [\n        {\n            "id": "",\n            "url": "",\n            "footer": "",\n            "header": ""\n        }\n    ]\n}\n                                ')])])]),e._v(" "),a("tr",[a("td",[e._v("checkAll")]),e._v(" "),a("td",[e._v("是否展示全选")]),e._v(" "),a("td",[e._v("Boolean\t")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("showCheckBox")]),e._v(" "),a("td",[e._v("是否展示卡片checkbox")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("true")])]),e._v(" "),a("tr",[a("td",[e._v("cardWidth")]),e._v(" "),a("td",[e._v("Card宽度")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("220px")])]),e._v(" "),a("tr",[a("td",[e._v("cardHeight")]),e._v(" "),a("td",[e._v("Card高度")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("220px")])]),e._v(" "),a("tr",[a("td",[e._v("pageLation")]),e._v(" "),a("td",[e._v("是否分页")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("pageSize")]),e._v(" "),a("td",[e._v("每页条数")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("10")])]),e._v(" "),a("tr",[a("td",[e._v("headerEditable")]),e._v(" "),a("td",[e._v("头部文案是否可编辑")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("footerEditable")]),e._v(" "),a("td",[e._v("尾部文案是否可编辑")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("videoControl")]),e._v(" "),a("td",[e._v("视频源是否展示播放控件")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("openCarousel")]),e._v(" "),a("td",[e._v("开启走马灯。true：开启，需要配置options.urls")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions")]),e._v(" "),a("td",[e._v("走马灯配置信息，如\n                                "),a("pre",[e._v("{\n    value: 0,\n    loop: false,\n    autoplay: false,\n    autoplaySpeed: 2000,\n    dots: inside,\n    radiusDot: false,\n    trigger: click,\n    arrow: hover,\n    easing: ease\n}\n                                ")])]),e._v(" "),a("td",[e._v("Object")]),e._v(" "),a("td",[e._v("-")])])])]),e._v(" "),a("inAnchor",{attrs:{title:"选项配置",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("属性")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("默认值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("options.url")]),e._v(" "),a("td",[e._v("内容地址（默认，不启用走马灯）")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("options.header")]),e._v(" "),a("td",[e._v("头部信息")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("options.footer")]),e._v(" "),a("td",[e._v("尾部信息")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("options.disabled")]),e._v(" "),a("td",[e._v("是否禁用该选项")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("options.urls")]),e._v(" "),a("td",[e._v("走马灯数据（启用走马灯）")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.value")]),e._v(" "),a("td",[e._v("幻灯片的索引，从 0 开始")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("0")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.loop")]),e._v(" "),a("td",[e._v("是否开启循环")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.autoplay")]),e._v(" "),a("td",[e._v("是否自动切换")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.autoplaySpeed")]),e._v(" "),a("td",[e._v("自动切换的时间间隔，单位为毫秒")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("2000")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.dots")]),e._v(" "),a("td",[e._v("指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("inside")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.radiusDot")]),e._v(" "),a("td",[e._v("是否显示圆形指示器")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.trigger")]),e._v(" "),a("td",[e._v("指示器的触发方式，可选值为 click（点击），hover（悬停）")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("click")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.arrow")]),e._v(" "),a("td",[e._v("切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示）")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("hover")])]),e._v(" "),a("tr",[a("td",[e._v("carouselOptions.easing")]),e._v(" "),a("td",[e._v("动画效果")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("ease")])])])]),e._v(" "),a("inAnchor",{attrs:{title:"事件",h3:""}}),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("方法名")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("返回值")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("on-checkboxCard-click")]),e._v(" "),a("td",[e._v("点击卡片时触发")]),e._v(" "),a("td",[e._v("当前options")])])])])],1),e._v(" "),a("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),a("Demo",{attrs:{title:"基础用法",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("Form",{attrs:{model:e.code.simple.data.model}},[a("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-checkboxCard-click":e.handleClick}})],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("field")]),e._v(", "),a("code",[e._v("model")]),e._v("即可生成一个checkboxCard。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),a("Demo",{attrs:{title:"全选",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("Form",{attrs:{model:e.code.checkAll.data.model}},[a("FieldGenerator",{attrs:{field:e.code.checkAll.data.field},on:{"on-checkboxCard-click":e.handleClick}})],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("field.checkAll")]),e._v("可以控制是否展示全选。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.checkAll.code))])],1),e._v(" "),a("Demo",{attrs:{title:"分页",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("Form",{attrs:{model:e.code.page.data.model}},[a("FieldGenerator",{attrs:{field:e.code.page.data.field},on:{"on-checkboxCard-click":e.handleClick}})],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("field.pageLation")]),e._v("可以控制是否本地分页。")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.page.code))])],1),e._v(" "),a("Demo",{attrs:{title:"api",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("Form",{attrs:{model:e.code.api.data.model}},[a("FieldGenerator",{attrs:{field:e.code.api.data.field},on:{"on-checkboxCard-click":e.handleClick}})],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("field.options")]),e._v("可以是接口地址")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.api.code))])],1),e._v(" "),a("Demo",{attrs:{title:"走马灯",vertical:""}},[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("Form",{attrs:{model:e.code.carousel.data.model}},[a("FieldGenerator",{attrs:{field:e.code.carousel.data.field},on:{"on-checkboxCard-click":e.handleClick}})],1)],1),e._v(" "),a("div",{attrs:{slot:"desc"},slot:"desc"},[a("p",[e._v("通过设置"),a("code",[e._v("field.openCarousel")]),e._v("可以开启走马灯")])]),e._v(" "),a("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.carousel.code))])],1)],1)])}),[],!1,null,null,null).exports;t.default=k}}]);