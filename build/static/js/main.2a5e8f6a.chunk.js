(this["webpackJsonpword-problem-solver"]=this["webpackJsonpword-problem-solver"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"questionText":"Rhonda has 12 marbles more than Douglas. Douglas has 6 marbles m,ore than Bertha. Rhonda has twice as many marbles as Bertha has. How many marbles does Douglas have?","answerOptions":[{"answerText":"Douglas has 2. Bertha has 34. Rhonda has 3","isCorrect":false},{"answerText":"Douglas has 6. Bertha has 12. Rhonda has 1","isCorrect":false},{"answerText":"Douglas has 24. Bertha has 18. Rhonda has 36","isCorrect":true},{"answerText":"Douglas has 28. Bertha has 34. Rhonda has 3","isCorrect":false}]},{"questionText":"Bob has 8 pigeons. Sam has 432 pigeons. How many pigeons do they have together?","answerOptions":[{"answerText":"440 pigeons","isCorrect":true},{"answerText":"12 pigeons","isCorrect":false},{"answerText":"431 pigeons","isCorrect":false},{"answerText":"1 pigeon","isCorrect":false}]},{"questionText":"Dorothy has 12 cats and Shirley has 13 cats. How many more cats does Shirley have than Dorothy?","answerOptions":[{"answerText":"2 cats","isCorrect":false},{"answerText":"3 cats","isCorrect":false},{"answerText":"4 cats","isCorrect":false},{"answerText":"1 cat","isCorrect":true}]},{"questionText":"A day has 24 hours. Matthew spent 14 of them sleeping. How many hours are left in the day?","answerOptions":[{"answerText":"10 hours","isCorrect":false},{"answerText":"4 hours","isCorrect":true},{"answerText":"8 hours","isCorrect":false},{"answerText":"17 hours","isCorrect":false}]},{"questionText":"Your mom gives you 10 dollars. If you spend 3 dollars, how many dollars do you have?","answerOptions":[{"answerText":"11 dollars","isCorrect":false},{"answerText":"7 dollars","isCorrect":true},{"answerText":"3 dollars","isCorrect":false},{"answerText":"10 dollars","isCorrect":false}]}]')},23:function(e,s,t){},24:function(e,s,t){},25:function(e,s,t){},32:function(e,s,t){},33:function(e,s,t){},34:function(e,s,t){"use strict";t.r(s);var n=t(0),a=t.n(n),r=t(17),o=t.n(r),c=(t(23),t(24),t(25),t(9)),i=t(1);var l=function(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsx)("p",{className:"navbar-component",children:Object(i.jsx)(c.b,{to:"/",style:{textDecoration:"none",color:"#F6DD90"},children:"Word Problem Solver"})}),Object(i.jsx)("p",{className:"navbar-component",children:Object(i.jsx)(c.b,{to:"/take-quiz",style:{textDecoration:"none",color:"#F6DD90"},children:"Take Quiz"})})]})},u=t(8);t(32);var h=function(){var e=a.a.useRef(null),s={},t=[],r=0,o=[],c=Object(n.useState)([]),l=Object(u.a)(c,2),h=l[0],j=l[1],b=Object(n.useState)([]),d=Object(u.a)(b,2),x=d[0],p=d[1];return Object(n.useEffect)((function(){}),[h]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"input-form",children:Object(i.jsxs)("form",{onSubmit:function(n){n.preventDefault(),fetch("/wolfram",{method:"POST",cache:"no-cache",headers:{content_type:"application/json"},body:JSON.stringify(e.current.value)}).then((function(e){return e.json()})).then((function(e){if(!1===e.queryresult.success)o.push("Can't solve word problem. Try another problem!");else{var n;for(s=e.queryresult,r=s.numpods,n=0;n<r;n++){var a,c=s.pods[n],i=c.numsubpods;for(a=0;a<i;a++)o.push(JSON.stringify(c.subpods[a].plaintext))}var l,u=e.topics;for(l=0;l<u.length;l++)t.push(JSON.stringify(u[l]))}j(o),p(t)}))},children:[Object(i.jsxs)("label",{className:"textbox-label",children:["Put word problem here:",Object(i.jsx)("input",{className:"input-component",type:"text",name:"problem",ref:e})]}),Object(i.jsx)("input",{className:"submit",type:"submit",value:"Submit"})]})}),Object(i.jsxs)("div",{className:"query-text",children:[h.map((function(e,s){var t=e.split("\\n").map((function(e){return Object(i.jsx)("p",{className:"queries",children:e})}));return Object(i.jsxs)("div",{children:[t,Object(i.jsx)("br",{})]})})),x.map((function(e,s){return Object(i.jsx)("p",{className:"topics",children:e})}))]})]})},j=(t(33),t(10));var b=function(){var e=Object(n.useState)(0),s=Object(u.a)(e,2),t=s[0],a=s[1],r=Object(n.useState)(!1),o=Object(u.a)(r,2),c=o[0],l=o[1],h=Object(n.useState)(0),b=Object(u.a)(h,2),d=b[0],x=b[1];return Object(i.jsx)("div",{className:"quiz-body",children:Object(i.jsx)("div",{className:"quiz",children:c?Object(i.jsxs)("div",{className:"score-section",children:["You scored ",d," out of ",j.length]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"question-section",children:[Object(i.jsxs)("div",{className:"question-count",children:[Object(i.jsxs)("span",{children:["Question ",t+1]}),"/",j.length]}),Object(i.jsx)("div",{className:"question-text",children:j[t].questionText})]}),Object(i.jsx)("div",{className:"answer-section",children:j[t].answerOptions.map((function(e){return Object(i.jsx)("button",{onClick:function(){return function(e){e&&x(d+1);var s=t+1;s<j.length?a(s):l(!0)}(e.isCorrect)},children:e.answerText})}))})]})})})},d=t(2);var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{path:"/take-quiz",component:Object(d.f)(b)}),Object(i.jsx)(d.a,{path:"/",component:Object(d.f)(h)})]})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,r=s.getLCP,o=s.getTTFB;t(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(c.a,{children:Object(i.jsx)(x,{})})}),document.getElementById("root")),p()}},[[34,1,2]]]);
//# sourceMappingURL=main.2a5e8f6a.chunk.js.map