webpackJsonp([101],{962:function(t,e,r){(function(t){"use strict";t.defineMode("elm",function(){function switchState(t,e,r){return e(r),r(t,e)}var t=/[a-z_]/,e=/[A-Z]/,r=/[0-9]/,n=/[0-9A-Fa-f]/,i=/[0-7]/,a=/[a-z_A-Z0-9\']/,u=/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]/,o=/[(),;[\]`{}]/,f=/[ \t\v\f]/;function normal(){return function(l,s){if(l.eatWhile(f))return null;var c=l.next();if(o.test(c)){if("{"==c&&l.eat("-")){var m="comment";return l.eat("#")&&(m="meta"),switchState(l,s,function ncomment(t,e){if(0==e)return normal();return function(r,n){for(var i=e;!r.eol();){var a=r.next();if("{"==a&&r.eat("-"))++i;else if("-"==a&&r.eat("}")&&0==--i)return n(normal()),t}return n(ncomment(t,i)),t}}(m,1))}return null}if("'"==c)return l.eat("\\"),l.next(),l.eat("'")?"string":"error";if('"'==c)return switchState(l,s,stringLiteral);if(e.test(c))return l.eatWhile(a),l.eat(".")?"qualifier":"variable-2";if(t.test(c)){var h=1===l.pos;return l.eatWhile(a),h?"type":"variable"}if(r.test(c)){if("0"==c){if(l.eat(/[xX]/))return l.eatWhile(n),"integer";if(l.eat(/[oO]/))return l.eatWhile(i),"number"}l.eatWhile(r);m="number";return l.eat(".")&&(m="number",l.eatWhile(r)),l.eat(/[eE]/)&&(m="number",l.eat(/[-+]/),l.eatWhile(r)),m}return u.test(c)?"-"==c&&l.eat(/-/)&&(l.eatWhile(/-/),!l.eat(u))?(l.skipToEnd(),"comment"):(l.eatWhile(u),"builtin"):"error"}}function stringLiteral(t,e){for(;!t.eol();){var r=t.next();if('"'==r)return e(normal()),"string";if("\\"==r){if(t.eol()||t.eat(f))return e(stringGap),"string";t.eat("&")||t.next()}}return e(normal()),"error"}function stringGap(t,e){return t.eat("\\")?switchState(t,e,stringLiteral):(t.next(),e(normal()),"error")}var l=function(){for(var t={},e=["case","of","as","if","then","else","let","in","infix","infixl","infixr","type","alias","input","output","foreign","loopback","module","where","import","exposing","_","..","|",":","=","\\",'"',"->","<-"],r=e.length;r--;)t[e[r]]="keyword";return t}();return{startState:function(){return{f:normal()}},copyState:function(t){return{f:t.f}},token:function(t,e){var r=e.f(t,function(t){e.f=t}),n=t.current();return l.hasOwnProperty(n)?l[n]:r}}}),t.defineMIME("text/x-elm","elm")})(r(871))}});