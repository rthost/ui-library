webpackJsonp([119],{854:function(e,t,n){!function(e){e(n(820))}(function(e){"use strict";e.defineMode("asterisk",function(){var e=["exten","same","include","ignorepat","switch"],t=["#include","#exec"],n=["addqueuemember","adsiprog","aelsub","agentlogin","agentmonitoroutgoing","agi","alarmreceiver","amd","answer","authenticate","background","backgrounddetect","bridge","busy","callcompletioncancel","callcompletionrequest","celgenuserevent","changemonitor","chanisavail","channelredirect","chanspy","clearhash","confbridge","congestion","continuewhile","controlplayback","dahdiacceptr2call","dahdibarge","dahdiras","dahdiscan","dahdisendcallreroutingfacility","dahdisendkeypadfacility","datetime","dbdel","dbdeltree","deadagi","dial","dictate","directory","disa","dumpchan","eagi","echo","endwhile","exec","execif","execiftime","exitwhile","extenspy","externalivr","festival","flash","followme","forkcdr","getcpeid","gosub","gosubif","goto","gotoif","gotoiftime","hangup","iax2provision","ices","importvar","incomplete","ivrdemo","jabberjoin","jabberleave","jabbersend","jabbersendgroup","jabberstatus","jack","log","macro","macroexclusive","macroexit","macroif","mailboxexists","meetme","meetmeadmin","meetmechanneladmin","meetmecount","milliwatt","minivmaccmess","minivmdelete","minivmgreet","minivmmwi","minivmnotify","minivmrecord","mixmonitor","monitor","morsecode","mp3player","mset","musiconhold","nbscat","nocdr","noop","odbc","odbc","odbcfinish","originate","ospauth","ospfinish","osplookup","ospnext","page","park","parkandannounce","parkedcall","pausemonitor","pausequeuemember","pickup","pickupchan","playback","playtones","privacymanager","proceeding","progress","queue","queuelog","raiseexception","read","readexten","readfile","receivefax","receivefax","receivefax","record","removequeuemember","resetcdr","retrydial","return","ringing","sayalpha","saycountedadj","saycountednoun","saycountpl","saydigits","saynumber","sayphonetic","sayunixtime","senddtmf","sendfax","sendfax","sendfax","sendimage","sendtext","sendurl","set","setamaflags","setcallerpres","setmusiconhold","sipaddheader","sipdtmfmode","sipremoveheader","skel","slastation","slatrunk","sms","softhangup","speechactivategrammar","speechbackground","speechcreate","speechdeactivategrammar","speechdestroy","speechloadgrammar","speechprocessingsound","speechstart","speechunloadgrammar","stackpop","startmusiconhold","stopmixmonitor","stopmonitor","stopmusiconhold","stopplaytones","system","testclient","testserver","transfer","tryexec","trysystem","unpausemonitor","unpausequeuemember","userevent","verbose","vmauthenticate","vmsayname","voicemail","voicemailmain","wait","waitexten","waitfornoise","waitforring","waitforsilence","waitmusiconhold","waituntil","while","zapateller"];return{startState:function(){return{extenStart:!1,extenSame:!1,extenInclude:!1,extenExten:!1,extenPriority:!1,extenApplication:!1}},token:function(a,i){var r="";return a.eatSpace()?null:i.extenStart?(a.eatWhile(/[^\s]/),r=a.current(),/^=>?$/.test(r)?(i.extenExten=!0,i.extenStart=!1,"strong"):(i.extenStart=!1,a.skipToEnd(),"error")):i.extenExten?(i.extenExten=!1,i.extenPriority=!0,a.eatWhile(/[^,]/),i.extenInclude&&(a.skipToEnd(),i.extenPriority=!1,i.extenInclude=!1),i.extenSame&&(i.extenPriority=!1,i.extenSame=!1,i.extenApplication=!0),"tag"):i.extenPriority?(i.extenPriority=!1,i.extenApplication=!0,a.next(),i.extenSame?null:(a.eatWhile(/[^,]/),"number")):i.extenApplication?(a.eatWhile(/,/),","===(r=a.current())?null:(a.eatWhile(/\w/),r=a.current().toLowerCase(),i.extenApplication=!1,-1!==n.indexOf(r)?"def strong":null)):function basicToken(n,a){var i="",r=n.next();if(";"==r)return n.skipToEnd(),"comment";if("["==r)return n.skipTo("]"),n.eat("]"),"header";if('"'==r)return n.skipTo('"'),"string";if("'"==r)return n.skipTo("'"),"string-2";if("#"==r&&(n.eatWhile(/\w/),i=n.current(),-1!==t.indexOf(i)))return n.skipToEnd(),"strong";if("$"==r&&"{"==n.peek())return n.skipTo("}"),n.eat("}"),"variable-3";if(n.eatWhile(/\w/),i=n.current(),-1!==e.indexOf(i)){switch(a.extenStart=!0,i){case"same":a.extenSame=!0;break;case"include":case"switch":case"ignorepat":a.extenInclude=!0}return"atom"}}(a,i)}}}),e.defineMIME("text/x-asterisk","asterisk")})}});