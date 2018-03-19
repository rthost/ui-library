webpackJsonp([31],{950:function(t,e,n){!function(t){t(n(820))}(function(t){"use strict";t.defineMode("xquery",function(){function chain(t,e,n){return e.tokenize=n,n(t,e)}function tokenBase(e,n){var a=e.next(),r=!1,i=function isEQNameAhead(t){return'"'===t.current()?t.match(/^[^\"]+\"\:/,!1):"'"===t.current()&&t.match(/^[^\"]+\'\:/,!1)}(e);if("<"==a){if(e.match("!--",!0))return chain(e,n,tokenXMLComment);if(e.match("![CDATA",!1))return n.tokenize=tokenCDATA,"tag";if(e.match("?",!1))return chain(e,n,tokenPreProcessing);var o=e.eat("/");e.eatSpace();for(var s,c="";s=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)c+=s;return chain(e,n,function tokenTag(t,e){return function(n,a){return n.eatSpace(),e&&n.eat(">")?(popStateStack(a),a.tokenize=tokenBase,"tag"):(n.eat("/")||pushStateStack(a,{type:"tag",name:t,tokenize:tokenBase}),n.eat(">")?(a.tokenize=tokenBase,"tag"):(a.tokenize=tokenAttribute,"tag"))}}(c,o))}if("{"==a)return pushStateStack(n,{type:"codeblock"}),null;if("}"==a)return popStateStack(n),null;if(isInXmlBlock(n))return">"==a?"tag":"/"==a&&e.eat(">")?(popStateStack(n),"tag"):"variable";if(/\d/.test(a))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===a&&e.eat(":"))return pushStateStack(n,{type:"comment"}),chain(e,n,tokenComment);if(i||'"'!==a&&"'"!==a){if("$"===a)return chain(e,n,tokenVariable);if(":"===a&&e.eat("="))return"keyword";if("("===a)return pushStateStack(n,{type:"paren"}),null;if(")"===a)return popStateStack(n),null;if("["===a)return pushStateStack(n,{type:"bracket"}),null;if("]"===a)return popStateStack(n),null;var u=t.propertyIsEnumerable(a)&&t[a];if(i&&'"'===a)for(;'"'!==e.next(););if(i&&"'"===a)for(;"'"!==e.next(););u||e.eatWhile(/[\w\$_-]/);var l=e.eat(":");!e.eat(":")&&l&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(r=!0);var p=e.current();return u=t.propertyIsEnumerable(p)&&t[p],r&&!u&&(u={type:"function_call",style:"variable def"}),function isInXmlConstructor(t){return isIn(t,"xmlconstructor")}(n)?(popStateStack(n),"variable"):("element"!=p&&"attribute"!=p&&"axis_specifier"!=u.type||pushStateStack(n,{type:"xmlconstructor"}),u?u.style:"variable")}return chain(e,n,tokenString(a))}function tokenComment(t,e){for(var n,a=!1,r=!1,i=0;n=t.next();){if(")"==n&&a){if(!(i>0)){popStateStack(e);break}i--}else":"==n&&r&&i++;a=":"==n,r="("==n}return"comment"}function tokenString(t,e){return function(n,a){var r;if(function isInString(t){return isIn(t,"string")}(a)&&n.current()==t)return popStateStack(a),e&&(a.tokenize=e),"string";if(pushStateStack(a,{type:"string",name:t,tokenize:tokenString(t,e)}),n.match("{",!1)&&isInXmlAttributeBlock(a))return a.tokenize=tokenBase,"string";for(;r=n.next();){if(r==t){popStateStack(a),e&&(a.tokenize=e);break}if(n.match("{",!1)&&isInXmlAttributeBlock(a))return a.tokenize=tokenBase,"string"}return"string"}}function tokenVariable(t,e){var n=/[\w\$_-]/;if(t.eat('"')){for(;'"'!==t.next(););t.eat(":")}else t.eatWhile(n),t.match(":=",!1)||t.eat(":");return t.eatWhile(n),e.tokenize=tokenBase,"variable"}function tokenAttribute(t,e){var n=t.next();return"/"==n&&t.eat(">")?(isInXmlAttributeBlock(e)&&popStateStack(e),isInXmlBlock(e)&&popStateStack(e),"tag"):">"==n?(isInXmlAttributeBlock(e)&&popStateStack(e),"tag"):"="==n?null:'"'==n||"'"==n?chain(t,e,tokenString(n,tokenAttribute)):(isInXmlAttributeBlock(e)||pushStateStack(e,{type:"attribute",tokenize:tokenAttribute}),t.eat(/[a-zA-Z_:]/),t.eatWhile(/[-a-zA-Z0-9_:.]/),t.eatSpace(),(t.match(">",!1)||t.match("/",!1))&&(popStateStack(e),e.tokenize=tokenBase),"attribute")}function tokenXMLComment(t,e){for(var n;n=t.next();)if("-"==n&&t.match("->",!0))return e.tokenize=tokenBase,"comment"}function tokenCDATA(t,e){for(var n;n=t.next();)if("]"==n&&t.match("]",!0))return e.tokenize=tokenBase,"comment"}function tokenPreProcessing(t,e){for(var n;n=t.next();)if("?"==n&&t.match(">",!0))return e.tokenize=tokenBase,"comment meta"}function isInXmlBlock(t){return isIn(t,"tag")}function isInXmlAttributeBlock(t){return isIn(t,"attribute")}function isIn(t,e){return t.stack.length&&t.stack[t.stack.length-1].type==e}function pushStateStack(t,e){t.stack.push(e)}function popStateStack(t){t.stack.pop();var e=t.stack.length&&t.stack[t.stack.length-1].tokenize;t.tokenize=e||tokenBase}var t=function(){function kw(t){return{type:t,style:"keyword"}}for(var t=kw("operator"),e={type:"atom",style:"atom"},n={type:"axis_specifier",style:"qualifier"},a={",":{type:"punctuation",style:null}},r=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],i=0,o=r.length;i<o;i++)a[r[i]]=kw(r[i]);var s=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(i=0,o=s.length;i<o;i++)a[s[i]]=e;var c=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(i=0,o=c.length;i<o;i++)a[c[i]]=t;var u=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(i=0,o=u.length;i<o;i++)a[u[i]]=n;return a}();return{startState:function(){return{tokenize:tokenBase,cc:[],stack:[]}},token:function(t,e){if(t.eatSpace())return null;return e.tokenize(t,e)},blockCommentStart:"(:",blockCommentEnd:":)"}}),t.defineMIME("application/xquery","xquery")})}});