webpackJsonp([100],{960:function(e,t,r){!function(e){e(r(907))}(function(e){"use strict";e.defineMIME("text/x-erlang","erlang"),e.defineMode("erlang",function(t){function nongreedy(e,t,r){if(1==e.current().length&&t.test(e.current())){for(e.backUp(1);t.test(e.peek());)if(e.next(),is_member(e.current(),r))return!0;e.backUp(e.current().length-1)}return!1}function greedy(e,t,r){if(1==e.current().length&&t.test(e.current())){for(;t.test(e.peek());)e.next();for(;0<e.current().length;){if(is_member(e.current(),r))return!0;e.backUp(1)}e.next()}return!1}function doubleQuote(e){return quote(e,'"',"\\")}function singleQuote(e){return quote(e,"'","\\")}function quote(e,t,r){for(;!e.eol();){var n=e.next();if(n==t)return!0;n==r&&e.next()}return!1}function is_member(e,t){return-1<t.indexOf(e)}function rval(e,t,r){switch(function pushToken(e,t){"comment"!=t.type&&"whitespace"!=t.type&&(e.tokenStack=function maybe_drop_pre(e,t){var r=e.length-1;0<r&&"record"===e[r].type&&"dot"===t.type?e.pop():0<r&&"group"===e[r].type?(e.pop(),e.push(t)):e.push(t);return e}(e.tokenStack,t),e.tokenStack=function maybe_drop_post(e){if(!e.length)return e;var t=e.length-1;if("dot"===e[t].type)return[];if(t>1&&"fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1);switch(e[t].token){case"}":return d(e,{g:["{"]});case"]":return d(e,{i:["["]});case")":return d(e,{i:["("]});case">>":return d(e,{i:["<<"]});case"end":return d(e,{i:["begin","case","fun","if","receive","try"]});case",":return d(e,{e:["begin","try","when","->",",","(","[","{","<<"]});case"->":return d(e,{r:["when"],m:["try","if","case","receive"]});case";":return d(e,{E:["case","fun","if","receive","try","when"]});case"catch":return d(e,{e:["try"]});case"of":return d(e,{e:["case"]});case"after":return d(e,{e:["receive","try"]});default:return e}}(e.tokenStack))}(e,function realToken(e,t){return aToken(t.current(),t.column(),t.indentation(),e)}(r,t)),r){case"atom":return"atom";case"attribute":return"attribute";case"boolean":return"atom";case"builtin":return"builtin";case"close_paren":case"colon":return null;case"comment":return"comment";case"dot":return null;case"error":return"error";case"fun":return"meta";case"function":return"tag";case"guard":return"property";case"keyword":return"keyword";case"macro":return"variable-2";case"number":return"number";case"open_paren":return null;case"operator":return"operator";case"record":return"bracket";case"separator":return null;case"string":return"string";case"type":return"def";case"variable":return"variable";default:return null}}function aToken(e,t,r,n){return{token:e,column:t,indent:r,type:n}}function fakeToken(e){return aToken(e,0,0,e)}function peekToken(e,t){var r=e.tokenStack.length,n=t||1;return!(r<n)&&e.tokenStack[r-n]}function d(e,t){for(var r in t)for(var n=e.length-1,o=t[r],a=n-1;-1<a;a--)if(is_member(e[a].token,o)){var i=e.slice(0,a);switch(r){case"m":return i.concat(e[a]).concat(e[n]);case"r":return i.concat(e[n]);case"i":return i;case"g":return i.concat(fakeToken("group"));case"E":case"e":return i.concat(e[a])}}return"E"==r?[]:e}function indenter(r,n){var o,a=t.indentUnit,i=function wordafter(e){var t=e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);return truthy(t)&&0===t.index?t[0]:""}(n),u=peekToken(r,1),c=peekToken(r,2);return r.in_string||r.in_atom?e.Pass:c?"when"==u.token?u.column+a:"when"===i&&"function"===c.type?c.indent+a:"("===i&&"fun"===u.token?u.column+3:"catch"===i&&(o=getToken(r,["try"]))?o.column:is_member(i,["end","after","of"])?(o=getToken(r,["begin","case","fun","if","receive","try"]))?o.column:e.Pass:is_member(i,f)?(o=getToken(r,l))?o.column:e.Pass:is_member(u.token,[",","|","||"])||is_member(i,[",","|","||"])?(o=function postcommaToken(e){var t=e.tokenStack.slice(0,-1),r=getTokenIndex(t,"type",["open_paren"]);return!!truthy(t[r])&&t[r]}(r))?o.column+o.token.length:a:"->"==u.token?is_member(c.token,["receive","case","if","try"])?c.column+a+a:c.column+a:is_member(u.token,l)?u.column+u.token.length:(o=function defaultToken(e){var t=e.tokenStack,r=getTokenIndex(t,"type",["open_paren","separator","keyword"]),n=getTokenIndex(t,"type",["operator"]);return truthy(r)&&truthy(n)&&r<n?t[r+1]:!!truthy(r)&&t[r]}(r),truthy(o)?o.column+a:0):0}function getToken(e,t){var r=e.tokenStack,n=getTokenIndex(r,"token",t);return!!truthy(r[n])&&r[n]}function getTokenIndex(e,t,r){for(var n=e.length-1;-1<n;n--)if(is_member(e[n][t],r))return n;return!1}function truthy(e){return!1!==e&&null!=e}var r=["-type","-spec","-export_type","-opaque"],n=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],o=/[\->,;]/,a=["->",";",","],i=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],u=/[\+\-\*\/<>=\|:!]/,c=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],s=/[<\(\[\{]/,l=["<<","(","[","{"],_=/[>\)\]\}]/,f=["}","]",")",">>"],m=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],p=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],k=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,b=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;return{startState:function(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:function(e,t){return function tokenizer(e,t){if(t.in_string)return t.in_string=!doubleQuote(e),rval(t,e,"string");if(t.in_atom)return t.in_atom=!singleQuote(e),rval(t,e,"atom");if(e.eatSpace())return rval(t,e,"whitespace");if(!peekToken(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return is_member(e.current(),r)?rval(t,e,"type"):rval(t,e,"attribute");var d=e.next();if("%"==d)return e.skipToEnd(),rval(t,e,"comment");if(":"==d)return rval(t,e,"colon");if("?"==d)return e.eatSpace(),e.eatWhile(k),rval(t,e,"macro");if("#"==d)return e.eatSpace(),e.eatWhile(k),rval(t,e,"record");if("$"==d)return"\\"!=e.next()||e.match(b)?rval(t,e,"number"):rval(t,e,"error");if("."==d)return rval(t,e,"dot");if("'"==d){if(!(t.in_atom=!singleQuote(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),rval(t,e,"fun");if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return rval(t,e,"function")}return rval(t,e,"atom")}if('"'==d)return t.in_string=!doubleQuote(e),rval(t,e,"string");if(/[A-Z_Ø-ÞÀ-Ö]/.test(d))return e.eatWhile(k),rval(t,e,"variable");if(/[a-z_ß-öø-ÿ]/.test(d)){if(e.eatWhile(k),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),rval(t,e,"fun");var g=e.current();return is_member(g,n)?rval(t,e,"keyword"):is_member(g,i)?rval(t,e,"operator"):e.match(/\s*\(/,!1)?!is_member(g,p)||":"==peekToken(t).token&&"erlang"!=peekToken(t,2).token?is_member(g,m)?rval(t,e,"guard"):rval(t,e,"function"):rval(t,e,"builtin"):":"==function lookahead(e){var t=e.match(/([\n\s]+|%[^\n]*\n)*(.)/,!1);return t?t.pop():""}(e)?rval(t,e,"erlang"==g?"builtin":"function"):is_member(g,["true","false"])?rval(t,e,"boolean"):rval(t,e,"atom")}var v=/[0-9]/,h=/[0-9a-zA-Z]/;return v.test(d)?(e.eatWhile(v),e.eat("#")?e.eatWhile(h)||e.backUp(1):e.eat(".")&&(e.eatWhile(v)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(v)||e.backUp(2):e.eatWhile(v)||e.backUp(1)):e.backUp(1)),rval(t,e,"number")):nongreedy(e,s,l)?rval(t,e,"open_paren"):nongreedy(e,_,f)?rval(t,e,"close_paren"):greedy(e,o,a)?rval(t,e,"separator"):greedy(e,u,c)?rval(t,e,"operator"):rval(t,e,null)}(e,t)},indent:function(e,t){return indenter(e,t)},lineComment:"%"}})})}});