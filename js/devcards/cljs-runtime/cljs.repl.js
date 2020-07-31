goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50487){
var map__50488 = p__50487;
var map__50488__$1 = (((((!((map__50488 == null))))?(((((map__50488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50488):map__50488);
var m = map__50488__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50488__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50490_50619 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50491_50620 = null;
var count__50492_50621 = (0);
var i__50493_50622 = (0);
while(true){
if((i__50493_50622 < count__50492_50621)){
var f_50623 = chunk__50491_50620.cljs$core$IIndexed$_nth$arity$2(null,i__50493_50622);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50623], 0));


var G__50624 = seq__50490_50619;
var G__50625 = chunk__50491_50620;
var G__50626 = count__50492_50621;
var G__50627 = (i__50493_50622 + (1));
seq__50490_50619 = G__50624;
chunk__50491_50620 = G__50625;
count__50492_50621 = G__50626;
i__50493_50622 = G__50627;
continue;
} else {
var temp__5735__auto___50628 = cljs.core.seq(seq__50490_50619);
if(temp__5735__auto___50628){
var seq__50490_50629__$1 = temp__5735__auto___50628;
if(cljs.core.chunked_seq_QMARK_(seq__50490_50629__$1)){
var c__4609__auto___50630 = cljs.core.chunk_first(seq__50490_50629__$1);
var G__50631 = cljs.core.chunk_rest(seq__50490_50629__$1);
var G__50632 = c__4609__auto___50630;
var G__50633 = cljs.core.count(c__4609__auto___50630);
var G__50634 = (0);
seq__50490_50619 = G__50631;
chunk__50491_50620 = G__50632;
count__50492_50621 = G__50633;
i__50493_50622 = G__50634;
continue;
} else {
var f_50635 = cljs.core.first(seq__50490_50629__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50635], 0));


var G__50636 = cljs.core.next(seq__50490_50629__$1);
var G__50637 = null;
var G__50638 = (0);
var G__50639 = (0);
seq__50490_50619 = G__50636;
chunk__50491_50620 = G__50637;
count__50492_50621 = G__50638;
i__50493_50622 = G__50639;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50640 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50640], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50640)))?cljs.core.second(arglists_50640):arglists_50640)], 0));
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
var seq__50499_50641 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50500_50642 = null;
var count__50501_50643 = (0);
var i__50502_50644 = (0);
while(true){
if((i__50502_50644 < count__50501_50643)){
var vec__50522_50645 = chunk__50500_50642.cljs$core$IIndexed$_nth$arity$2(null,i__50502_50644);
var name_50646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50522_50645,(0),null);
var map__50525_50647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50522_50645,(1),null);
var map__50525_50648__$1 = (((((!((map__50525_50647 == null))))?(((((map__50525_50647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50525_50647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50525_50647):map__50525_50647);
var doc_50649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50525_50648__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50525_50648__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50646], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50650], 0));

if(cljs.core.truth_(doc_50649)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50649], 0));
} else {
}


var G__50651 = seq__50499_50641;
var G__50652 = chunk__50500_50642;
var G__50653 = count__50501_50643;
var G__50654 = (i__50502_50644 + (1));
seq__50499_50641 = G__50651;
chunk__50500_50642 = G__50652;
count__50501_50643 = G__50653;
i__50502_50644 = G__50654;
continue;
} else {
var temp__5735__auto___50655 = cljs.core.seq(seq__50499_50641);
if(temp__5735__auto___50655){
var seq__50499_50656__$1 = temp__5735__auto___50655;
if(cljs.core.chunked_seq_QMARK_(seq__50499_50656__$1)){
var c__4609__auto___50657 = cljs.core.chunk_first(seq__50499_50656__$1);
var G__50658 = cljs.core.chunk_rest(seq__50499_50656__$1);
var G__50659 = c__4609__auto___50657;
var G__50660 = cljs.core.count(c__4609__auto___50657);
var G__50661 = (0);
seq__50499_50641 = G__50658;
chunk__50500_50642 = G__50659;
count__50501_50643 = G__50660;
i__50502_50644 = G__50661;
continue;
} else {
var vec__50528_50662 = cljs.core.first(seq__50499_50656__$1);
var name_50663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528_50662,(0),null);
var map__50531_50664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50528_50662,(1),null);
var map__50531_50665__$1 = (((((!((map__50531_50664 == null))))?(((((map__50531_50664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50531_50664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50531_50664):map__50531_50664);
var doc_50666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50531_50665__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50531_50665__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50663], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50667], 0));

if(cljs.core.truth_(doc_50666)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50666], 0));
} else {
}


var G__50668 = cljs.core.next(seq__50499_50656__$1);
var G__50669 = null;
var G__50670 = (0);
var G__50671 = (0);
seq__50499_50641 = G__50668;
chunk__50500_50642 = G__50669;
count__50501_50643 = G__50670;
i__50502_50644 = G__50671;
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

var seq__50533 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50534 = null;
var count__50535 = (0);
var i__50536 = (0);
while(true){
if((i__50536 < count__50535)){
var role = chunk__50534.cljs$core$IIndexed$_nth$arity$2(null,i__50536);
var temp__5735__auto___50672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50672__$1)){
var spec_50673 = temp__5735__auto___50672__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50673)], 0));
} else {
}


var G__50674 = seq__50533;
var G__50675 = chunk__50534;
var G__50676 = count__50535;
var G__50677 = (i__50536 + (1));
seq__50533 = G__50674;
chunk__50534 = G__50675;
count__50535 = G__50676;
i__50536 = G__50677;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50533);
if(temp__5735__auto____$1){
var seq__50533__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50533__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50533__$1);
var G__50679 = cljs.core.chunk_rest(seq__50533__$1);
var G__50680 = c__4609__auto__;
var G__50681 = cljs.core.count(c__4609__auto__);
var G__50682 = (0);
seq__50533 = G__50679;
chunk__50534 = G__50680;
count__50535 = G__50681;
i__50536 = G__50682;
continue;
} else {
var role = cljs.core.first(seq__50533__$1);
var temp__5735__auto___50683__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50683__$2)){
var spec_50684 = temp__5735__auto___50683__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50684)], 0));
} else {
}


var G__50685 = cljs.core.next(seq__50533__$1);
var G__50686 = null;
var G__50687 = (0);
var G__50688 = (0);
seq__50533 = G__50685;
chunk__50534 = G__50686;
count__50535 = G__50687;
i__50536 = G__50688;
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
var G__50690 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50691 = cljs.core.ex_cause(t);
via = G__50690;
t = G__50691;
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
var map__50542 = datafied_throwable;
var map__50542__$1 = (((((!((map__50542 == null))))?(((((map__50542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50542):map__50542);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50542__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50542__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50542__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50543 = cljs.core.last(via);
var map__50543__$1 = (((((!((map__50543 == null))))?(((((map__50543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50543):map__50543);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50543__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50543__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50543__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50544 = data;
var map__50544__$1 = (((((!((map__50544 == null))))?(((((map__50544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50544):map__50544);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50544__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50545 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50545__$1 = (((((!((map__50545 == null))))?(((((map__50545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50545):map__50545);
var top_data = map__50545__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50550 = phase;
var G__50550__$1 = (((G__50550 instanceof cljs.core.Keyword))?G__50550.fqn:null);
switch (G__50550__$1) {
case "read-source":
var map__50551 = data;
var map__50551__$1 = (((((!((map__50551 == null))))?(((((map__50551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50551):map__50551);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50553 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50553__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50553);
var G__50553__$2 = (cljs.core.truth_((function (){var fexpr__50554 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50554.cljs$core$IFn$_invoke$arity$1 ? fexpr__50554.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50554.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50553__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50553__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50553__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50553__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50555 = top_data;
var G__50555__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50555,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50555);
var G__50555__$2 = (cljs.core.truth_((function (){var fexpr__50556 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50556.cljs$core$IFn$_invoke$arity$1 ? fexpr__50556.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50556.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50555__$1);
var G__50555__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50555__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50555__$2);
var G__50555__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50555__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50555__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50555__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50555__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50557 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50557,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50557,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50557,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50557,(3),null);
var G__50560 = top_data;
var G__50560__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50560,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50560);
var G__50560__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50560__$1);
var G__50560__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50560__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50560__$2);
var G__50560__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50560__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50560__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50560__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50560__$4;
}

break;
case "execution":
var vec__50561 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50561,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50541_SHARP_){
var or__4185__auto__ = (p1__50541_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50568.cljs$core$IFn$_invoke$arity$1 ? fexpr__50568.cljs$core$IFn$_invoke$arity$1(p1__50541_SHARP_) : fexpr__50568.call(null,p1__50541_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50570 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50570__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50570,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50570);
var G__50570__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50570__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50570__$1);
var G__50570__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50570__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50570__$2);
var G__50570__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50570__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50570__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50570__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50570__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50550__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50574){
var map__50575 = p__50574;
var map__50575__$1 = (((((!((map__50575 == null))))?(((((map__50575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50575):map__50575);
var triage_data = map__50575__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50575__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__50577 = phase;
var G__50577__$1 = (((G__50577 instanceof cljs.core.Keyword))?G__50577.fqn:null);
switch (G__50577__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50578 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50579 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50580 = loc;
var G__50581 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50585_50709 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50586_50710 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50587_50711 = true;
var _STAR_print_fn_STAR__temp_val__50588_50712 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50587_50711);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50588_50712);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50571_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50571_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50586_50710);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50585_50709);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50578,G__50579,G__50580,G__50581) : format.call(null,G__50578,G__50579,G__50580,G__50581));

break;
case "macroexpansion":
var G__50590 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50591 = cause_type;
var G__50592 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50593 = loc;
var G__50594 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50590,G__50591,G__50592,G__50593,G__50594) : format.call(null,G__50590,G__50591,G__50592,G__50593,G__50594));

break;
case "compile-syntax-check":
var G__50595 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50596 = cause_type;
var G__50597 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50598 = loc;
var G__50599 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50595,G__50596,G__50597,G__50598,G__50599) : format.call(null,G__50595,G__50596,G__50597,G__50598,G__50599));

break;
case "compilation":
var G__50600 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50601 = cause_type;
var G__50602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50603 = loc;
var G__50604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50600,G__50601,G__50602,G__50603,G__50604) : format.call(null,G__50600,G__50601,G__50602,G__50603,G__50604));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50605 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50606 = symbol;
var G__50607 = loc;
var G__50608 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50610_50723 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50611_50724 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50612_50725 = true;
var _STAR_print_fn_STAR__temp_val__50613_50726 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50612_50725);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50613_50726);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50572_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50572_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50611_50724);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50610_50723);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50605,G__50606,G__50607,G__50608) : format.call(null,G__50605,G__50606,G__50607,G__50608));
} else {
var G__50614 = "Execution error%s at %s(%s).\n%s\n";
var G__50615 = cause_type;
var G__50616 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50617 = loc;
var G__50618 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50614,G__50615,G__50616,G__50617,G__50618) : format.call(null,G__50614,G__50615,G__50616,G__50617,G__50618));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50577__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map