webpackJsonp([92],{902:function(e,t,r){(function(e){"use strict";e.defineMode("haskell",function(e,t){function switchState(e,t,r){return t(r),r(e,t)}var r=/[a-z_]/,n=/[A-Z]/,a=/\d/,i=/[0-9A-Fa-f]/,o=/[0-7]/,l=/[a-z_A-Z0-9'\xa1-\uffff]/,u=/[-!#$%&*+.\/<=>?@\\^|~:]/,s=/[(),;[\]`{}]/,f=/[ \t\v\f]/;function normal(e,t){if(e.eatWhile(f))return null;var c=e.next();if(s.test(c)){if("{"==c&&e.eat("-")){var m="comment";return e.eat("#")&&(m="meta"),switchState(e,t,function ncomment(e,t){if(0==t)return normal;return function(r,n){for(var a=t;!r.eol();){var i=r.next();if("{"==i&&r.eat("-"))++a;else if("-"==i&&r.eat("}")&&0==--a)return n(normal),e}return n(ncomment(e,a)),e}}(m,1))}return null}if("'"==c)return e.eat("\\"),e.next(),e.eat("'")?"string":"string error";if('"'==c)return switchState(e,t,stringLiteral);if(n.test(c))return e.eatWhile(l),e.eat(".")?"qualifier":"variable-2";if(r.test(c))return e.eatWhile(l),"variable";if(a.test(c)){if("0"==c){if(e.eat(/[xX]/))return e.eatWhile(i),"integer";if(e.eat(/[oO]/))return e.eatWhile(o),"number"}e.eatWhile(a);m="number";return e.match(/^\.\d+/)&&(m="number"),e.eat(/[eE]/)&&(m="number",e.eat(/[-+]/),e.eatWhile(a)),m}if("."==c&&e.eat("."))return"keyword";if(u.test(c)){if("-"==c&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(u)))return e.skipToEnd(),"comment";m="variable";return":"==c&&(m="variable-2"),e.eatWhile(u),m}return"error"}function stringLiteral(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(normal),"string";if("\\"==r){if(e.eol()||e.eat(f))return t(stringGap),"string";e.eat("&")||e.next()}}return t(normal),"string error"}function stringGap(e,t){return e.eat("\\")?switchState(e,t,stringLiteral):(e.next(),t(normal),"error")}var c=function(){var e={};function setType(t){return function(){for(var r=0;r<arguments.length;r++)e[arguments[r]]=t}}setType("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),setType("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),setType("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<=","=<<","==",">",">=",">>",">>=","^","^^","||","*","**"),setType("builtin")("Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),setType("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3");var r=t.overrideKeywords;if(r)for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n]);return e}();return{startState:function(){return{f:normal}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,function(e){t.f=e}),n=e.current();return c.hasOwnProperty(n)?c[n]:r},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}}),e.defineMIME("text/x-haskell","haskell")})(r(871))}});