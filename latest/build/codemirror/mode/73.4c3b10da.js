webpackJsonp([66],{913:function(e,n,t){!function(e){e(t(820))}(function(e){"use strict";e.defineMode("puppet",function(){function define(n,t){for(var i=t.split(" "),o=0;o<i.length;o++)e[i[o]]=n}function tokenString(e,n){for(var t,i,o=!1;!e.eol()&&(t=e.next())!=n.pending;){if("$"===t&&"\\"!=i&&'"'==n.pending){o=!0;break}i=t}return o&&e.backUp(1),t==n.pending?n.continueString=!1:n.continueString=!0,"string"}var e={},n=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;return define("keyword","class define site node include import inherits"),define("keyword","case if else in and elsif default or"),define("atom","false true running present absent file directory undef"),define("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool"),{startState:function(){var e={};return e.inDefinition=!1,e.inInclude=!1,e.continueString=!1,e.pending=!1,e},token:function(t,i){return t.eatSpace()?null:function tokenize(t,i){var o=t.match(/[\w]+/,!1),a=t.match(/(\s+)?\w+\s+=>.*/,!1),s=t.match(/(\s+)?[\w:_]+(\s+)?{/,!1),r=t.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),c=t.next();if("$"===c)return t.match(n)?i.continueString?"variable-2":"variable":"error";if(i.continueString)return t.backUp(1),tokenString(t,i);if(i.inDefinition){if(t.match(/(\s+)?[\w:_]+(\s+)?/))return"def";t.match(/\s+{/),i.inDefinition=!1}return i.inInclude?(t.match(/(\s+)?\S+(\s+)?/),i.inInclude=!1,"def"):t.match(/(\s+)?\w+\(/)?(t.backUp(1),"def"):a?(t.match(/(\s+)?\w+/),"tag"):o&&e.hasOwnProperty(o)?(t.backUp(1),t.match(/[\w]+/),t.match(/\s+\S+\s+{/,!1)&&(i.inDefinition=!0),"include"==o&&(i.inInclude=!0),e[o]):/(^|\s+)[A-Z][\w:_]+/.test(o)?(t.backUp(1),t.match(/(^|\s+)[A-Z][\w:_]+/),"def"):s?(t.match(/(\s+)?[\w:_]+/),"def"):r?(t.match(/(\s+)?[@]{1,2}/),"special"):"#"==c?(t.skipToEnd(),"comment"):"'"==c||'"'==c?(i.pending=c,tokenString(t,i)):"{"==c||"}"==c?"bracket":"/"==c?(t.match(/.*?\//),"variable-3"):c.match(/[0-9]/)?(t.eatWhile(/[0-9]+/),"number"):"="==c?(">"==t.peek()&&t.next(),"operator"):(t.eatWhile(/[\w-]/),null)}(t,i)}}}),e.defineMIME("text/x-puppet","puppet")})}});