webpackJsonp([50],{907:function(t,e,n){(function(t){"use strict";t.defineMode("stex",function(){function pushCommand(t,e){t.cmdState.push(e)}function peekCommand(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function addPluginPattern(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var t={};function setState(t,e){t.f=e}function normal(e,n){var a;if(e.match(/^\\[a-zA-Z@]+/)){var r=e.current().slice(1);return pushCommand(n,a=new(a=t[r]||t.DEFAULT)),setState(n,beginParams),a.style}if(e.match(/^\\[$&%#{}_]/))return"tag";if(e.match(/^\\[,;!\/\\]/))return"tag";if(e.match("\\["))return setState(n,function(t,e){return inMathMode(t,e,"\\]")}),"keyword";if(e.match("$$"))return setState(n,function(t,e){return inMathMode(t,e,"$$")}),"keyword";if(e.match("$"))return setState(n,function(t,e){return inMathMode(t,e,"$")}),"keyword";var i=e.next();return"%"==i?(e.skipToEnd(),"comment"):"}"==i||"]"==i?(a=peekCommand(n))?(a.closeBracket(i),setState(n,beginParams),"bracket"):"error":"{"==i||"["==i?(pushCommand(n,a=new(a=t.DEFAULT)),"bracket"):/\d/.test(i)?(e.eatWhile(/[\w.%]/),"atom"):(e.eatWhile(/[\w\-_]/),"begin"==(a=function getMostPowerful(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var a=e[n];if("DEFAULT"!=a.name)return a}return{styleIdentifier:function(){return null}}}(n)).name&&(a.argument=e.current()),a.styleIdentifier())}function inMathMode(t,e,n){if(t.eatSpace())return null;if(t.match(n))return setState(e,normal),"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variable-2";if(t.match(/^\\[$&%#{}_]/))return"tag";if(t.match(/^\\[,;!\/]/))return"tag";if(t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var a=t.next();return"{"==a||"}"==a||"["==a||"]"==a||"("==a||")"==a?"bracket":"%"==a?(t.skipToEnd(),"comment"):"error"}function beginParams(t,e){var n=t.peek();return"{"==n||"["==n?(peekCommand(e).openBracket(n),t.eat(n),setState(e,normal),"bracket"):/[ \t\r]/.test(n)?(t.eat(n),null):(setState(e,normal),function popCommand(t){var e=t.cmdState.pop();e&&e.closeBracket()}(e),normal(t,e))}return t.importmodule=addPluginPattern("importmodule","tag",["string","builtin"]),t.documentclass=addPluginPattern("documentclass","tag",["","atom"]),t.usepackage=addPluginPattern("usepackage","tag",["atom"]),t.begin=addPluginPattern("begin","tag",["atom"]),t.end=addPluginPattern("end","tag",["atom"]),t.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{startState:function(){return{cmdState:[],f:normal}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=normal,t.cmdState.length=0},lineComment:"%"}}),t.defineMIME("text/x-stex","stex"),t.defineMIME("text/x-latex","stex")})(n(871))}});