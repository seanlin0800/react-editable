webpackJsonp([0],{0:function(e,t,n){"use strict";var r=n(1),s=n(152);n(168),r.render(r.createElement(s),document.getElementById("app"))},152:function(e,t,n){"use strict";var r=n(1),s=n(153),a=n(163),i=r.createClass({displayName:"Main",render:function(){return r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-xs-12"},r.createElement(s,null),r.createElement(a,null))))}});e.exports=i},153:function(e,t,n){"use strict";var r=n(1),s=n(154),a=n(160),i=n(161),l=n(162),u=r.createClass({displayName:"Text",getInitialState:function(){return{value:"superuser"}},_update:function(e){this.setState({value:e})},render:function(){var e=r.createElement(s,{initValue:this.state.value,onUpDate:this._update},r.createElement("a",{href:"#"}));return r.createElement(a,{title:"Text",code:e,state:this.state,jsx:i,js:l})}});e.exports=u},154:function(e,t,n){"use strict";var r=n(1),s=n(155),a=n(157),i=r.createClass({displayName:"EditableText",mixins:[a],render:function(){return this._render(s)}});e.exports=i},155:function(e,t,n){"use strict";var r=n(1),s=n(156),a=r.createClass({displayName:"Input",propTypes:{onBlur:r.PropTypes.func},mixins:[s],_handleFocus:function(e){var t=this.state.value.length;e.target.setSelectionRange(t,t)},render:function(){return r.createElement("input",{className:"editable-has-buttons editable-input form-control",value:this.state.value,onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this.props.onBlur,autoFocus:!0})}});e.exports=a},156:function(e,t,n){"use strict";var r=n(1),s={propTypes:{initValue:r.PropTypes.any.isRequired},getInitialState:function(){return{value:this.props.initValue}},getValue:function(){return this.state.value},_handleChange:function(e){this.setState({value:e.target.value})}};e.exports=s},157:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),a=n(158),i=n(159),l={propTypes:{initValue:s.PropTypes.any.isRequired,onUpDate:s.PropTypes.func},getInitialState:function(){return{isEditing:!1}},_setEditing:function(e){this.setState({isEditing:e})},_handleClick:function(e){e.preventDefault(),this._setEditing(!0)},_renderChildren:function(){var e=a({"editable-click":!0,"editable-empty":!this.props.initValue});return s.Children.map(this.props.children,function(t){return s.cloneElement(t,{onClick:this._handleClick,className:e},this.props.initValue||"empty")},this)},_render:function(e){return this.state.isEditing?s.createElement(i,r({},this.props,{onEnd:this._setEditing.bind(null,!1),control:e})):s.createElement("div",null,this._renderChildren())}};e.exports=l},159:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(1),a=s.createClass({displayName:"Form",propTypes:{initValue:s.PropTypes.any.isRequired,onEnd:s.PropTypes.func,onUpDate:s.PropTypes.func,control:s.PropTypes.func.isRequired},_update:function(e){e.preventDefault(),this.props.onEnd(),this.props.onUpDate(this.refs.control.getValue())},_handleBlur:function(){var e=this;setTimeout(function(){s.findDOMNode(e.refs.submit)!==document.activeElement&&e.props.onEnd()})},render:function(){return s.createElement("form",{className:"form-inline editable-wrap",role:"form",onSubmit:this._update},s.createElement("div",{className:"editable-controls form-group"},s.createElement(this.props.control,r({},this.props,{onBlur:this._handleBlur,ref:"control"})),s.createElement("span",{className:"editable-buttons"},s.createElement("button",{type:"submit",className:"btn btn-primary",ref:"submit"},s.createElement("span",{className:"glyphicon glyphicon-ok"})),s.createElement("button",{type:"button",className:"btn btn-default"},s.createElement("span",{className:"glyphicon glyphicon-remove"})))))}});e.exports=a},160:function(e,t,n){"use strict";var r=n(1),s=r.createClass({displayName:"Example",propTypes:{title:r.PropTypes.string.isRequired,code:r.PropTypes.element.isRequired,state:r.PropTypes.object.isRequired,jsx:r.PropTypes.string.isRequired,js:r.PropTypes.string.isRequired},render:function(){return r.createElement("div",null,r.createElement("h1",null,this.props.title),r.createElement("h3",null,"demo"),r.createElement("div",{className:"well"},this.props.code),r.createElement("pre",null,JSON.stringify(this.props.state)),r.createElement("h3",null,"jsx"),r.createElement("pre",null,this.props.jsx),r.createElement("h3",null,"js"),r.createElement("pre",null,this.props.js))}});e.exports=s},161:function(e,t){e.exports='<EditableText initValue={this.state.value} onUpDate={this._update}>\r\n  <a href="#" />\r\n</EditableText>\r\n'},162:function(e,t){e.exports="_update: function(value) {\r\n  this.setState({value: value});\r\n}\r\n"},163:function(e,t,n){"use strict";var r=n(1),s=n(164),a=n(160),i=n(166),l=n(167),u=r.createClass({displayName:"Select",getInitialState:function(){return{status:2}},_update:function(e){this.setState({status:e})},render:function(){var e=[{value:1,text:"status1"},{value:2,text:"status2"},{value:3,text:"status3"},{value:4,text:"status4"}],t=r.createElement(s,{initValue:this.state.status,onUpDate:this._update,options:e},r.createElement("a",{href:"#"}));return r.createElement(a,{title:"Select",code:t,state:this.state,jsx:i,js:l})}});e.exports=u},164:function(e,t,n){"use strict";var r=n(1),s=n(165),a=n(157),i=r.createClass({displayName:"EditableSelect",propTypes:{options:r.PropTypes.array.isRequired},mixins:[a],render:function(){return this._render(s)}});e.exports=i},165:function(e,t,n){"use strict";var r=n(1),s=n(156),a=r.createClass({displayName:"Select",propTypes:{options:r.PropTypes.array.isRequired,onBlur:r.PropTypes.func},mixins:[s],_renderOptions:function(){return this.props.options.map(function(e,t){return r.createElement("option",{value:e.value,key:t},e.text)},this)},render:function(){return r.createElement("select",{className:"editable-has-buttons editable-input form-control",value:this.state.value,onChange:this._handleChange,onBlur:this.props.onBlur,autoFocus:!0},this._renderOptions())}});e.exports=a},166:function(e,t){e.exports='<EditableSelect\r\n  initValue={this.state.status}\r\n  onUpDate={this._update}\r\n  options={options}\r\n>\r\n  <a href="#" />\r\n</EditableSelect>\r\n'},167:function(e,t){e.exports="_update: function(value) {\r\n  this.setState({status: value});\r\n},\r\n\r\nvar options = [\r\n  {value: 1, text: 'status1'},\r\n  {value: 2, text: 'status2'},\r\n  {value: 3, text: 'status3'},\r\n  {value: 4, text: 'status4'}\r\n];\r\n"},168:function(e,t){}});