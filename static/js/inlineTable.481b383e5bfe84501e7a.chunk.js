(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{808:function(e,t,n){"use strict";n.r(t);var a=[{label:"Name",type:"Input",width:250,model:"name",required:!0,inline:!0},{label:"birthday",type:"DatePicker",width:250,model:"birthday",required:!0,inline:!0},{label:"Age",width:250,type:"InputNumber",model:"age",rule:[{type:"Integer",require:!0,message:"请输入一个整数"}],inline:!0},{label:"address",width:250,type:"Input",model:"address",required:!0,inline:!0},{type:"Button",subtype:"primary",text:"保存",action:{type:"event",name:"save"},inline:!0},{type:"Button",text:"取消",action:{type:"event",name:"cancel"},inline:!0,labelWidth:0}],i=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Birthday",key:"birthday"},{title:"Address",key:"address"}],s=[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",job:"Data engineer",interest:"badminton",birthday:"1991-05-14",book:"Steve Jobs",movie:"The Prestige",music:"I Cry"},{name:"Jim Green",age:25,address:"London No. 1 Lake Park",job:"Data Scientist",interest:"volleyball",birthday:"1989-03-18",book:"My Struggle",movie:"Roman Holiday",music:"My Heart Will Go On"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",job:"Data Product Manager",interest:"tennis",birthday:"1992-01-31",book:"Win",movie:"Jobs",music:"Don’t Cry"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",job:"Data Analyst",interest:"snooker",birthday:"1988-7-25",book:"A Dream in Red Mansions",movie:"A Chinese Ghost Story",music:"actor"}],d={props:{fields:{type:Array,required:!0},options:{type:Object,default:()=>({})},editModel:{type:Object,default:()=>({})},index:{type:Number,default:0}},data:()=>({model:{}}),created(){this.model=this.editModel},methods:{handleButtonEvent(e){switch(e.name){case"save":this.$refs.form.validate(t=>{t&&this.$emit("on-save-event",e,this.index,this.model)});break;case"cancel":this.$emit("on-cancel-event",e,this.index);break;default:this.$emit("on-button-event",e,this.index,this.model)}}}},o=n(1),r=Object(o.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Form",{ref:"form",attrs:{model:e.model}},e._l(e.fields,(function(t,a){return n("FieldGenerator",{key:a,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t)}}})})),1)],1)}),[],!1,null,null,null).exports,l={components:{tableExpand:r},data(){return"expand"!==i[0].type&&i.unshift({type:"expand",width:50,render:(e,t)=>e(r,{props:{fields:a,editModel:Object.assign({},t.row),index:t.index},on:{"on-save-event":this.handleSaveEvent,"on-cancel-event":this.handleCancelEvent}})}),{columns:i,data:s}},methods:{handleSaveEvent(e,t,n){this.data.splice(t,1,Object.assign({},this.data[t],n,{_expanded:!1})),this.$Message.success(JSON.stringify(n))},handleCancelEvent(e,t){this.data[t]._expanded=!1,this.data.push()}}},h=Object(o.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("Table",{attrs:{columns:this.columns,data:this.data}})}),[],!1,null,null,null).exports;t.default=h}}]);