webpackJsonp([37],{944:function(e,t,n){!function(e){e(n(820))}(function(e){"use strict";e.defineMode("vbscript",function(e,t){function wordRegexp(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}function indent(e,t){t.currentIndent++}function dedent(e,t){t.currentIndent--}function tokenBase(e,b){if(e.eatSpace())return"space";if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(L))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var d=!1;if(e.match(/^\d*\.\d+/i)?d=!0:e.match(/^\d+\.\d*/)?d=!0:e.match(/^\.\d+/)&&(d=!0),d)return e.eat(/J/i),"number";var l=!1;if(e.match(/^&H[0-9a-f]+/i)?l=!0:e.match(/^&O[0-7]+/i)?l=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),l=!0):e.match(/^0(?![\dx])/i)&&(l=!0),l)return e.eat(/L/i),"number"}return e.match(y)?(b.tokenize=function tokenStringFactory(e){var r=1==e.length;return function(a,i){for(;!a.eol();){if(a.eatWhile(/[^'"]/),a.match(e))return i.tokenize=tokenBase,"string";a.eat(/['"]/)}if(r){if(t.singleLineStringErrors)return n;i.tokenize=tokenBase}return"string"}}(e.current()),b.tokenize(e,b)):e.match(a)||e.match(r)||e.match(s)?"operator":e.match(i)?null:e.match(o)?"bracket":e.match(C)?(b.doInCurrentLine=!0,"keyword"):e.match(I)?(indent(0,b),b.doInCurrentLine=!0,"keyword"):e.match(x)?(b.doInCurrentLine?b.doInCurrentLine=!1:indent(0,b),"keyword"):e.match(w)?"keyword":e.match(R)?(dedent(0,b),dedent(0,b),"keyword"):e.match(k)?(b.doInCurrentLine?b.doInCurrentLine=!1:dedent(0,b),"keyword"):e.match(m)?"keyword":e.match(p)?"atom":e.match(h)?"variable-2":e.match(g)?"builtin":e.match(f)?"variable-2":e.match(c)?"variable":(e.next(),n)}var n="error",r=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),a=new RegExp("^((<>)|(<=)|(>=))"),i=new RegExp("^[\\.,]"),o=new RegExp("^[\\(\\)]"),c=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),s=wordRegexp(["and","or","not","xor","is","mod","eqv","imp"]),b=["WScript","err","debug","RegExp"],d=["server","response","request","session","application"],l=["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"],u=["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],v=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"].concat(["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"]);b=b.concat(["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"]),e.isASP&&(b=b.concat(d),v=v.concat(u,l));var m=wordRegexp(["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"]),p=wordRegexp(["true","false","nothing","empty","null"]),g=wordRegexp(["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"]),f=wordRegexp(b),h=wordRegexp(v),y='"',x=wordRegexp(["class","sub","select","while","if","function","property","with","for"]),w=wordRegexp(["else","elseif","case"]),k=wordRegexp(["next","loop","wend"]),R=wordRegexp(["end"]),I=wordRegexp(["do"]),C=wordRegexp(["on error resume next","exit"]),L=wordRegexp(["rem"]);return{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:tokenBase,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var r=function tokenLexer(e,t){var r=t.tokenize(e,t),a=e.current();return"."===a?(r=t.tokenize(e,t),a=e.current(),!r||"variable"!==r.substr(0,8)&&"builtin"!==r&&"keyword"!==r?n:("builtin"!==r&&"keyword"!==r||(r="variable"),v.indexOf(a.substr(1))>-1&&(r="variable-2"),r)):r}(e,t);return t.lastToken={style:r,content:e.current()},"space"===r&&(r=null),r},indent:function(t,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(k)||r.match(R)||r.match(w)?e.indentUnit*(t.currentIndent-1):t.currentIndent<0?0:t.currentIndent*e.indentUnit}}}),e.defineMIME("text/vbscript","vbscript")})}});