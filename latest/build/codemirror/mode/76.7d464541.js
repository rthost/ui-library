webpackJsonp([63],{915:function(t,e,n){!function(t){t(n(820))}(function(t){"use strict";t.registerHelper("wordChars","r",/[\w.]/),t.defineMode("r",function(t){function wordObj(t){for(var e=t.split(" "),n={},r=0;r<e.length;++r)n[e[r]]=!0;return n}function tokenBase(t,c){e=null;var u=t.next();if("#"==u)return t.skipToEnd(),"comment";if("0"==u&&t.eat("x"))return t.eatWhile(/[\da-f]/i),"number";if("."==u&&t.eat(/\d/))return t.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(u))return t.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==u||'"'==u)return c.tokenize=function tokenString(t){return function(e,n){if(e.eat("\\")){var r=e.next();return"x"==r?e.match(/^[a-f0-9]{2}/i):("u"==r||"U"==r)&&e.eat("{")&&e.skipTo("}")?e.next():"u"==r?e.match(/^[a-f0-9]{4}/i):"U"==r?e.match(/^[a-f0-9]{8}/i):/[0-7]/.test(r)&&e.match(/^[0-7]{1,2}/),"string-2"}for(var a;null!=(a=e.next());){if(a==t){n.tokenize=tokenBase;break}if("\\"==a){e.backUp(1);break}}return"string"}}(u),"string";if("`"==u)return t.match(/[^`]+`/),"variable-3";if("."==u&&t.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(u)&&"_"!=u){t.eatWhile(/[\w\.]/);var l=t.current();return n.propertyIsEnumerable(l)?"atom":a.propertyIsEnumerable(l)?(i.propertyIsEnumerable(l)&&!t.match(/\s*if(\s+|$)/,!1)&&(e="block"),"keyword"):r.propertyIsEnumerable(l)?"builtin":"variable"}return"%"==u?(t.skipTo("%")&&t.next(),"operator variable-2"):"<"==u&&t.eat("-")||"<"==u&&t.match("<-")||"-"==u&&t.match(/>>?/)?"operator arrow":"="==u&&c.ctx.argList?"arg-is":o.test(u)?"$"==u?"operator dollar":(t.eatWhile(o),"operator"):/[\(\){}\[\];]/.test(u)?(e=u,";"==u?"semi":null):null}function push(t,e,n){t.ctx={type:e,indent:t.indent,flags:0,column:n.column(),prev:t.ctx}}function setFlag(t,e){var n=t.ctx;t.ctx={type:n.type,indent:n.indent,flags:n.flags|e,column:n.column,prev:n.prev}}function pop(t){t.indent=t.ctx.indent,t.ctx=t.ctx.prev}var e,n=wordObj("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),r=wordObj("list quote bquote eval return call parse deparse"),a=wordObj("if else repeat while function for in next break"),i=wordObj("if else repeat while function for"),o=/[+\-*\/^<>=!&|~$:]/;return{startState:function(){return{tokenize:tokenBase,ctx:{type:"top",indent:-t.indentUnit,flags:2},indent:0,afterIdent:!1}},token:function(t,n){if(t.sol()&&(0==(3&n.ctx.flags)&&(n.ctx.flags|=2),4&n.ctx.flags&&pop(n),n.indent=t.indentation()),t.eatSpace())return null;var r=n.tokenize(t,n);return"comment"!=r&&0==(2&n.ctx.flags)&&setFlag(n,1),";"!=e&&"{"!=e&&"}"!=e||"block"!=n.ctx.type||pop(n),"{"==e?push(n,"}",t):"("==e?(push(n,")",t),n.afterIdent&&(n.ctx.argList=!0)):"["==e?push(n,"]",t):"block"==e?push(n,"block",t):e==n.ctx.type?pop(n):"block"==n.ctx.type&&"comment"!=r&&setFlag(n,4),n.afterIdent="variable"==r||"keyword"==r,r},indent:function(e,n){if(e.tokenize!=tokenBase)return 0;var r=n&&n.charAt(0),a=e.ctx,i=r==a.type;return 4&a.flags&&(a=a.prev),"block"==a.type?a.indent+("{"==r?0:t.indentUnit):1&a.flags?a.column+(i?0:1):a.indent+(i?0:t.indentUnit)},lineComment:"#"}}),t.defineMIME("text/x-rsrc","r")})}});