goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45157){
var map__45158 = p__45157;
var map__45158__$1 = (((((!((map__45158 == null))))?(((((map__45158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45158):map__45158);
var m = map__45158__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45158__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45176_45324 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45177_45325 = null;
var count__45178_45326 = (0);
var i__45179_45327 = (0);
while(true){
if((i__45179_45327 < count__45178_45326)){
var f_45328 = chunk__45177_45325.cljs$core$IIndexed$_nth$arity$2(null,i__45179_45327);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45328], 0));


var G__45329 = seq__45176_45324;
var G__45330 = chunk__45177_45325;
var G__45331 = count__45178_45326;
var G__45332 = (i__45179_45327 + (1));
seq__45176_45324 = G__45329;
chunk__45177_45325 = G__45330;
count__45178_45326 = G__45331;
i__45179_45327 = G__45332;
continue;
} else {
var temp__5735__auto___45333 = cljs.core.seq(seq__45176_45324);
if(temp__5735__auto___45333){
var seq__45176_45334__$1 = temp__5735__auto___45333;
if(cljs.core.chunked_seq_QMARK_(seq__45176_45334__$1)){
var c__4609__auto___45335 = cljs.core.chunk_first(seq__45176_45334__$1);
var G__45336 = cljs.core.chunk_rest(seq__45176_45334__$1);
var G__45337 = c__4609__auto___45335;
var G__45338 = cljs.core.count(c__4609__auto___45335);
var G__45339 = (0);
seq__45176_45324 = G__45336;
chunk__45177_45325 = G__45337;
count__45178_45326 = G__45338;
i__45179_45327 = G__45339;
continue;
} else {
var f_45340 = cljs.core.first(seq__45176_45334__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45340], 0));


var G__45341 = cljs.core.next(seq__45176_45334__$1);
var G__45342 = null;
var G__45343 = (0);
var G__45344 = (0);
seq__45176_45324 = G__45341;
chunk__45177_45325 = G__45342;
count__45178_45326 = G__45343;
i__45179_45327 = G__45344;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45345 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45345], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45345)))?cljs.core.second(arglists_45345):arglists_45345)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45198_45346 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45199_45347 = null;
var count__45200_45348 = (0);
var i__45201_45349 = (0);
while(true){
if((i__45201_45349 < count__45200_45348)){
var vec__45227_45350 = chunk__45199_45347.cljs$core$IIndexed$_nth$arity$2(null,i__45201_45349);
var name_45351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227_45350,(0),null);
var map__45230_45352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45227_45350,(1),null);
var map__45230_45353__$1 = (((((!((map__45230_45352 == null))))?(((((map__45230_45352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45230_45352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45230_45352):map__45230_45352);
var doc_45354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45230_45353__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45230_45353__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45351], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45355], 0));

if(cljs.core.truth_(doc_45354)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45354], 0));
} else {
}


var G__45356 = seq__45198_45346;
var G__45357 = chunk__45199_45347;
var G__45358 = count__45200_45348;
var G__45359 = (i__45201_45349 + (1));
seq__45198_45346 = G__45356;
chunk__45199_45347 = G__45357;
count__45200_45348 = G__45358;
i__45201_45349 = G__45359;
continue;
} else {
var temp__5735__auto___45360 = cljs.core.seq(seq__45198_45346);
if(temp__5735__auto___45360){
var seq__45198_45361__$1 = temp__5735__auto___45360;
if(cljs.core.chunked_seq_QMARK_(seq__45198_45361__$1)){
var c__4609__auto___45362 = cljs.core.chunk_first(seq__45198_45361__$1);
var G__45363 = cljs.core.chunk_rest(seq__45198_45361__$1);
var G__45364 = c__4609__auto___45362;
var G__45365 = cljs.core.count(c__4609__auto___45362);
var G__45366 = (0);
seq__45198_45346 = G__45363;
chunk__45199_45347 = G__45364;
count__45200_45348 = G__45365;
i__45201_45349 = G__45366;
continue;
} else {
var vec__45232_45367 = cljs.core.first(seq__45198_45361__$1);
var name_45368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45232_45367,(0),null);
var map__45235_45369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45232_45367,(1),null);
var map__45235_45370__$1 = (((((!((map__45235_45369 == null))))?(((((map__45235_45369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45235_45369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45235_45369):map__45235_45369);
var doc_45371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45235_45370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45235_45370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45368], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45372], 0));

if(cljs.core.truth_(doc_45371)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45371], 0));
} else {
}


var G__45374 = cljs.core.next(seq__45198_45361__$1);
var G__45375 = null;
var G__45376 = (0);
var G__45377 = (0);
seq__45198_45346 = G__45374;
chunk__45199_45347 = G__45375;
count__45200_45348 = G__45376;
i__45201_45349 = G__45377;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45238 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45239 = null;
var count__45240 = (0);
var i__45241 = (0);
while(true){
if((i__45241 < count__45240)){
var role = chunk__45239.cljs$core$IIndexed$_nth$arity$2(null,i__45241);
var temp__5735__auto___45378__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45378__$1)){
var spec_45379 = temp__5735__auto___45378__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45379)], 0));
} else {
}


var G__45380 = seq__45238;
var G__45381 = chunk__45239;
var G__45382 = count__45240;
var G__45383 = (i__45241 + (1));
seq__45238 = G__45380;
chunk__45239 = G__45381;
count__45240 = G__45382;
i__45241 = G__45383;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45238);
if(temp__5735__auto____$1){
var seq__45238__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45238__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45238__$1);
var G__45384 = cljs.core.chunk_rest(seq__45238__$1);
var G__45385 = c__4609__auto__;
var G__45386 = cljs.core.count(c__4609__auto__);
var G__45387 = (0);
seq__45238 = G__45384;
chunk__45239 = G__45385;
count__45240 = G__45386;
i__45241 = G__45387;
continue;
} else {
var role = cljs.core.first(seq__45238__$1);
var temp__5735__auto___45388__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45388__$2)){
var spec_45389 = temp__5735__auto___45388__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45389)], 0));
} else {
}


var G__45390 = cljs.core.next(seq__45238__$1);
var G__45391 = null;
var G__45392 = (0);
var G__45393 = (0);
seq__45238 = G__45390;
chunk__45239 = G__45391;
count__45240 = G__45392;
i__45241 = G__45393;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45394 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45395 = cljs.core.ex_cause(t);
via = G__45394;
t = G__45395;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45248 = datafied_throwable;
var map__45248__$1 = (((((!((map__45248 == null))))?(((((map__45248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45248):map__45248);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45248__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45248__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45248__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45249 = cljs.core.last(via);
var map__45249__$1 = (((((!((map__45249 == null))))?(((((map__45249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45249):map__45249);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45249__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45249__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45249__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45250 = data;
var map__45250__$1 = (((((!((map__45250 == null))))?(((((map__45250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45250):map__45250);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45250__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45251 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45251__$1 = (((((!((map__45251 == null))))?(((((map__45251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45251):map__45251);
var top_data = map__45251__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45251__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45256 = phase;
var G__45256__$1 = (((G__45256 instanceof cljs.core.Keyword))?G__45256.fqn:null);
switch (G__45256__$1) {
case "read-source":
var map__45258 = data;
var map__45258__$1 = (((((!((map__45258 == null))))?(((((map__45258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45258):map__45258);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45258__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45258__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45260 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45260__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45260,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45260);
var G__45260__$2 = (cljs.core.truth_((function (){var fexpr__45261 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45261.cljs$core$IFn$_invoke$arity$1 ? fexpr__45261.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45261.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45260__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45260__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45260__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45262 = top_data;
var G__45262__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45262);
var G__45262__$2 = (cljs.core.truth_((function (){var fexpr__45263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45263.cljs$core$IFn$_invoke$arity$1 ? fexpr__45263.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45263.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45262__$1);
var G__45262__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45262__$2);
var G__45262__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45262__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45262__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45262__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45264 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45264,(3),null);
var G__45267 = top_data;
var G__45267__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45267,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45267);
var G__45267__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45267__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45267__$1);
var G__45267__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45267__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45267__$2);
var G__45267__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45267__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45267__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45267__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45267__$4;
}

break;
case "execution":
var vec__45268 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45268,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45268,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45268,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45268,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45246_SHARP_){
var or__4185__auto__ = (p1__45246_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45272 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45272.cljs$core$IFn$_invoke$arity$1 ? fexpr__45272.cljs$core$IFn$_invoke$arity$1(p1__45246_SHARP_) : fexpr__45272.call(null,p1__45246_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45273__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45273,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45273);
var G__45273__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45273__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45273__$1);
var G__45273__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45273__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45273__$2);
var G__45273__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45273__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45273__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45273__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45273__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45256__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45276){
var map__45277 = p__45276;
var map__45277__$1 = (((((!((map__45277 == null))))?(((((map__45277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45277):map__45277);
var triage_data = map__45277__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45281 = phase;
var G__45281__$1 = (((G__45281 instanceof cljs.core.Keyword))?G__45281.fqn:null);
switch (G__45281__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45284 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45286 = loc;
var G__45287 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45288_45400 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45289_45401 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45290_45402 = true;
var _STAR_print_fn_STAR__temp_val__45291_45403 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45290_45402);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45291_45403);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45274_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45274_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45289_45401);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45288_45400);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45284,G__45285,G__45286,G__45287) : format.call(null,G__45284,G__45285,G__45286,G__45287));

break;
case "macroexpansion":
var G__45292 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45293 = cause_type;
var G__45294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45295 = loc;
var G__45296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45292,G__45293,G__45294,G__45295,G__45296) : format.call(null,G__45292,G__45293,G__45294,G__45295,G__45296));

break;
case "compile-syntax-check":
var G__45297 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45298 = cause_type;
var G__45299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45300 = loc;
var G__45301 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45297,G__45298,G__45299,G__45300,G__45301) : format.call(null,G__45297,G__45298,G__45299,G__45300,G__45301));

break;
case "compilation":
var G__45304 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45305 = cause_type;
var G__45306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45307 = loc;
var G__45308 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45304,G__45305,G__45306,G__45307,G__45308) : format.call(null,G__45304,G__45305,G__45306,G__45307,G__45308));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45311 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45312 = symbol;
var G__45313 = loc;
var G__45314 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45315_45408 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45316_45409 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45317_45410 = true;
var _STAR_print_fn_STAR__temp_val__45318_45411 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45317_45410);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45318_45411);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45275_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45275_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45316_45409);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45315_45408);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45311,G__45312,G__45313,G__45314) : format.call(null,G__45311,G__45312,G__45313,G__45314));
} else {
var G__45319 = "Execution error%s at %s(%s).\n%s\n";
var G__45320 = cause_type;
var G__45321 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45322 = loc;
var G__45323 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45319,G__45320,G__45321,G__45322,G__45323) : format.call(null,G__45319,G__45320,G__45321,G__45322,G__45323));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45281__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map