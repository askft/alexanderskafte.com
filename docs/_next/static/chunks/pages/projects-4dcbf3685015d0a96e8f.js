_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},RHEb:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var i=n("rePB"),r=n("Ff2n"),s=n("nKUr"),c=n("8Kt/"),a=n.n(c),o=n("YFqc"),l=n.n(o);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=[{url:"https://github.com/askft",title:"GitHub"},{url:"https://www.linkedin.com/in/alexanderskafte/",title:"LinkedIn"},{url:"https://instagram.com/alexanderskafte/",title:"Instagram"}];function b(){return Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(a.a,{children:Object(s.jsx)("title",{children:"Alexander Skafte - Projects"})}),Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"topbar",children:[Object(s.jsx)("h1",{children:Object(s.jsx)(l.a,{href:"/",children:"Alexander Skafte"})}),Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)("div",{className:"link active",children:Object(s.jsx)(l.a,{href:"/projects",children:Object(s.jsx)("a",{children:"Projects"})})}),j.map((function(e,t){return Object(s.jsx)("div",{className:"link",children:Object(s.jsx)(m,{href:e.url,children:e.title})},t)}))]})]})})}),Object(s.jsx)(u,{})]})}var m=function(e){var t=e.children,n=Object(r.a)(e,["children"]);return Object(s.jsx)("a",h(h({target:"_blank",rel:"noreferrer"},n),{},{children:t}))},p=function(e){var t=e.title,n=e.date,i=e.children,c=e.className,a=Object(r.a)(e,["title","date","children","className"]);return Object(s.jsx)("div",h(h({className:"project "+c},a),{},{children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h3",{children:t}),Object(s.jsx)("span",{className:"date",children:n})]}),Object(s.jsx)("div",{className:"content",children:i})]})}))},u=function(){return Object(s.jsxs)("div",{className:"projects",children:[Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"projects-intro",children:[Object(s.jsxs)("p",{children:["I like to explore what can be done with software and have done so over time by working on a few projects. Favorite languages/tools are"," ",Object(s.jsx)("b",{children:"Golang"}),", ",Object(s.jsx)("b",{children:"React"}),", ",Object(s.jsx)("b",{children:"Node"})," and ",Object(s.jsx)("b",{children:"C"})," and"," ",Object(s.jsx)("b",{children:"Python"}),"."]}),Object(s.jsx)("p",{children:"Below are a few of my software hobby projects, along with some projects from university."})]})}),Object(s.jsx)(p,{title:"Master's Thesis Project in ML and NLP",date:"ongoing 2020",children:Object(s.jsxs)("p",{children:["Using ",Object(s.jsx)("b",{children:"machine learning"})," and ",Object(s.jsx)("b",{children:"natural language processing"}),"techniques to extract protein-protein interactions from biomedical research papers using named-entity recognition and relationship extraction. Technologies used include ",Object(s.jsx)("b",{children:"Python"}),", ",Object(s.jsx)("b",{children:"TensorFlow"})," ","and ",Object(s.jsx)("b",{children:"BERT"}),". Code is available"," ",Object(s.jsx)(m,{href:"https://github.com/askft/thesis-code",children:"here"}),"."]})}),Object(s.jsxs)(p,{title:"Anonymous Hyper-Real-Time Chat",date:"November 2020",children:[Object(s.jsx)("p",{children:"A chat which shows each user's message as it is being typed. It may not sound like a big deal but in fact it makes conversation extremely fun and engaging. By design this kind of chat encourages a synchronous type of conversation, much like that which we engage in offline."}),Object(s.jsx)("p",{children:'Additionally the chat allows for anonymity but with the option to identify oneself via a so-called "tripcode"\u2014the result of running a user-supplied secret through a hash algorithm.'}),Object(s.jsxs)("p",{children:["The advantages of an anonymous hyper-real-time chat are manifold:"," ",Object(s.jsx)("b",{children:"(I)"})," no user registration is required, so anyone can join the conversation instantly, ",Object(s.jsx)("b",{children:"(II)"})," shifts the focus onto quality of content, naturally defeating credentialism, ",Object(s.jsx)("b",{children:"(III)"})," conversation moves forward very fast even if only a couple of people are typing and"," ",Object(s.jsx)("b",{children:"(IV)"}),' since you see what people type in real time, "talking past each other" becomes less of an issue.']}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:Object(s.jsx)(m,{href:"/chat",children:"A demo is available here!"})})," ","Messages are removed after 12 hours. I'm ",Object(s.jsx)("code",{children:"5VkEelUtSM"}),"."]}),Object(s.jsxs)("p",{children:["Built with ",Object(s.jsx)("b",{children:"Socket.IO"}),", ",Object(s.jsx)("b",{children:"React"}),", ",Object(s.jsx)("b",{children:"Node"}),", ",Object(s.jsx)("b",{children:"SQLite3"})," ","and ",Object(s.jsx)("b",{children:"NGINX"}),"."]})]}),Object(s.jsx)(p,{title:"Go Behave",date:"December 2018",children:Object(s.jsxs)("p",{children:["Go Behave is a behavior tree library in Golang. A behavior tree is a formalism for describing the behavior of an autonomous entity such as a robot or a non-player character in a video game. It allows for highly modular behavior design thanks to the composability of its nodes, and the formalism makes task switching and state management trivial. Please refer to the"," ",Object(s.jsx)(m,{href:"https://github.com/askft/go-behave",children:"project repository"})," ","for more information."]})}),Object(s.jsxs)(p,{title:"2D Video Game & Engine",date:"October 2018 \u2013 current",children:[Object(s.jsx)("p",{children:"A video game in a homemade engine that allows for, among other features:"}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Artificial intelligence"})," via"," ",Object(s.jsx)(m,{href:"https://github.com/askft/go-behave",children:"behavior trees"})," ","that can be defined in a custom-built simple declarative language, allowing for e.g. game designers without programming experience to design agents with intelligent behavior."]}),Object(s.jsxs)("li",{children:["Efficient ",Object(s.jsx)("b",{children:"collision detection and resolution"})," via spatial partitioning."]}),Object(s.jsxs)("li",{children:["Loading and rendering of ",Object(s.jsx)("b",{children:"tilemaps and tilesets"})," built using the"," ",Object(s.jsx)(m,{href:"https://www.mapeditor.org/",children:"Tiled Map Editor"}),"."]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("b",{children:"Easy development of features"})," thanks to a highly modular implementation of an"," ",Object(s.jsx)(m,{href:"https://en.wikipedia.org/wiki/Entity\u2013component\u2013system",children:"Entity-Component-System"})," ","architecture."]})]}),Object(s.jsx)("p",{children:"The code is private but I'll gladly discuss it with anyone curious."})]}),Object(s.jsx)(p,{title:"Kademlia",date:"October 2018",children:Object(s.jsxs)("p",{children:["A Golang implementation of Kademlia, a distributed hash table for decentralized peer-to-peer computer networks. Unfinished, but code is available ",Object(s.jsx)(m,{href:"https://github.com/askft/kademlia",children:"here"}),"."]})}),Object(s.jsx)(p,{title:"Self-Balancing Robot",date:"November\u2013December 2017",children:Object(s.jsxs)("p",{children:["In a control systems project course, three other students and I built a self-balancing two-wheeled robot using LEGO Mindstorms components. We implemented and compared two different control strategies: PID control and linear-quadratic control. We compared two different filtering methods\u2014Kalman filtering and complementary filtering\u2014for the measurements taken by a gyroscope and an accelerometer. The control algorithms were implemented first in Simulink and then in leJOS on a LEGO Mindstorms EV3 microprocessor. The project report can be found"," ",Object(s.jsx)(m,{href:"/lego.pdf",children:"here"}),"."]})}),Object(s.jsx)(p,{title:"Extremum-Seeking Control",date:"April\u2013June 2017",children:Object(s.jsxs)("p",{children:["As the final project in an advanced course in control theory I chose to investigate an area of control engineering known as extremum-seeking control. While the aim of conventional control is to drive the output of a system to a predetermined reference value, the purpose of extremum-seeking control is to create a controller that finds an optimal reference value for a system to operate at. This type of control is often used within the process industry to optimize system performance and subsequently minimize resource usage. The project report can be found ",Object(s.jsx)(m,{href:"/esc.pdf",children:"here"}),"."]})}),Object(s.jsx)(p,{title:"Reduction of Static Noise in Real Time",date:"February 2017",children:Object(s.jsxs)("p",{children:["In a digital signal processing project course, a fellow student and I investigated and implemented an algorithm for reducing static audial noise in real time. The solution was implemented on a SHARC DSP. The project report can be found ",Object(s.jsx)(m,{href:"/noise.pdf",children:"here"}),"."]})}),Object(s.jsxs)(p,{title:"Miscellaneous",date:"Undated",children:[Object(s.jsx)("p",{children:"Just various stuff."}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(m,{href:"/unix.html",children:"Unix Timestamp Converter"})}),Object(s.jsx)("li",{children:Object(s.jsx)(m,{href:"/money.html",children:"Investment Return Calculator"})}),Object(s.jsx)("li",{children:Object(s.jsx)(m,{href:"/mandarin/index.html",children:"Mandarin practice vocabulary from 2016"})})]})]})]})}}},[["D85t",0,1,2,3]]]);