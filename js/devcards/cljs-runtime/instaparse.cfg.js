goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.gll');
goog.require('instaparse.util');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
/**
 * Sets whether all string literal terminals in a built grammar
 *   will be treated as case insensitive.
 * 
 *   `true`: case-insensitive
 *   `false`: case-sensitive
 *   `:default`: case-sensitive for EBNF, case-insensitive for ABNF
 */
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = new cljs.core.Keyword(null,"default","default",-1987822328);
/**
 * Returns a string combinator that may be case-insensntive, based
 *   on (in priority order):
 * 
 *   1) the value of `*case-insensitive-literals*`, if it has been
 *   overridden to a boolean
 *   2) the supplied `ci-by-default?` parameter
 */
instaparse.cfg.string_PLUS_ = (function instaparse$cfg$string_PLUS_(s,ci_by_default_QMARK_){
var G__56977 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__56977)){
return instaparse.combinators_source.string_ci(s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__56977)){
return instaparse.combinators_source.string(s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__56977)){
if(cljs.core.truth_(ci_by_default_QMARK_)){
return instaparse.combinators_source.string_ci(s);
} else {
return instaparse.combinators_source.string(s);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56977)].join('')));

}
}
}
});
/**
 * Adds a comment to a Clojure regex, or no-op in ClojureScript
 */
instaparse.cfg.regex_doc = (function instaparse$cfg$regex_doc(pattern_str,comment){
return cljs.core.re_pattern(pattern_str);
});
instaparse.cfg.single_quoted_string = instaparse.cfg.regex_doc(/'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted string");
instaparse.cfg.single_quoted_regexp = instaparse.cfg.regex_doc(/#'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted regexp");
instaparse.cfg.double_quoted_string = instaparse.cfg.regex_doc(/\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted string");
instaparse.cfg.double_quoted_regexp = instaparse.cfg.regex_doc(/#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted regexp");
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = instaparse.cfg.regex_doc("[,\\s]*","optional whitespace");
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide(instaparse.combinators_source.nt(new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"rule-separator","rule-separator",1539322213),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845),new cljs.core.Keyword(null,"inside-comment","inside-comment",1258069708),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"factor","factor",-2103172748),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"rules-or-parser","rules-or-parser",-314380386),new cljs.core.Keyword(null,"opt","opt",-794706369)],[instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"factor","factor",-2103172748))], 0)),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"look","look",-539441433)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"neg","neg",1800032960))], 0)),instaparse.cfg.opt_whitespace], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"cat","cat",-1457810207)),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"cat","cat",-1457810207))], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(":"),instaparse.combinators_source.string(":="),instaparse.combinators_source.string("::="),instaparse.combinators_source.string("=")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"cat","cat",-1457810207)),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"cat","cat",-1457810207))], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"factor","factor",-2103172748))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845))], 0)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.nt(new cljs.core.Keyword(null,"rule-separator","rule-separator",1539322213))),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.combinators_source.hide(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(";"),instaparse.combinators_source.string(".")], 0)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927))], 0))], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.neg(instaparse.combinators_source.nt(new cljs.core.Keyword(null,"epsilon","epsilon",-730158570))),instaparse.combinators_source.regexp(instaparse.cfg.regex_doc("[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+","Non-terminal"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.inside_comment),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"comment","comment",532206069)),instaparse.combinators_source.regexp(instaparse.cfg.inside_comment)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("}"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("*"))], 0))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_string)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus(instaparse.combinators_source.nt(new cljs.core.Keyword(null,"rule","rule",729973257)))], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(")"))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt","alt",-3214426)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"ord","ord",1142548323))], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_regexp)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"string","string",-1989541586)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"regexp","regexp",-541372782)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"opt","opt",-794706369)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"star","star",279424429)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"plus","plus",211540661)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"paren","paren",-294107600)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"hide","hide",-596913169)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"epsilon","epsilon",-730158570))], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("(*"),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"inside-comment","inside-comment",1258069708)),instaparse.combinators_source.string("*)")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("+"))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("Epsilon"),instaparse.combinators_source.string("epsilon"),instaparse.combinators_source.string("EPSILON"),instaparse.combinators_source.string("eps"),instaparse.combinators_source.string("\u03B5")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.ws),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"comment","comment",532206069)),instaparse.combinators_source.regexp(instaparse.cfg.ws)], 0)))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"rules","rules",1198912366)),instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425))], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("]"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("?"))], 0))], 0))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
 * Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
 */
instaparse.cfg.escape = (function instaparse$cfg$escape(s){
var sq = cljs.core.seq(s);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5733__auto__ = cljs.core.first(sq);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
var G__56981 = c;
switch (G__56981) {
case "\\":
var temp__5733__auto____$1 = cljs.core.second(sq);
if(cljs.core.truth_(temp__5733__auto____$1)){
var c2 = temp__5733__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"'")){
var G__57023 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__57024 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c2);
sq = G__57023;
v = G__57024;
continue;
} else {
var G__57025 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__57026 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c2], 0));
sq = G__57025;
v = G__57026;
continue;
}
} else {
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Encountered backslash character at end of string: ",s], 0));
}

break;
case "\"":
var G__57027 = cljs.core.next(sq);
var G__57028 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,"\\",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\""], 0));
sq = G__57027;
v = G__57028;
continue;

break;
default:
var G__57029 = cljs.core.next(sq);
var G__57030 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c);
sq = G__57029;
v = G__57030;
continue;

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v);
}
break;
}
});
var read_string_STAR__57031 = cljs.core.deref(new cljs.core.Var(function(){return cljs.tools.reader.read_string_STAR_;},new cljs.core.Symbol("cljs.tools.reader","read-string*","cljs.tools.reader/read-string*",1492661621,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.tools.reader","cljs.tools.reader",-831293977,null),new cljs.core.Symbol(null,"read-string*","read-string*",1046768315,null),"cljs/tools/reader.cljs",20,1,305,305,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reader","reader",1810192380,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"pending-forms","pending-forms",-1225172071,null)], null)),null,(cljs.core.truth_(cljs.tools.reader.read_string_STAR_)?cljs.tools.reader.read_string_STAR_.cljs$lang$test:null)])));
instaparse.cfg.safe_read_string = (function instaparse$cfg$safe_read_string(s){
var G__56982 = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s);
var G__56983 = null;
var G__56984 = null;
var G__56985 = null;
return (read_string_STAR__57031.cljs$core$IFn$_invoke$arity$4 ? read_string_STAR__57031.cljs$core$IFn$_invoke$arity$4(G__56982,G__56983,G__56984,G__56985) : read_string_STAR__57031.call(null,G__56982,G__56983,G__56984,G__56985));
});
/**
 * Converts single quoted string to double-quoted
 */
instaparse.cfg.process_string = (function instaparse$cfg$process_string(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = instaparse.cfg.safe_read_string([cljs.core.str.cljs$core$IFn$_invoke$arity$1(remove_escaped_single_quotes),"\""].join(''));
return final_string;
});
/**
 * Converts single quoted regexp to double-quoted
 */
instaparse.cfg.process_regexp = (function instaparse$cfg$process_regexp(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = cljs.core.re_pattern(remove_escaped_single_quotes);
return final_string;
});
/**
 * Convert one parsed rule from the grammar into combinators
 */
instaparse.cfg.build_rule = (function instaparse$cfg$build_rule(tree){
while(true){
var G__56986 = (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.tag.call(null,tree));
var G__56986__$1 = (((G__56986 instanceof cljs.core.Keyword))?G__56986.fqn:null);
switch (G__56986__$1) {
case "rule":
var vec__56987 = (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree));
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56987,(0),null);
var alt_or_ord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56987,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.tag.call(null,nt)),new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__56990 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt));
return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__56990) : instaparse.cfg.content.call(null,G__56990));
})()),instaparse.combinators_source.hide_tag((instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(alt_or_ord) : instaparse.cfg.build_rule.call(null,alt_or_ord)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt))),(instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(alt_or_ord) : instaparse.cfg.build_rule.call(null,alt_or_ord))], null);
}

break;
case "nt":
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "alt":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "ord":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "paren":
var G__57033 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
tree = G__57033;
continue;

break;
case "hide":
return instaparse.combinators_source.hide((function (){var G__56991 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__56991) : instaparse.cfg.build_rule.call(null,G__56991));
})());

break;
case "cat":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "string":
return instaparse.cfg.string_PLUS_(instaparse.cfg.process_string((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))),false);

break;
case "regexp":
return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "opt":
return instaparse.combinators_source.opt((function (){var G__56992 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__56992) : instaparse.cfg.build_rule.call(null,G__56992));
})());

break;
case "star":
return instaparse.combinators_source.star((function (){var G__56997 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__56997) : instaparse.cfg.build_rule.call(null,G__56997));
})());

break;
case "plus":
return instaparse.combinators_source.plus((function (){var G__56998 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__56998) : instaparse.cfg.build_rule.call(null,G__56998));
})());

break;
case "look":
return instaparse.combinators_source.look((function (){var G__56999 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__56999) : instaparse.cfg.build_rule.call(null,G__56999));
})());

break;
case "neg":
return instaparse.combinators_source.neg((function (){var G__57000 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__57000) : instaparse.cfg.build_rule.call(null,G__57000));
})());

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56986__$1)].join('')));

}
break;
}
});
/**
 * Returns a sequence of all non-terminals in a parser built from combinators.
 */
instaparse.cfg.seq_nt = (function instaparse$cfg$seq_nt(parser){
while(true){
var G__57001 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__57001__$1 = (((G__57001 instanceof cljs.core.Keyword))?G__57001.fqn:null);
switch (G__57001__$1) {
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "string":
case "string-ci":
case "char":
case "regexp":
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
case "plus":
case "star":
case "look":
case "neg":
case "rep":
var G__57036 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__57036;
continue;

break;
case "alt":
case "cat":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "ord":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser)], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57001__$1)].join('')));

}
break;
}
});
/**
 * Throw error if grammar uses any invalid non-terminals in its productions
 */
instaparse.cfg.check_grammar = (function instaparse$cfg$check_grammar(grammar_map){
var valid_nts_57037 = cljs.core.set(cljs.core.keys(grammar_map));
var seq__57003_57038 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(grammar_map)], 0))));
var chunk__57004_57039 = null;
var count__57005_57040 = (0);
var i__57006_57041 = (0);
while(true){
if((i__57006_57041 < count__57005_57040)){
var nt_57043 = chunk__57004_57039.cljs$core$IIndexed$_nth$arity$2(null,i__57006_57041);
if(cljs.core.truth_((valid_nts_57037.cljs$core$IFn$_invoke$arity$1 ? valid_nts_57037.cljs$core$IFn$_invoke$arity$1(nt_57043) : valid_nts_57037.call(null,nt_57043)))){
} else {
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_57043),(1))," occurs on the right-hand side of your grammar, but not on the left"], 0));
}


var G__57044 = seq__57003_57038;
var G__57045 = chunk__57004_57039;
var G__57046 = count__57005_57040;
var G__57047 = (i__57006_57041 + (1));
seq__57003_57038 = G__57044;
chunk__57004_57039 = G__57045;
count__57005_57040 = G__57046;
i__57006_57041 = G__57047;
continue;
} else {
var temp__5735__auto___57048 = cljs.core.seq(seq__57003_57038);
if(temp__5735__auto___57048){
var seq__57003_57049__$1 = temp__5735__auto___57048;
if(cljs.core.chunked_seq_QMARK_(seq__57003_57049__$1)){
var c__4609__auto___57050 = cljs.core.chunk_first(seq__57003_57049__$1);
var G__57051 = cljs.core.chunk_rest(seq__57003_57049__$1);
var G__57052 = c__4609__auto___57050;
var G__57053 = cljs.core.count(c__4609__auto___57050);
var G__57054 = (0);
seq__57003_57038 = G__57051;
chunk__57004_57039 = G__57052;
count__57005_57040 = G__57053;
i__57006_57041 = G__57054;
continue;
} else {
var nt_57055 = cljs.core.first(seq__57003_57049__$1);
if(cljs.core.truth_((valid_nts_57037.cljs$core$IFn$_invoke$arity$1 ? valid_nts_57037.cljs$core$IFn$_invoke$arity$1(nt_57055) : valid_nts_57037.call(null,nt_57055)))){
} else {
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_57055),(1))," occurs on the right-hand side of your grammar, but not on the left"], 0));
}


var G__57056 = cljs.core.next(seq__57003_57049__$1);
var G__57057 = null;
var G__57058 = (0);
var G__57059 = (0);
seq__57003_57038 = G__57056;
chunk__57004_57039 = G__57057;
count__57005_57040 = G__57058;
i__57006_57041 = G__57059;
continue;
}
} else {
}
}
break;
}

return grammar_map;
});
instaparse.cfg.build_parser = (function instaparse$cfg$build_parser(spec,output_format){
var rules = instaparse.gll.parse(instaparse.cfg.cfg,new cljs.core.Keyword(null,"rules","rules",1198912366),spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57007_57060 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57008_57061 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57009_57062 = true;
var _STAR_print_fn_STAR__temp_val__57010_57063 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57009_57062);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57010_57063);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57008_57061);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57007_57060);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], 0));
} else {
var productions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules);
var start_production = cljs.core.first(cljs.core.first(productions));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,productions))),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function instaparse$cfg$build_parser_from_combinators(grammar_map,output_format,start_production){
if((start_production == null)){
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument."], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});
/**
 * Takes an EBNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.
 * Useful for combining with other combinators.
 */
instaparse.cfg.ebnf = (function instaparse$cfg$ebnf(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57064 = arguments.length;
var i__4790__auto___57065 = (0);
while(true){
if((i__4790__auto___57065 < len__4789__auto___57064)){
args__4795__auto__.push((arguments[i__4790__auto___57065]));

var G__57066 = (i__4790__auto___57065 + (1));
i__4790__auto___57065 = G__57066;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return instaparse.cfg.ebnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(instaparse.cfg.ebnf.cljs$core$IFn$_invoke$arity$variadic = (function (spec,p__57013){
var map__57014 = p__57013;
var map__57014__$1 = (((((!((map__57014 == null))))?(((((map__57014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57014):map__57014);
var opts = map__57014__$1;
var _STAR_case_insensitive_literals_STAR__orig_val__57016 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__57017 = new cljs.core.Keyword(null,"string-ci","string-ci",374631805).cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"default","default",-1987822328));
(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__57017);

try{var rules = instaparse.gll.parse(instaparse.cfg.cfg,new cljs.core.Keyword(null,"rules-or-parser","rules-or-parser",-314380386),spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57018_57067 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57019_57068 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57020_57069 = true;
var _STAR_print_fn_STAR__temp_val__57021_57070 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57020_57069);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57021_57070);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57019_57068);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57018_57067);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rule","rule",729973257),cljs.core.ffirst(rules))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules));
} else {
return instaparse.cfg.build_rule(cljs.core.first(rules));

}
}
}finally {(instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__57016);
}}));

(instaparse.cfg.ebnf.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(instaparse.cfg.ebnf.cljs$lang$applyTo = (function (seq57011){
var G__57012 = cljs.core.first(seq57011);
var seq57011__$1 = cljs.core.next(seq57011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57012,seq57011__$1);
}));


//# sourceMappingURL=instaparse.cfg.js.map