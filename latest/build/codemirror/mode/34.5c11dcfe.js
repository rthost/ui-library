webpackJsonp([93],{882:function(t,e,n){!function(t){t(n(820))}(function(t){"use strict";t.defineMode("groovy",function(e){function words(t){for(var e={},n=t.split(" "),r=0;r<n.length;++r)e[n[r]]=!0;return e}function tokenBase(t,e){var s=t.next();if('"'==s||"'"==s)return startString(s,t,e);if(/[\[\]{}\(\),;\:\.]/.test(s))return n=s,null;if(/\d/.test(s))return t.eatWhile(/[\w\.]/),t.eat(/eE/)&&(t.eat(/\+\-/),t.eatWhile(/\d/)),"number";if("/"==s){if(t.eat("*"))return e.tokenize.push(tokenComment),tokenComment(t,e);if(t.eat("/"))return t.skipToEnd(),"comment";if(expectExpression(e.lastToken,!1))return startString(s,t,e)}if("-"==s&&t.eat(">"))return n="->",null;if(/[+\-*&%=<>!?|\/~]/.test(s))return t.eatWhile(/[+\-*&%=<>|~]/),"operator";if(t.eatWhile(/[\w\$_]/),"@"==s)return t.eatWhile(/[\w\$_\.]/),"meta";if("."==e.lastToken)return"property";if(t.eat(":"))return n="proplabel","property";var l=t.current();return a.propertyIsEnumerable(l)?"atom":r.propertyIsEnumerable(l)?(o.propertyIsEnumerable(l)?n="newstatement":i.propertyIsEnumerable(l)&&(n="standalone"),"keyword"):"variable"}function startString(e,n,r){function t(t,n){for(var r,i=!1,a=!o;null!=(r=t.next());){if(r==e&&!i){if(!o)break;if(t.match(e+e)){a=!0;break}}if('"'==e&&"$"==r&&!i&&t.eat("{"))return n.tokenize.push(function tokenBaseUntilBrace(){function t(t,n){if("}"==t.peek()){if(0==--e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++;return tokenBase(t,n)}var e=1;return t.isBase=!0,t}()),"string";i=!i&&"\\"==r}return a&&n.tokenize.pop(),"string"}var o=!1;if("/"!=e&&n.eat(e)){if(!n.eat(e))return"string";o=!0}return r.tokenize.push(t),t(n,r)}function tokenComment(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize.pop();break}r="*"==n}return"comment"}function expectExpression(t,e){return!t||"operator"==t||"->"==t||/[\.\[\{\(,;:]/.test(t)||"newstatement"==t||"keyword"==t||"proplabel"==t||"standalone"==t&&!e}function Context(t,e,n,r,o){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=o}function pushContext(t,e,n){return t.context=new Context(t.indented,e,n,null,t.context)}function popContext(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}var n,r=words("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),o=words("catch class def do else enum finally for if interface switch trait try while"),i=words("return break continue"),a=words("null true false this");return tokenBase.isBase=!0,{startState:function(t){return{tokenize:[tokenBase],context:new Context((t||0)-e.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(t,e){var r=e.context;if(t.sol()&&(null==r.align&&(r.align=!1),e.indented=t.indentation(),e.startOfLine=!0,"statement"!=r.type||expectExpression(e.lastToken,!0)||(popContext(e),r=e.context)),t.eatSpace())return null;n=null;var o=e.tokenize[e.tokenize.length-1](t,e);if("comment"==o)return o;if(null==r.align&&(r.align=!0),";"!=n&&":"!=n||"statement"!=r.type)if("->"==n&&"statement"==r.type&&"}"==r.prev.type)popContext(e),e.context.align=!1;else if("{"==n)pushContext(e,t.column(),"}");else if("["==n)pushContext(e,t.column(),"]");else if("("==n)pushContext(e,t.column(),")");else if("}"==n){for(;"statement"==r.type;)r=popContext(e);for("}"==r.type&&(r=popContext(e));"statement"==r.type;)r=popContext(e)}else n==r.type?popContext(e):("}"==r.type||"top"==r.type||"statement"==r.type&&"newstatement"==n)&&pushContext(e,t.column(),"statement");else popContext(e);return e.startOfLine=!1,e.lastToken=n||o,o},indent:function(n,r){if(!n.tokenize[n.tokenize.length-1].isBase)return t.Pass;var o=r&&r.charAt(0),i=n.context;"statement"!=i.type||expectExpression(n.lastToken,!0)||(i=i.prev);var a=o==i.type;return"statement"==i.type?i.indented+("{"==o?0:e.indentUnit):i.align?i.column+(a?0:1):i.indented+(a?0:e.indentUnit)},electricChars:"{}",closeBrackets:{triples:"'\""},fold:"brace"}}),t.defineMIME("text/x-groovy","groovy")})}});