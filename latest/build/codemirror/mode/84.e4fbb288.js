webpackJsonp([58],{921:function(e,t,n){!function(e){e(n(820))}(function(e){"use strict";e.defineMode("shell",function(){function define(t,n){for(var r=n.split(" "),i=0;i<r.length;i++)e[r[i]]=t}function tokenString(e,n){var r="("==e?")":"{"==e?"}":e;return function(i,o){for(var s,u=!1;null!=(s=i.next());){if(s===r&&!u){o.tokens.shift();break}if("$"===s&&!u&&"'"!==e&&i.peek()!=r){u=!0,i.backUp(1),o.tokens.unshift(t);break}if(!u&&e!==r&&s===e)return o.tokens.unshift(tokenString(e,n)),tokenize(i,o);if(!u&&/['"]/.test(s)&&!/['"]/.test(e)){o.tokens.unshift(function tokenStringStart(e,t){return function(n,r){return r.tokens[0]=tokenString(e,t),n.next(),tokenize(n,r)}}(s,"string")),i.backUp(1);break}u=!u&&"\\"===s}return n}}function tokenize(n,r){return(r.tokens[0]||function tokenBase(n,r){if(n.eatSpace())return null;var i=n.sol(),o=n.next();if("\\"===o)return n.next(),null;if("'"===o||'"'===o||"`"===o)return r.tokens.unshift(tokenString(o,"`"===o?"quote":"string")),tokenize(n,r);if("#"===o)return i&&n.eat("!")?(n.skipToEnd(),"meta"):(n.skipToEnd(),"comment");if("$"===o)return r.tokens.unshift(t),tokenize(n,r);if("+"===o||"="===o)return"operator";if("-"===o)return n.eat("-"),n.eatWhile(/\w/),"attribute";if(/\d/.test(o)&&(n.eatWhile(/\d/),n.eol()||!/\w/.test(n.peek())))return"number";n.eatWhile(/[\w-]/);var s=n.current();return"="===n.peek()&&/\w+/.test(s)?"def":e.hasOwnProperty(s)?e[s]:null})(n,r)}var e={};define("atom","true false"),define("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function"),define("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep hg kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo svn tee telnet top touch vi vim wall wc wget who write yes zsh");var t=function(e,t){t.tokens.length>1&&e.eat("$");var n=e.next();return/['"({]/.test(n)?(t.tokens[0]=tokenString(n,"("==n?"quote":"{"==n?"def":"string"),tokenize(e,t)):(/\d/.test(n)||e.eatWhile(/\w/),t.tokens.shift(),"def")};return{startState:function(){return{tokens:[]}},token:function(e,t){return tokenize(e,t)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}}),e.defineMIME("text/x-sh","shell"),e.defineMIME("application/x-sh","shell")})}});