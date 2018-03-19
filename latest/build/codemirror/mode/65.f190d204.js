webpackJsonp([19,88],{821:function(e,t,r){!function(e){e(r(820))}(function(e){"use strict";e.defineMode("javascript",function(t,r){function ret(e,t,r){return n=e,o=r,t}function tokenBase(e,t){var r=e.next();if('"'==r||"'"==r)return t.tokenize=function tokenString(e){return function(t,r){var n,o=!1;if(p&&"@"==t.peek()&&t.match(f))return r.tokenize=tokenBase,ret("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=e||o);)o=!o&&"\\"==n;return o||(r.tokenize=tokenBase),ret("string","string")}}(r),t.tokenize(e,t);if("."==r&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return ret("number","number");if("."==r&&e.match(".."))return ret("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return ret(r);if("="==r&&e.eat(">"))return ret("=>","operator");if("0"==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),ret("number","number");if("0"==r&&e.eat(/o/i))return e.eatWhile(/[0-7]/i),ret("number","number");if("0"==r&&e.eat(/b/i))return e.eatWhile(/[01]/i),ret("number","number");if(/\d/.test(r))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),ret("number","number");if("/"==r)return e.eat("*")?(t.tokenize=tokenComment,tokenComment(e,t)):e.eat("/")?(e.skipToEnd(),ret("comment","comment")):expressionAllowed(e,t,1)?(function readRegexp(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),ret("regexp","string-2")):(e.eat("="),ret("operator","operator",e.current()));if("`"==r)return t.tokenize=tokenQuasi,tokenQuasi(e,t);if("#"==r)return e.skipToEnd(),ret("error","error");if(u.test(r))return">"==r&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=r&&"="!=r||e.eat("="):/[<>*+\-]/.test(r)&&(e.eat(r),">"==r&&e.eat(r))),ret("operator","operator",e.current());if(l.test(r)){e.eatWhile(l);var n=e.current();if("."!=t.lastType){if(m.propertyIsEnumerable(n)){var o=m[n];return ret(o.type,o.style,n)}if("async"==n&&e.match(/^(\s|\/\*.*?\*\/)*[\(\w]/,!1))return ret("async","keyword",n)}return ret("variable","variable",n)}}function tokenComment(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=tokenBase;break}n="*"==r}return ret("comment","comment")}function tokenQuasi(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=tokenBase;break}n=!n&&"\\"==r}return ret("quasi","string-2",e.current())}function findFatArrow(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(c){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var o=0,a=!1,s=r-1;s>=0;--s){var p=e.string.charAt(s),i=x.indexOf(p);if(i>=0&&i<3){if(!o){++s;break}if(0==--o){"("==p&&(a=!0);break}}else if(i>=3&&i<6)++o;else if(l.test(p))a=!0;else{if(/["'\/]/.test(p))return;if(a&&!o){++s;break}}}a&&!o&&(t.fatArrowAt=s)}}function JSLexical(e,t,r,n,o,a){this.indented=e,this.column=t,this.type=r,this.prev=o,this.info=a,null!=n&&(this.align=n)}function inScope(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}function pass(){for(var e=arguments.length-1;e>=0;e--)y.cc.push(arguments[e])}function cont(){return pass.apply(null,arguments),!0}function register(e){function inList(t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}var t=y.state;if(y.marked="def",t.context){if(inList(t.localVars))return;t.localVars={name:e,next:t.localVars}}else{if(inList(t.globalVars))return;r.globalVars&&(t.globalVars={name:e,next:t.globalVars})}}function isModifier(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function pushcontext(){y.state.context={prev:y.state.context,vars:y.state.localVars},y.state.localVars=k}function popcontext(){y.state.localVars=y.state.context.vars,y.state.context=y.state.context.prev}function pushlex(e,t){var r=function(){var r=y.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var o=r.lexical;o&&")"==o.type&&o.align;o=o.prev)n=o.indented;r.lexical=new JSLexical(n,y.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function poplex(){var e=y.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function expect(e){function exp(t){return t==e?cont():";"==e?pass():cont(exp)}return exp}function statement(e,t){return"var"==e?cont(pushlex("vardef",t.length),vardef,expect(";"),poplex):"keyword a"==e?cont(pushlex("form"),parenExpr,statement,poplex):"keyword b"==e?cont(pushlex("form"),statement,poplex):"keyword d"==e?y.stream.match(/^\s*$/,!1)?cont():cont(pushlex("stat"),maybeexpression,expect(";"),poplex):"debugger"==e?cont(expect(";")):"{"==e?cont(pushlex("}"),block,poplex):";"==e?cont():"if"==e?("else"==y.state.lexical.info&&y.state.cc[y.state.cc.length-1]==poplex&&y.state.cc.pop()(),cont(pushlex("form"),parenExpr,statement,poplex,maybeelse)):"function"==e?cont(functiondef):"for"==e?cont(pushlex("form"),forspec,statement,poplex):"class"==e||c&&"interface"==t?(y.marked="keyword",cont(pushlex("form"),className,poplex)):"variable"==e?c&&"declare"==t?(y.marked="keyword",cont(statement)):c&&("module"==t||"enum"==t||"type"==t)&&y.stream.match(/^\s*\w/,!1)?(y.marked="keyword","enum"==t?cont(enumdef):"type"==t?cont(typeexpr,expect("operator"),typeexpr,expect(";")):cont(pushlex("form"),pattern,expect("{"),pushlex("}"),block,poplex,poplex)):c&&"namespace"==t?(y.marked="keyword",cont(pushlex("form"),expression,block,poplex)):cont(pushlex("stat"),maybelabel):"switch"==e?cont(pushlex("form"),parenExpr,expect("{"),pushlex("}","switch"),block,poplex,poplex):"case"==e?cont(expression,expect(":")):"default"==e?cont(expect(":")):"catch"==e?cont(pushlex("form"),pushcontext,expect("("),funarg,expect(")"),statement,poplex,popcontext):"export"==e?cont(pushlex("stat"),afterExport,poplex):"import"==e?cont(pushlex("stat"),afterImport,poplex):"async"==e?cont(statement):"@"==t?cont(expression,statement):pass(pushlex("stat"),expression,expect(";"),poplex)}function expression(e,t){return expressionInner(e,t,!1)}function expressionNoComma(e,t){return expressionInner(e,t,!0)}function parenExpr(e){return"("!=e?pass():cont(pushlex(")"),expression,expect(")"),poplex)}function expressionInner(e,t,r){if(y.state.fatArrowAt==y.stream.start){var n=r?arrowBodyNoComma:arrowBody;if("("==e)return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,expect("=>"),n,popcontext);if("variable"==e)return pass(pushcontext,pattern,expect("=>"),n,popcontext)}var o=r?maybeoperatorNoComma:maybeoperatorComma;return d.hasOwnProperty(e)?cont(o):"function"==e?cont(functiondef,o):"class"==e||c&&"interface"==t?(y.marked="keyword",cont(pushlex("form"),classExpression,poplex)):"keyword c"==e||"async"==e?cont(r?expressionNoComma:expression):"("==e?cont(pushlex(")"),maybeexpression,expect(")"),poplex,o):"operator"==e||"spread"==e?cont(r?expressionNoComma:expression):"["==e?cont(pushlex("]"),arrayLiteral,poplex,o):"{"==e?contCommasep(objprop,"}",null,o):"quasi"==e?pass(quasi,o):"new"==e?cont(function maybeTarget(e){return function(t){return"."==t?cont(e?targetNoComma:target):"variable"==t&&c?cont(maybeTypeArgs,e?maybeoperatorNoComma:maybeoperatorComma):pass(e?expressionNoComma:expression)}}(r)):cont()}function maybeexpression(e){return e.match(/[;\}\)\],]/)?pass():pass(expression)}function maybeoperatorComma(e,t){return","==e?cont(expression):maybeoperatorNoComma(e,t,!1)}function maybeoperatorNoComma(e,t,r){var n=0==r?maybeoperatorComma:maybeoperatorNoComma,o=0==r?expression:expressionNoComma;return"=>"==e?cont(pushcontext,r?arrowBodyNoComma:arrowBody,popcontext):"operator"==e?/\+\+|--/.test(t)||c&&"!"==t?cont(n):c&&"<"==t&&y.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?cont(pushlex(">"),commasep(typeexpr,">"),poplex,n):"?"==t?cont(expression,expect(":"),o):cont(o):"quasi"==e?pass(quasi,n):";"!=e?"("==e?contCommasep(expressionNoComma,")","call",n):"."==e?cont(property,n):"["==e?cont(pushlex("]"),maybeexpression,expect("]"),poplex,n):c&&"as"==t?(y.marked="keyword",cont(typeexpr,n)):"regexp"==e?(y.state.lastType=y.marked="operator",y.stream.backUp(y.stream.pos-y.stream.start-1),cont(o)):void 0:void 0}function quasi(e,t){return"quasi"!=e?pass():"${"!=t.slice(t.length-2)?cont(quasi):cont(expression,continueQuasi)}function continueQuasi(e){if("}"==e)return y.marked="string-2",y.state.tokenize=tokenQuasi,cont(quasi)}function arrowBody(e){return findFatArrow(y.stream,y.state),pass("{"==e?statement:expression)}function arrowBodyNoComma(e){return findFatArrow(y.stream,y.state),pass("{"==e?statement:expressionNoComma)}function target(e,t){if("target"==t)return y.marked="keyword",cont(maybeoperatorComma)}function targetNoComma(e,t){if("target"==t)return y.marked="keyword",cont(maybeoperatorNoComma)}function maybelabel(e){return":"==e?cont(poplex,statement):pass(maybeoperatorComma,expect(";"),poplex)}function property(e){if("variable"==e)return y.marked="property",cont()}function objprop(e,t){if("async"==e)return y.marked="property",cont(objprop);if("variable"==e||"keyword"==y.style){if(y.marked="property","get"==t||"set"==t)return cont(getterSetter);var r;return c&&y.state.fatArrowAt==y.stream.start&&(r=y.stream.match(/^\s*:\s*/,!1))&&(y.state.fatArrowAt=y.stream.pos+r[0].length),cont(afterprop)}return"number"==e||"string"==e?(y.marked=p?"property":y.style+" property",cont(afterprop)):"jsonld-keyword"==e?cont(afterprop):c&&isModifier(t)?(y.marked="keyword",cont(objprop)):"["==e?cont(expression,maybetype,expect("]"),afterprop):"spread"==e?cont(expressionNoComma,afterprop):"*"==t?(y.marked="keyword",cont(objprop)):":"==e?pass(afterprop):void 0}function getterSetter(e){return"variable"!=e?pass(afterprop):(y.marked="property",cont(functiondef))}function afterprop(e){return":"==e?cont(expressionNoComma):"("==e?pass(functiondef):void 0}function commasep(e,t,r){function proceed(n,o){if(r?r.indexOf(n)>-1:","==n){var a=y.state.lexical;return"call"==a.info&&(a.pos=(a.pos||0)+1),cont(function(r,n){return r==t||n==t?pass():pass(e)},proceed)}return n==t||o==t?cont():cont(expect(t))}return function(r,n){return r==t||n==t?cont():pass(e,proceed)}}function contCommasep(e,t,r){for(var n=3;n<arguments.length;n++)y.cc.push(arguments[n]);return cont(pushlex(t,r),commasep(e,t),poplex)}function block(e){return"}"==e?cont():pass(statement,block)}function maybetype(e,t){if(c){if(":"==e)return cont(typeexpr);if("?"==t)return cont(maybetype)}}function mayberettype(e){if(c&&":"==e)return y.stream.match(/^\s*\w+\s+is\b/,!1)?cont(expression,isKW,typeexpr):cont(typeexpr)}function isKW(e,t){if("is"==t)return y.marked="keyword",cont()}function typeexpr(e,t){return"variable"==e||"void"==t?"keyof"==t?(y.marked="keyword",cont(typeexpr)):(y.marked="type",cont(afterType)):"string"==e||"number"==e||"atom"==e?cont(afterType):"["==e?cont(pushlex("]"),commasep(typeexpr,"]",","),poplex,afterType):"{"==e?cont(pushlex("}"),commasep(typeprop,"}",",;"),poplex,afterType):"("==e?cont(commasep(typearg,")"),maybeReturnType):void 0}function maybeReturnType(e){if("=>"==e)return cont(typeexpr)}function typeprop(e,t){return"variable"==e||"keyword"==y.style?(y.marked="property",cont(typeprop)):"?"==t?cont(typeprop):":"==e?cont(typeexpr):"["==e?cont(expression,maybetype,expect("]"),typeprop):void 0}function typearg(e){return"variable"==e?cont(typearg):":"==e?cont(typeexpr):void 0}function afterType(e,t){return"<"==t?cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType):"|"==t||"."==e?cont(typeexpr):"["==e?cont(expect("]"),afterType):"extends"==t||"implements"==t?(y.marked="keyword",cont(typeexpr)):void 0}function maybeTypeArgs(e,t){if("<"==t)return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType)}function typeparam(){return pass(typeexpr,maybeTypeDefault)}function maybeTypeDefault(e,t){if("="==t)return cont(typeexpr)}function vardef(e,t){return"enum"==t?(y.marked="keyword",cont(enumdef)):pass(pattern,maybetype,maybeAssign,vardefCont)}function pattern(e,t){return c&&isModifier(t)?(y.marked="keyword",cont(pattern)):"variable"==e?(register(t),cont()):"spread"==e?cont(pattern):"["==e?contCommasep(pattern,"]"):"{"==e?contCommasep(proppattern,"}"):void 0}function proppattern(e,t){return"variable"!=e||y.stream.match(/^\s*:/,!1)?("variable"==e&&(y.marked="property"),"spread"==e?cont(pattern):"}"==e?pass():cont(expect(":"),pattern,maybeAssign)):(register(t),cont(maybeAssign))}function maybeAssign(e,t){if("="==t)return cont(expressionNoComma)}function vardefCont(e){if(","==e)return cont(vardef)}function maybeelse(e,t){if("keyword b"==e&&"else"==t)return cont(pushlex("form","else"),statement,poplex)}function forspec(e){if("("==e)return cont(pushlex(")"),forspec1,expect(")"),poplex)}function forspec1(e){return"var"==e?cont(vardef,expect(";"),forspec2):";"==e?cont(forspec2):"variable"==e?cont(formaybeinof):pass(expression,expect(";"),forspec2)}function formaybeinof(e,t){return"in"==t||"of"==t?(y.marked="keyword",cont(expression)):cont(maybeoperatorComma,forspec2)}function forspec2(e,t){return";"==e?cont(forspec3):"in"==t||"of"==t?(y.marked="keyword",cont(expression)):pass(expression,expect(";"),forspec3)}function forspec3(e){")"!=e&&cont(expression)}function functiondef(e,t){return"*"==t?(y.marked="keyword",cont(functiondef)):"variable"==e?(register(t),cont(functiondef)):"("==e?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,statement,popcontext):c&&"<"==t?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondef):void 0}function funarg(e,t){return"@"==t&&cont(expression,funarg),"spread"==e?cont(funarg):c&&isModifier(t)?(y.marked="keyword",cont(funarg)):pass(pattern,maybetype,maybeAssign)}function classExpression(e,t){return"variable"==e?className(e,t):classNameAfter(e,t)}function className(e,t){if("variable"==e)return register(t),cont(classNameAfter)}function classNameAfter(e,t){return"<"==t?cont(pushlex(">"),commasep(typeparam,">"),poplex,classNameAfter):"extends"==t||"implements"==t||c&&","==e?("implements"==t&&(y.marked="keyword"),cont(c?typeexpr:expression,classNameAfter)):"{"==e?cont(pushlex("}"),classBody,poplex):void 0}function classBody(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||c&&isModifier(t))&&y.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(y.marked="keyword",cont(classBody)):"variable"==e||"keyword"==y.style?(y.marked="property",cont(c?classfield:functiondef,classBody)):"["==e?cont(expression,maybetype,expect("]"),c?classfield:functiondef,classBody):"*"==t?(y.marked="keyword",cont(classBody)):";"==e?cont(classBody):"}"==e?cont():"@"==t?cont(expression,classBody):void 0}function classfield(e,t){return"?"==t?cont(classfield):":"==e?cont(typeexpr,maybeAssign):"="==t?cont(expressionNoComma):pass(functiondef)}function afterExport(e,t){return"*"==t?(y.marked="keyword",cont(maybeFrom,expect(";"))):"default"==t?(y.marked="keyword",cont(expression,expect(";"))):"{"==e?cont(commasep(exportField,"}"),maybeFrom,expect(";")):pass(statement)}function exportField(e,t){return"as"==t?(y.marked="keyword",cont(expect("variable"))):"variable"==e?pass(expressionNoComma,exportField):void 0}function afterImport(e){return"string"==e?cont():pass(importSpec,maybeMoreImports,maybeFrom)}function importSpec(e,t){return"{"==e?contCommasep(importSpec,"}"):("variable"==e&&register(t),"*"==t&&(y.marked="keyword"),cont(maybeAs))}function maybeMoreImports(e){if(","==e)return cont(importSpec,maybeMoreImports)}function maybeAs(e,t){if("as"==t)return y.marked="keyword",cont(importSpec)}function maybeFrom(e,t){if("from"==t)return y.marked="keyword",cont(expression)}function arrayLiteral(e){return"]"==e?cont():pass(commasep(expressionNoComma,"]"))}function enumdef(){return pass(pushlex("form"),pattern,expect("{"),pushlex("}"),commasep(enummember,"}"),poplex,poplex)}function enummember(){return pass(pattern,maybeAssign)}function expressionAllowed(e,t,r){return t.tokenize==tokenBase&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}var n,o,a=t.indentUnit,s=r.statementIndent,p=r.jsonld,i=r.json||p,c=r.typescript,l=r.wordCharacters||/[\w$\xa1-\uffff]/,m=function(){function kw(e){return{type:e,style:"keyword"}}var e=kw("keyword a"),t=kw("keyword b"),r=kw("keyword c"),n=kw("keyword d"),o=kw("operator"),a={type:"atom",style:"atom"};return{if:kw("if"),while:e,with:e,else:t,do:t,try:t,finally:t,return:n,break:n,continue:n,new:kw("new"),delete:r,void:r,throw:r,debugger:kw("debugger"),var:kw("var"),const:kw("var"),let:kw("var"),function:kw("function"),catch:kw("catch"),for:kw("for"),switch:kw("switch"),case:kw("case"),default:kw("default"),in:o,typeof:o,instanceof:o,true:a,false:a,null:a,undefined:a,NaN:a,Infinity:a,this:kw("this"),class:kw("class"),super:kw("atom"),yield:r,export:kw("export"),import:kw("import"),extends:r,await:r}}(),u=/[+\-*&%=<>!?|~^@]/,f=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,x="([{}])",d={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0},y={state:null,column:null,marked:null,cc:null},k={name:"this",next:{name:"arguments"}};return poplex.lex=!0,{startState:function(e){var t={tokenize:tokenBase,lastType:"sof",cc:[],lexical:new JSLexical((e||0)-a,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),findFatArrow(e,t)),t.tokenize!=tokenComment&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=o&&"--"!=o?n:"incdec",function parseJS(e,t,r,n,o){var a=e.cc;for(y.state=e,y.stream=o,y.marked=null,y.cc=a,y.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((a.length?a.pop():i?expression:statement)(r,n)){for(;a.length&&a[a.length-1].lex;)a.pop()();return y.marked?y.marked:"variable"==r&&inScope(e,n)?"variable-2":t}}(t,r,n,o,e))},indent:function(t,n){if(t.tokenize==tokenComment)return e.Pass;if(t.tokenize!=tokenBase)return 0;var o,p=n&&n.charAt(0),i=t.lexical;if(!/^\s*else\b/.test(n))for(var c=t.cc.length-1;c>=0;--c){var l=t.cc[c];if(l==poplex)i=i.prev;else if(l!=maybeelse)break}for(;("stat"==i.type||"form"==i.type)&&("}"==p||(o=t.cc[t.cc.length-1])&&(o==maybeoperatorComma||o==maybeoperatorNoComma)&&!/^[,\.=+\-*:?[\(]/.test(n));)i=i.prev;s&&")"==i.type&&"stat"==i.prev.type&&(i=i.prev);var m=i.type,f=p==m;return"vardef"==m?i.indented+("operator"==t.lastType||","==t.lastType?i.info+1:0):"form"==m&&"{"==p?i.indented:"form"==m?i.indented+a:"stat"==m?i.indented+(function isContinuedStatement(e,t){return"operator"==e.lastType||","==e.lastType||u.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?s||a:0):"switch"!=i.info||f||0==r.doubleIndentSwitch?i.align?i.column+(f?0:1):i.indented+(f?0:a):i.indented+(/^(?:case|default)\b/.test(n)?a:2*a)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:i?null:"/*",blockCommentEnd:i?null:"*/",blockCommentContinue:i?null:" * ",lineComment:i?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:i?"json":"javascript",jsonldMode:p,jsonMode:i,expressionAllowed:expressionAllowed,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=expression&&t!=expressionNoComma||e.cc.pop()}}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})})},906:function(e,t,r){!function(e){e(r(820),r(821))}(function(e){"use strict";e.defineMode("pegjs",function(t){var r=e.getMode(t,"javascript");return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inCharacterClass:!1,braced:0,lhs:!0,localState:null}},token:function(t,n){if(t&&(n.inString||n.inComment||'"'!=t.peek()&&"'"!=t.peek()||(n.stringType=t.peek(),t.next(),n.inString=!0)),n.inString||n.inComment||!t.match(/^\/\*/)||(n.inComment=!0),n.inString){for(;n.inString&&!t.eol();)t.peek()===n.stringType?(t.next(),n.inString=!1):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return n.lhs?"property string":"string"}if(n.inComment){for(;n.inComment&&!t.eol();)t.match(/\*\//)?n.inComment=!1:t.match(/^.[^\*]*/);return"comment"}if(n.inCharacterClass)for(;n.inCharacterClass&&!t.eol();)t.match(/^[^\]\\]+/)||t.match(/^\\./)||(n.inCharacterClass=!1);else{if("["===t.peek())return t.next(),n.inCharacterClass=!0,"bracket";if(t.match(/^\/\//))return t.skipToEnd(),"comment";if(n.braced||"{"===t.peek()){null===n.localState&&(n.localState=e.startState(r));var o=r.token(t,n.localState),a=t.current();if(!o)for(var s=0;s<a.length;s++)"{"===a[s]?n.braced++:"}"===a[s]&&n.braced--;return o}if(function identifier(e){return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)}(t))return":"===t.peek()?"variable":"variable-2";if(-1!=["[","]","(",")"].indexOf(t.peek()))return t.next(),"bracket";t.eatSpace()||t.next()}return null}}},"javascript")})}});