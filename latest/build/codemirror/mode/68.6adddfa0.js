webpackJsonp([70],{909:function(e,O,T){!function(e){e(T(820))}(function(e){"use strict";e.defineMode("pig",function(e,O){function chain(e,O,T){return O.tokenize=T,T(e,O)}function tokenComment(e,O){for(var T,E=!1;T=e.next();){if("/"==T&&E){O.tokenize=tokenBase;break}E="*"==T}return"comment"}function tokenBase(e,O){var A=e.next();return'"'==A||"'"==A?chain(e,O,function tokenString(e){return function(O,T){for(var E,t=!1,N=!1;null!=(E=O.next());){if(E==e&&!t){N=!0;break}t=!t&&"\\"==E}return(N||!t&&!I)&&(T.tokenize=tokenBase),"error"}}(A)):/[\[\]{}\(\),;\.]/.test(A)?null:/\d/.test(A)?(e.eatWhile(/[\w\.]/),"number"):"/"==A?e.eat("*")?chain(e,O,tokenComment):(e.eatWhile(N),"operator"):"-"==A?e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(N),"operator"):N.test(A)?(e.eatWhile(N),"operator"):(e.eatWhile(/[\w\$_]/),T&&T.propertyIsEnumerable(e.current().toUpperCase())&&!e.eat(")")&&!e.eat(".")?"keyword":E&&E.propertyIsEnumerable(e.current().toUpperCase())?"variable-2":t&&t.propertyIsEnumerable(e.current().toUpperCase())?"variable-3":"variable")}var T=O.keywords,E=O.builtins,t=O.types,I=O.multiLineStrings,N=/[*+\-%<>=&?:\/!|]/;return{startState:function(){return{tokenize:tokenBase,startOfLine:!0}},token:function(e,O){if(e.eatSpace())return null;return O.tokenize(e,O)}}}),function(){function keywords(e){for(var O={},T=e.split(" "),E=0;E<T.length;++E)O[T[E]]=!0;return O}var O="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",T="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",E="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";e.defineMIME("text/x-pig",{name:"pig",builtins:keywords(O),keywords:keywords(T),types:keywords(E)}),e.registerHelper("hintWords","pig",(O+E+T).split(" "))}()})}});