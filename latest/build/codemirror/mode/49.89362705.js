webpackJsonp([84],{892:function(e,t,n){!function(e){e(n(820))}(function(e){"use strict";e.defineMode("lua",function(e,t){function wordRE(e){return new RegExp("^(?:"+e.join("|")+")$","i")}function readBracket(e){for(var t=0;e.eat("=");)++t;return e.eat("["),t}function normal(e,t){var n=e.next();return"-"==n&&e.eat("-")?e.eat("[")&&e.eat("[")?(t.cur=bracketed(readBracket(e),"comment"))(e,t):(e.skipToEnd(),"comment"):'"'==n||"'"==n?(t.cur=function string(e){return function(t,n){for(var a,r=!1;null!=(a=t.next())&&(a!=e||r);)r=!r&&"\\"==a;return r||(n.cur=normal),"string"}}(n))(e,t):"["==n&&/[\[=]/.test(e.peek())?(t.cur=bracketed(readBracket(e),"string"))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),"number"):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),"variable"):null}function bracketed(e,t){return function(n,a){for(var r,o=null;null!=(r=n.next());)if(null==o)"]"==r&&(o=0);else if("="==r)++o;else{if("]"==r&&o==e){a.cur=normal;break}o=null}return t}}var n=e.indentUnit,a=wordRE(t.specials||[]),r=wordRE(["_G","_VERSION","assert","collectgarbage","dofile","error","getfenv","getmetatable","ipairs","load","loadfile","loadstring","module","next","pairs","pcall","print","rawequal","rawget","rawset","require","select","setfenv","setmetatable","tonumber","tostring","type","unpack","xpcall","coroutine.create","coroutine.resume","coroutine.running","coroutine.status","coroutine.wrap","coroutine.yield","debug.debug","debug.getfenv","debug.gethook","debug.getinfo","debug.getlocal","debug.getmetatable","debug.getregistry","debug.getupvalue","debug.setfenv","debug.sethook","debug.setlocal","debug.setmetatable","debug.setupvalue","debug.traceback","close","flush","lines","read","seek","setvbuf","write","io.close","io.flush","io.input","io.lines","io.open","io.output","io.popen","io.read","io.stderr","io.stdin","io.stdout","io.tmpfile","io.type","io.write","math.abs","math.acos","math.asin","math.atan","math.atan2","math.ceil","math.cos","math.cosh","math.deg","math.exp","math.floor","math.fmod","math.frexp","math.huge","math.ldexp","math.log","math.log10","math.max","math.min","math.modf","math.pi","math.pow","math.rad","math.random","math.randomseed","math.sin","math.sinh","math.sqrt","math.tan","math.tanh","os.clock","os.date","os.difftime","os.execute","os.exit","os.getenv","os.remove","os.rename","os.setlocale","os.time","os.tmpname","package.cpath","package.loaded","package.loaders","package.loadlib","package.path","package.preload","package.seeall","string.byte","string.char","string.dump","string.find","string.format","string.gmatch","string.gsub","string.len","string.lower","string.match","string.rep","string.reverse","string.sub","string.upper","table.concat","table.insert","table.maxn","table.remove","table.sort"]),o=wordRE(["and","break","elseif","false","nil","not","or","return","true","function","end","if","then","else","do","while","repeat","until","for","in","local"]),i=wordRE(["function","if","repeat","do","\\(","{"]),u=wordRE(["end","until","\\)","}"]),l=function prefixRE(e){return new RegExp("^(?:"+e.join("|")+")","i")}(["end","until","\\)","}","else","elseif"]);return{startState:function(e){return{basecol:e||0,indentDepth:0,cur:normal}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),l=e.current();return"variable"==n&&(o.test(l)?n="keyword":r.test(l)?n="builtin":a.test(l)&&(n="variable-2")),"comment"!=n&&"string"!=n&&(i.test(l)?++t.indentDepth:u.test(l)&&--t.indentDepth),n},indent:function(e,t){var a=l.test(t);return e.basecol+n*(e.indentDepth-(a?1:0))},lineComment:"--",blockCommentStart:"--[[",blockCommentEnd:"]]"}}),e.defineMIME("text/x-lua","lua")})}});