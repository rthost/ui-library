webpackJsonp([72],{905:function(e,t,n){!function(e){e(n(820))}(function(e){"use strict";e.defineMode("pascal",function(){function tokenComment(e,t){for(var n,r=!1;n=e.next();){if(")"==n&&r){t.tokenize=null;break}r="*"==n}return"comment"}var e=function words(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}("and array begin case const div do downto else end file for forward integer boolean char function goto if in label mod nil not of or packed procedure program record repeat set string then to type until var while with"),t={null:!0},n=/[+\-*&%=<>!?|\/]/;return{startState:function(){return{tokenize:null}},token:function(r,o){if(r.eatSpace())return null;var i=(o.tokenize||function tokenBase(r,o){var i=r.next();if("#"==i&&o.startOfLine)return r.skipToEnd(),"meta";if('"'==i||"'"==i)return o.tokenize=function tokenString(e){return function(t,n){for(var r,o=!1,i=!1;null!=(r=t.next());){if(r==e&&!o){i=!0;break}o=!o&&"\\"==r}return!i&&o||(n.tokenize=null),"string"}}(i),o.tokenize(r,o);if("("==i&&r.eat("*"))return o.tokenize=tokenComment,tokenComment(r,o);if(/[\[\]{}\(\),;\:\.]/.test(i))return null;if(/\d/.test(i))return r.eatWhile(/[\w\.]/),"number";if("/"==i&&r.eat("/"))return r.skipToEnd(),"comment";if(n.test(i))return r.eatWhile(n),"operator";r.eatWhile(/[\w\$_]/);var a=r.current();return e.propertyIsEnumerable(a)?"keyword":t.propertyIsEnumerable(a)?"atom":"variable"})(r,o);return i},electricChars:"{}"}}),e.defineMIME("text/x-pascal","pascal")})}});