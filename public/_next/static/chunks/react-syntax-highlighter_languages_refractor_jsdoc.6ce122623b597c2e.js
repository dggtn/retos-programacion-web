"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8825,902,9461],{9858:function(e){function javadoclike(e){!function(e){var a=e.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function docCommentSupport(a,t){var n="doc-comment",s=e.languages[a];if(s){var i=s[n];if(!i){var r={};r[n]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},i=(s=e.languages.insertBefore(a,"comment",r))[n]}if(i instanceof RegExp&&(i=s[n]={pattern:i}),Array.isArray(i))for(var o=0,p=i.length;o<p;o++)i[o]instanceof RegExp&&(i[o]={pattern:i[o]}),t(i[o]);else t(i)}}Object.defineProperty(a,"addSupport",{value:function(e,a){"string"==typeof e&&(e=[e]),e.forEach(function(e){docCommentSupport(e,function(e){e.inside||(e.inside={}),e.inside.rest=a})})}}),a.addSupport(["java","javascript","php"],a)}(e)}e.exports=javadoclike,javadoclike.displayName="javadoclike",javadoclike.aliases=[]},25319:function(e,a,t){var n=t(9858),s=t(4979);function jsdoc(e){var a,t,i;e.register(n),e.register(s),a=e.languages.javascript,i="(@(?:arg|argument|param|property)\\s+(?:"+(t=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source)+"\\s+)?)",e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(i+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(i+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return t})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+t),lookbehind:!0,inside:{string:a.string,number:a.number,boolean:a.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}e.exports=jsdoc,jsdoc.displayName="jsdoc",jsdoc.aliases=[]},4979:function(e){function typescript(e){var a;e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"],a=e.languages.extend("typescript",{}),delete a["class-name"],e.languages.typescript["class-name"].inside=a,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:a}}}}),e.languages.ts=e.languages.typescript}e.exports=typescript,typescript.displayName="typescript",typescript.aliases=["ts"]}}]);