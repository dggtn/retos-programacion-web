"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3047],{93205:function(e){function markupTemplating(e){!function(e){function getPlaceholder(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,a,o){if(n.language===t){var r=n.tokenStack=[];n.code=n.code.replace(a,function(e){if("function"==typeof o&&!o(e))return e;for(var a,l=r.length;-1!==n.code.indexOf(a=getPlaceholder(t,l));)++l;return r[l]=e,a}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var a=0,o=Object.keys(n.tokenStack);walkTokens(n.tokens)}function walkTokens(r){for(var l=0;l<r.length&&!(a>=o.length);l++){var u=r[l];if("string"==typeof u||u.content&&"string"==typeof u.content){var i=o[a],p=n.tokenStack[i],c="string"==typeof u?u:u.content,s=getPlaceholder(t,i),g=c.indexOf(s);if(g>-1){++a;var k=c.substring(0,g),f=new e.Token(t,e.tokenize(p,n.grammar),"language-"+t,p),m=c.substring(g+s.length),h=[];k&&h.push.apply(h,walkTokens([k])),h.push(f),m&&h.push.apply(h,walkTokens([m])),"string"==typeof u?r.splice.apply(r,[l,1].concat(h)):u.content=h}}else u.content&&walkTokens(u.content)}return r}}}})}(e)}e.exports=markupTemplating,markupTemplating.displayName="markupTemplating",markupTemplating.aliases=[]}}]);