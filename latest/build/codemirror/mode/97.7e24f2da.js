webpackJsonp([47],{932:function(e,t,r){!function(e){e(r(820))}(function(e){"use strict";e.defineMode("tcl",function(){function parseWords(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}function chain(e,t,r){return t.tokenize=r,r(e,t)}function tokenBase(n,a){var o=a.beforeParams;a.beforeParams=!1;var i=n.next();if('"'!=i&&"'"!=i||!a.inParams){if(/[\[\]{}\(\),;\.]/.test(i))return"("==i&&o?a.inParams=!0:")"==i&&(a.inParams=!1),null;if(/\d/.test(i))return n.eatWhile(/[\w\.]/),"number";if("#"==i)return n.eat("*")?chain(n,a,tokenComment):"#"==i&&n.match(/ *\[ *\[/)?chain(n,a,tokenUnparsed):(n.skipToEnd(),"comment");if('"'==i)return n.skipTo(/"/),"comment";if("$"==i)return n.eatWhile(/[$_a-z0-9A-Z\.{:]/),n.eatWhile(/}/),a.beforeParams=!0,"builtin";if(r.test(i))return n.eatWhile(r),"comment";n.eatWhile(/[\w\$_{}\xa1-\uffff]/);var s=n.current().toLowerCase();return e&&e.propertyIsEnumerable(s)?"keyword":t&&t.propertyIsEnumerable(s)?(a.beforeParams=!0,"keyword"):null}return chain(n,a,function tokenString(e){return function(t,r){for(var n,a=!1,o=!1;null!=(n=t.next());){if(n==e&&!a){o=!0;break}a=!a&&"\\"==n}return o&&(r.tokenize=tokenBase),"string"}}(i))}function tokenComment(e,t){for(var r,n=!1;r=e.next();){if("#"==r&&n){t.tokenize=tokenBase;break}n="*"==r}return"comment"}function tokenUnparsed(e,t){for(var r,n=0;r=e.next();){if("#"==r&&2==n){t.tokenize=tokenBase;break}"]"==r?n++:" "!=r&&(n=0)}return"meta"}var e=parseWords("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),t=parseWords("if elseif else and not or eq ne in ni for foreach while switch"),r=/[+\-*&%=<>!?^\/\|]/;return{startState:function(){return{tokenize:tokenBase,beforeParams:!1,inParams:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),e.defineMIME("text/x-tcl","tcl")})}});