!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/example/",t(t.s=5)}([function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],u=i[3],c={css:s,media:l,sourceMap:u};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=b++;n=m||(m=s(t)),r=d.bind(null,n,u,!1),o=d.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,b=0,y=[],x=n(8);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete h[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=React},function(e,t,n){"use strict";var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":i(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===r)for(var o in n)s.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}var s={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=a:"object"===i(n(4))&&n(4)?(r=[],void 0!==(o=function(){return a}.apply(t,r))&&(e.exports=o)):window.classNames=a}()},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6),n(9),n(11);var l=n(3),u=r(l),c=n(2),d=r(c),f=n(13),p=r(f),h=n(14),g=r(h),v=n(23),m=r(v),b=n(24),y=r(b),x=function(e){function t(){var e,n,r,a;o(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={active:null,tree:m.default},r.renderNode=function(e){return d.default.createElement("span",{className:(0,u.default)("node",{"is-active":e===r.state.active}),onClick:r.onClickNode.bind(null,e)},e.module)},r.onClickNode=function(e){r.setState({active:e})},r.handleChange=function(e){r.setState({tree:e})},r.updateTree=function(){var e=r.state.tree;e.children.push({module:"test"}),r.setState({tree:e})},a=n,i(r,a)}return a(t,e),s(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"app"},d.default.createElement("div",{className:"tree"},d.default.createElement(g.default,{paddingLeft:20,tree:this.state.tree,onChange:this.handleChange,isNodeCollapsed:this.isNodeCollapsed,renderNode:this.renderNode})),d.default.createElement("div",{className:"inspector"},d.default.createElement("h1",null,y.default.name," ",y.default.version),d.default.createElement("button",{onClick:this.updateTree},"update tree"),d.default.createElement("pre",null,JSON.stringify(this.state.tree,null,"  "))))}}]),t}(c.Component);p.default.render(d.default.createElement(x,null),document.getElementById("app"))},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,'.f-no-select,.m-tree{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.m-tree{position:relative;overflow:hidden}.m-draggable{position:absolute;opacity:.8;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.m-node.placeholder>*{visibility:hidden}.m-node.placeholder{border:1px dashed #ccc}.m-node .inner{position:relative;cursor:pointer;padding-left:10px}.m-node .collapse{position:absolute;left:0;cursor:pointer}.m-node .caret-right:before{content:"\\25B8"}.m-node .caret-down:before{content:"\\25BE"}',""])},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,".tree{position:fixed;top:0;left:0;bottom:0;width:300px;overflow-x:hidden;overflow-y:auto;background-color:#21252b}.m-node.placeholder{border:1px dashed #1385e5}.m-node .inner{color:#9da5b4;font-size:12px;font-family:Menlo}.m-node .node{display:inline-block;width:100%;padding:4px 5px}.m-node .node.is-active{background-color:#31363f}",""])},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(void 0),t.push([e.i,"*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{margin:0;padding:0;font-size:100%}.inspector{margin-left:400px}.inspector pre{font-family:Menlo;font-size:13px}",""])},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),u=r(l),c=n(15),d=r(c),f=n(20),p=r(f),h=n(22),g=r(h),v=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return m.call(n),n.state=n.init(e),n}return a(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this._updated?this._updated=!1:this.setState(this.init(e))}},{key:"render",value:function(){var e=this.state.tree,t=this.state.dragging,n=this.getDraggingDom();return u.default.createElement("div",{className:"m-tree"},n,u.default.createElement(g.default,{tree:e,index:e.getIndex(1),key:1,paddingLeft:this.props.paddingLeft,onDragStart:this.dragStart,onCollapse:this.toggleCollapse,dragging:t&&t.id}))}}]),t}(l.Component);v.propTypes={tree:d.default.object.isRequired,paddingLeft:d.default.number,renderNode:d.default.func.isRequired},v.defaultProps={paddingLeft:20};var m=function(){var e=this;this.init=function(e){var t=new p.default(e.tree);return t.isNodeCollapsed=e.isNodeCollapsed,t.renderNode=e.renderNode,t.changeNodeCollapsed=e.changeNodeCollapsed,t.updateNodesPosition(),{tree:t,dragging:{id:null,x:null,y:null,w:null,h:null}}},this.getDraggingDom=function(){var t=e.state,n=t.tree,r=t.dragging;if(r&&r.id){var o=n.getIndex(r.id),i={top:r.y,left:r.x,width:r.w};return u.default.createElement("div",{className:"m-draggable",style:i},u.default.createElement(g.default,{tree:n,index:o,paddingLeft:e.props.paddingLeft}))}return null},this.dragStart=function(t,n,r){e.dragging={id:t,w:n.offsetWidth,h:n.offsetHeight,x:n.offsetLeft,y:n.offsetTop},e._startX=n.offsetLeft,e._startY=n.offsetTop,e._offsetX=r.clientX,e._offsetY=r.clientY,e._start=!0,window.addEventListener("mousemove",e.drag),window.addEventListener("mouseup",e.dragEnd)},this.drag=function(t){e._start&&(e.setState({dragging:e.dragging}),e._start=!1);var n=e.state.tree,r=e.state.dragging,o=e.props.paddingLeft,i=null,a=n.getIndex(r.id),s=a.node.collapsed,l=e._startX,u=e._startY,c=e._offsetX,d=e._offsetY,f={x:l+t.clientX-c,y:u+t.clientY-d};r.x=f.x,r.y=f.y;var p=r.x-o/2-(a.left-2)*o,h=r.y-r.h/2-(a.top-2)*r.h;if(p<0)a.parent&&!a.next&&(i=n.move(a.id,a.parent,"after"));else if(p>o&&a.prev){var g=n.getIndex(a.prev).node;g.collapsed||g.leaf||(i=n.move(a.id,a.prev,"append"))}if(i&&(a=i,i.node.collapsed=s,r.id=i.id),h<0){var v=n.getNodeByTop(a.top-1);i=n.move(a.id,v.id,"before")}else if(h>r.h)if(a.next){var m=n.getIndex(a.next);i=m.children&&m.children.length&&!m.node.collapsed?n.move(a.id,a.next,"prepend"):n.move(a.id,a.next,"after")}else{var b=n.getNodeByTop(a.top+a.height);b&&b.parent!==a.id&&(i=b.children&&b.children.length&&!b.node.collapsed?n.move(a.id,b.id,"prepend"):n.move(a.id,b.id,"after"))}i&&(i.node.collapsed=s,r.id=i.id),e.setState({tree:n,dragging:r})},this.dragEnd=function(){e.setState({dragging:{id:null,x:null,y:null,w:null,h:null}}),e.change(e.state.tree),window.removeEventListener("mousemove",e.drag),window.removeEventListener("mouseup",e.dragEnd)},this.change=function(t){e._updated=!0,e.props.onChange&&e.props.onChange(t.obj)},this.toggleCollapse=function(t){var n=e.state.tree,r=n.getIndex(t),o=r.node;o.collapsed=!o.collapsed,n.updateNodesPosition(),e.setState({tree:n}),e.change(n)}};e.exports=v},function(e,t,n){"use strict";"function"==typeof Symbol&&Symbol.iterator;e.exports=n(16)()},function(e,t,n){"use strict";var r=n(17),o=n(18),i=n(19);e.exports=function(){function e(e,t,n,r,a,s){s!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,s,l){if(o(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,a,s,l],d=0;u=new Error(t.replace(/%s/g,function(){return c[d++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=n(21),o=r.prototype;o.updateNodesPosition=function(){function e(n,r,i,a){var s=1;return n.forEach(function(n){var r=o.getIndex(n);a?(r.top=null,r.left=null):(r.top=t++,r.left=i),r.children&&r.children.length?s+=e(r.children,r,i+1,a||r.node.collapsed):(r.height=1,s+=1)}),r.node.collapsed?r.height=1:r.height=s,r.height}var t=1,n=1,r=this.getIndex(1),o=this;r.top=t++,r.left=n++,r.children&&r.children.length&&e(r.children,r,n,r.node.collapsed)},o.move=function(e,t,n){if(e!==t&&1!==t){var r=this.remove(e),o=null;return"before"===n?o=this.insertBefore(r,t):"after"===n?o=this.insertAfter(r,t):"prepend"===n?o=this.prepend(r,t):"append"===n&&(o=this.append(r,t)),this.updateNodesPosition(),o}},o.getNodeByTop=function(e){var t=this.indexes;for(var n in t)if(t.hasOwnProperty(n)&&t[n].top===e)return t[n]},e.exports=r},function(e,t,n){"use strict";function r(e){this.cnt=1,this.obj=e||{children:[]},this.indexes={},this.build(this.obj)}var o=r.prototype;o.build=function(e){function t(e,r){var i=[];e.forEach(function(e,a){var s={};s.id=o.cnt,s.node=e,r&&(s.parent=r.id),n[o.cnt+""]=s,i.push(o.cnt),o.cnt++,e.children&&e.children.length&&t(e.children,s)}),r.children=i,i.forEach(function(e,t){var r=n[e+""];t>0&&(r.prev=i[t-1]),t<i.length-1&&(r.next=i[t+1])})}var n=this.indexes,r=this.cnt,o=this,i={id:r,node:e};return n[this.cnt+""]=i,this.cnt++,e.children&&e.children.length&&t(e.children,i),i},o.getIndex=function(e){var t=this.indexes[e+""];if(t)return t},o.removeIndex=function(e){function t(e){delete n.indexes[e.id+""],e.children&&e.children.length&&e.children.forEach(function(e){t(n.getIndex(e))})}var n=this;t(e)},o.get=function(e){var t=this.getIndex(e);return t&&t.node?t.node:null},o.remove=function(e){var t=this.getIndex(e),n=this.get(e),r=this.getIndex(t.parent),o=this.get(t.parent);return o.children.splice(o.children.indexOf(n),1),r.children.splice(r.children.indexOf(e),1),this.removeIndex(t),this.updateChildren(r.children),n},o.updateChildren=function(e){e.forEach(function(t,n){var r=this.getIndex(t);r.prev=r.next=null,n>0&&(r.prev=e[n-1]),n<e.length-1&&(r.next=e[n+1])}.bind(this))},o.insert=function(e,t,n){var r=this.getIndex(t),o=this.get(t),i=this.build(e);return i.parent=t,o.children=o.children||[],r.children=r.children||[],o.children.splice(n,0,e),r.children.splice(n,0,i.id),this.updateChildren(r.children),r.parent&&this.updateChildren(this.getIndex(r.parent).children),i},o.insertBefore=function(e,t){var n=this.getIndex(t),r=n.parent,o=this.getIndex(r).children.indexOf(t);return this.insert(e,r,o)},o.insertAfter=function(e,t){var n=this.getIndex(t),r=n.parent,o=this.getIndex(r).children.indexOf(t);return this.insert(e,r,o+1)},o.prepend=function(e,t){return this.insert(e,t,0)},o.append=function(e,t){var n=this.getIndex(t);return n.children=n.children||[],this.insert(e,t,n.children.length)},e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),u=r(l),c=n(2),d=r(c),f=function(e){function t(){var e,n,r,a;o(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.renderCollapse=function(){var e=r.props.index;if(e.children&&e.children.length){var t=e.node.collapsed;return d.default.createElement("span",{className:(0,u.default)("collapse",t?"caret-right":"caret-down"),onMouseDown:function(e){return e.stopPropagation()},onClick:r.handleCollapse})}return null},r.renderChildren=function(){var e=r.props,n=e.index,o=e.tree,i=e.dragging;if(n.children&&n.children.length){var a={paddingLeft:r.props.paddingLeft};return d.default.createElement("div",{className:"children",style:a},n.children.map(function(e){var n=o.getIndex(e);return d.default.createElement(t,{tree:o,index:n,key:n.id,dragging:i,paddingLeft:r.props.paddingLeft,onCollapse:r.props.onCollapse,onDragStart:r.props.onDragStart})}))}return null},r.handleCollapse=function(e){e.stopPropagation();var t=r.props.index.id;r.props.onCollapse&&r.props.onCollapse(t)},r.handleMouseDown=function(e){var t=r.props.index.id,n=r.refs.inner;r.props.onDragStart&&r.props.onDragStart(t,n,e)},a=n,i(r,a)}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.tree,n=e.index,r=e.dragging,o=n.node,i={};return d.default.createElement("div",{className:(0,u.default)("m-node",{placeholder:n.id===r}),style:i},d.default.createElement("div",{className:"inner",ref:"inner",onMouseDown:this.handleMouseDown},this.renderCollapse(),t.renderNode(o)),o.collapsed?null:this.renderChildren())}}]),t}(c.Component);e.exports=f},function(e,t,n){"use strict";e.exports={module:"react-ui-tree",children:[{module:"dist",collapsed:!0,children:[{module:"node.js",leaf:!0},{module:"react-ui-tree.css",leaf:!0},{module:"react-ui-tree.js",leaf:!0},{module:"tree.js",leaf:!0}]},{module:"example",children:[{module:"app.js",leaf:!0},{module:"app.less",leaf:!0},{module:"index.html",leaf:!0}]},{module:"lib",children:[{module:"node.js",leaf:!0},{module:"react-ui-tree.js",leaf:!0},{module:"react-ui-tree.less",leaf:!0},{module:"tree.js",leaf:!0}]},{module:".gitiignore",leaf:!0},{module:"index.js",leaf:!0},{module:"LICENSE",leaf:!0},{module:"Makefile",leaf:!0},{module:"package.json",leaf:!0},{module:"README.md",leaf:!0},{module:"webpack.config.js",leaf:!0}]}},function(e,t){e.exports={name:"react-ui-tree",version:"3.0.0",description:"React tree component",main:"index.js",scripts:{start:"webpack-dev-server --port=8888",build:"make",deploy:"npm run build && github-pages-deploy",test:"mocha"},"github-pages-deploy":{src:"example"},repository:{type:"git",url:"https://github.com/pqx/react-ui-tree.git"},keywords:["react","react-component","tree"],author:"Wang Zuo",license:"MIT",bugs:{url:"https://github.com/pqx/react-ui-tree/issues"},homepage:"https://github.com/pqx/react-ui-tree",peerDependencies:{react:"^15.0.0","react-dom":"^15.0.0"},devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.25.0","babel-loader":"^7.1.1","babel-preset-es2015":"^6.24.1","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1","css-loader":"^0.28.4","github-pages-deploy":"^0.0.3",less:"^2.7.2","less-loader":"^4.0.5",mocha:"^3.4.2",react:"^15.6.1","react-dom":"^15.6.1","style-loader":"^0.18.2",webpack:"^3.3.0","webpack-dev-server":"^2.5.1"},dependencies:{classnames:"^2.2.5","js-tree":"^1.1.0","prop-types":"^15.5.10"}}}]);
//# sourceMappingURL=bundle.js.map