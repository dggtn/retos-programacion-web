"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3520],{3848:function(e){function lisp(e){!function(e){function simple_form(e){return RegExp(/(\()/.source+"(?:"+e+")"+/(?=[\s\)])/.source)}function primitive(e){return RegExp(/([\s([])/.source+"(?:"+e+")"+/(?=[\s)])/.source)}var n=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,s="&"+n,a="(\\()",r="(?=\\s)",t=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,i={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+n+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+n),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+n),alias:"property"},splice:{pattern:RegExp(",@?"+n),alias:["symbol","variable"]},keyword:[{pattern:RegExp(a+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+r),lookbehind:!0},{pattern:RegExp(a+"(?:append|by|collect|concat|do|finally|for|in|return)"+r),lookbehind:!0}],declare:{pattern:simple_form(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:simple_form(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:primitive(/nil|t/.source),lookbehind:!0},number:{pattern:primitive(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(a+"def(?:const|custom|group|var)\\s+"+n),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(n)}},defun:{pattern:RegExp(a+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+n+/\s+\(/.source+t+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+n),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(a+"lambda\\s+\\(\\s*(?:&?"+n+"(?:\\s+&?"+n+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(a+n),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},o={"lisp-marker":RegExp(s),varform:{pattern:RegExp(/\(/.source+n+/\s+(?=\S)/.source+t+/\)/.source),inside:i},argument:{pattern:RegExp(/(^|[\s(])/.source+n),lookbehind:!0,alias:"variable"},rest:i},l="\\S+(?:\\s+\\S+)*",p={pattern:RegExp(a+t+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+l),inside:o},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+l),inside:o},keys:{pattern:RegExp("&key\\s+"+l+"(?:\\s+&allow-other-keys)?"),inside:o},argument:{pattern:RegExp(n),alias:"variable"},punctuation:/[()]/}};i.lambda.inside.arguments=p,i.defun.inside.arguments=e.util.clone(p),i.defun.inside.arguments.inside.sublist=p,e.languages.lisp=i,e.languages.elisp=i,e.languages.emacs=i,e.languages["emacs-lisp"]=i}(e)}e.exports=lisp,lisp.displayName="lisp",lisp.aliases=[]}}]);