webpackJsonp([58],{1013:function(e,t,n){!function(e){e(n(915))}(function(e){"use strict";e.defineMode("shell",function(){function define(t,n){for(var i=n.split(" "),r=0;r<i.length;r++)e[i[r]]=t}function tokenBase(n,i){if(n.eatSpace())return null;var r=n.sol(),o=n.next();if("\\"===o)return n.next(),null;if("'"===o||'"'===o||"`"===o)return i.tokens.unshift(tokenString(o,"`"===o?"quote":"string")),tokenize(n,i);if("#"===o)return r&&n.eat("!")?(n.skipToEnd(),"meta"):(n.skipToEnd(),"comment");if("$"===o)return i.tokens.unshift(t),tokenize(n,i);if("+"===o||"="===o)return"operator";if("-"===o)return n.eat("-"),n.eatWhile(/\w/),"attribute";if(/\d/.test(o)&&(n.eatWhile(/\d/),n.eol()||!/\w/.test(n.peek())))return"number";n.eatWhile(/[\w-]/);var s=n.current();return"="===n.peek()&&/\w+/.test(s)?"def":e.hasOwnProperty(s)?e[s]:null}function tokenString(e,n){var i="("==e?")":"{"==e?"}":e;return function(r,o){for(var s,u=!1,f=!1;null!=(s=r.next());){if(s===i&&!f){u=!0;break}if("$"===s&&!f&&"'"!==e){f=!0,r.backUp(1),o.tokens.unshift(t);break}if(!f&&s===e&&e!==i)return o.tokens.unshift(tokenString(e,n)),tokenize(r,o);f=!f&&"\\"===s}return u&&o.tokens.shift(),n}}function tokenize(e,t){return(t.tokens[0]||tokenBase)(e,t)}var e={};define("atom","true false"),define("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function"),define("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep hg kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo svn tee telnet top touch vi vim wall wc wget who write yes zsh");var t=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=tokenString(n,"("==n?"quote":"{"==n?"def":"string"),tokenize(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")};return{startState:function(){return{tokens:[]}},token:function(e,t){return tokenize(e,t)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}}),e.defineMIME("text/x-sh","shell"),e.defineMIME("application/x-sh","shell")})}});