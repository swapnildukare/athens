goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55815 = arguments.length;
var i__4790__auto___55816 = (0);
while(true){
if((i__4790__auto___55816 < len__4789__auto___55815)){
args__4795__auto__.push((arguments[i__4790__auto___55816]));

var G__55817 = (i__4790__auto___55816 + (1));
i__4790__auto___55816 = G__55817;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq55802){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55802));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55829 = arguments.length;
var i__4790__auto___55831 = (0);
while(true){
if((i__4790__auto___55831 < len__4789__auto___55829)){
args__4795__auto__.push((arguments[i__4790__auto___55831]));

var G__55836 = (i__4790__auto___55831 + (1));
i__4790__auto___55831 = G__55836;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
var text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
throw text;
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq55803){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55803));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__55810 = "";
var G__55810__$1 = (cljs.core.truth_(re.ignoreCase)?[G__55810,"i"].join(''):G__55810);
var G__55810__$2 = (cljs.core.truth_(re.multiline)?[G__55810__$1,"m"].join(''):G__55810__$1);
if(cljs.core.truth_(re.unicode)){
return [G__55810__$2,"u"].join('');
} else {
return G__55810__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map