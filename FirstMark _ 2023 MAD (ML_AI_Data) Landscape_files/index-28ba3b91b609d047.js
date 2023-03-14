(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1859)}])},8511:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(5893),c=t(2981),l=t(9305);function o(e){let{company:r,className:t,...o}=e;return(0,n.jsxs)("li",{className:"flex flex-col items-start gap-3 rounded-lg border-2 bg-white p-5 dark:bg-slate-900 ".concat(t),...o,children:[(0,n.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,n.jsx)(c.Z,{company:r,className:"rounded-md"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-lg font-bold",children:r["Company Name"]}),r.Country&&(0,n.jsx)("span",{children:r.Country})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-0",children:[r["Year Founded"]&&(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"font-bold",children:"Founding Year: "}),r["Year Founded"]]}),r["Total Funding (in Millions)"]&&(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"font-bold",children:"Total Funding: "}),"$".concat(r["Total Funding (in Millions)"],"M")]})]}),(0,n.jsx)(l.Z,{className:"max-w-full overflow-hidden text-clip leading-5 text-purple-400 line-clamp-1",link:{url:r.URL,label:r.URL,isTargetBlank:!0}}),(0,n.jsx)("p",{className:"overflow-hidden text-ellipsis leading-5",style:{lineClamp:12},children:r.Description})]})}},2981:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),c=t(6772);function l(e){var r;let{company:t,className:l,...o}=e,a=null===(r=t["Processed Logo URL"])||void 0===r?void 0:r.split("upload/").pop();return a?(0,n.jsx)("div",{className:"relative flex min-h-[30px] w-auto items-center justify-center bg-white p-3 ".concat(l),...o,children:(0,n.jsx)(c.bz,{width:180,height:60,title:t["Company Name"],alt:t["Company Name"],className:"h-[30px] w-auto max-w-[140px] overflow-hidden object-contain",src:decodeURI(a),rawTransformations:["e_trim"]})}):null}},1859:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return k},default:function(){return j}});var n=t(5893),c=t(7294);let l=c.createContext({selectedCompany:void 0,setSelectedCompany:()=>Promise.resolve()}),o=e=>{let{children:r}=e,[t,o]=(0,c.useState)();return(0,c.useEffect)(()=>{let e=e=>{let r=e.target,t=document.getElementById("selected-company-modal");t&&t.contains(r)||o(void 0)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[t,o]),(0,n.jsx)(l.Provider,{value:{selectedCompany:t,setSelectedCompany:o},children:r})};l.Consumer;let a=()=>(0,c.useContext)(l);var s=t(8511);let d=e=>{let{zoomScale:r,setZoomScale:t}=e;return(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("button",{className:"mb-0 flex h-9 w-9 min-w-min items-center justify-center rounded-none rounded-t-full border border-gray-300 bg-gray-100 text-lg outline-none transition duration-200 ease-in-out hover:bg-purple-400 hover:shadow-md disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-purple-400 dark:disabled:bg-gray-400",title:"Zoom In",disabled:r>=1.5,onClick(){t(r+.25)},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}),(0,n.jsx)("div",{className:"inline-block h-9 w-9 min-w-min cursor-default border border-y-0 border-gray-300 bg-white py-2 text-center align-baseline text-xs font-medium dark:bg-gray-700",children:"".concat(Math.round(100*r),"%")}),(0,n.jsx)("button",{className:"mb-0 flex h-9 w-9 min-w-min items-center justify-center rounded-none rounded-b-full border border-gray-300 bg-gray-100 text-lg outline-none transition duration-200 ease-in-out hover:bg-purple-400 hover:shadow-md disabled:bg-gray-300 dark:bg-gray-700 dark:hover:bg-purple-400 dark:disabled:bg-gray-400",title:"Zoom Out",disabled:r<=.25,onClick(){t(r-.25)},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-6 w-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"})})})]})};var i=t(6254),u=t(9957),m=t(1664),x=t.n(m),p=t(2981);function f(e){let{company:r}=e,{selectedCompany:t,setSelectedCompany:c}=a();return(0,n.jsx)("div",{className:"relative",children:(0,n.jsx)("button",{className:"cursor-pointer",onClick(){r!==t?c(r):c(void 0)},children:(0,n.jsx)(p.Z,{company:r,className:"rounded-md border border-white hover:border-purple-400 dark:hover:border-purple-400"})})},r.id)}function h(e){let{category:r,companies:t,className:c}=e,l=r["Min Width"]?r["Min Width"]:150*Math.ceil(t.length/5);return(0,n.jsxs)("li",{className:"relative flex flex-1 break-inside-avoid gap-4 py-4",style:{minWidth:"".concat(l,"px"),maxWidth:t.length>6?"100%":"200px"},children:[(0,n.jsx)(x(),{href:"/card#".concat(r.id),className:"absolute left-0 top-0 z-10 bg-white px-4 text-xl font-bold dark:bg-slate-900",children:r.Label}),(0,n.jsx)("div",{className:"flex flex-row flex-wrap items-center justify-around gap-3\n        rounded-tr-lg border-t-2 border-r-2 p-5 ".concat(c),children:t.sort((e,r)=>e["Sort Index"]-r["Sort Index"]).map(e=>(0,n.jsx)(f,{company:e},e.id))})]})}function g(e){let{category:r,companies:t,className:c,subCategories:l}=e,o=(0,i.v)(t,e=>e["Linked SubCategory"][0]);return(0,n.jsxs)("li",{className:"relative flex h-auto w-fit rounded-lg border-2 p-5 ".concat(c),style:{gridArea:"c".concat(r["Sort Order"])},children:[(0,n.jsx)(x(),{className:"absolute -top-4 z-10 bg-white px-4 text-3xl font-bold dark:bg-slate-900",href:"/card#".concat(r.id),children:r.Name}),(0,n.jsx)("ul",{className:"mt-5 flex flex-row flex-wrap justify-items-stretch gap-4 p-2",children:l.sort((e,r)=>e["Sort Order"]-r["Sort Order"]).map(e=>{let r=o[e.id];return(0,n.jsx)(h,{category:e,companies:r,className:c},e.id)})})]})}let b=e=>{let{companies:r,categories:t,subCategories:c}=e,l=(0,i.v)(r,e=>e["Linked Category"][0]);return(0,n.jsx)(n.Fragment,{children:t.sort((e,r)=>e["Sort Order"]-r["Sort Order"]).map(e=>{let r="".concat(u.V[e.Color]," ").concat(u.z[e.Color]),t=l[e.id];if(!t)return null;let o=c.filter(e=>t.find(r=>e.id===r["Linked SubCategory"][0]));return(0,n.jsx)(g,{category:e,subCategories:o,companies:t,className:r},e.id)})})},v=(0,c.memo)(b);function w(e){let{companies:r,categories:t,subCategories:l}=e,o=(0,c.useRef)(null),i=(0,c.useRef)(null),[u,m]=(0,c.useState)(.5),{selectedCompany:x,setSelectedCompany:p}=a();return(0,c.useEffect)(()=>{window.scrollTo(0,1)},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{ref:i,className:"relative h-[calc(100vh-128px)] w-full max-w-[100vw] overflow-auto",children:[(0,n.jsx)("div",{className:"sticky top-4 left-4 z-10 w-fit",children:(0,n.jsx)(d,{zoomScale:u,setZoomScale:m})}),(0,n.jsx)("div",{className:"absolute top-0 left-10 z-0 h-screen",children:(0,n.jsx)("ul",{ref:o,className:"mt-5 grid gap-5 p-5",style:{transform:"scale(".concat(u,")"),transition:"transform 0.2s ease",transformOrigin:"0% 0%",width:"8500px",gridTemplateAreas:"\n              'c1 c1 c1 c1 c2 c3 c3 c4 c4 c4 c4 c4'\n              'c1 c1 c1 c1 c2 c3 c3 c4 c4 c4 c4 c4'\n              'c1 c1 c1 c1 c2 c3 c3 c5 c5 c5 c5 c5'\n              'c1 c1 c1 c1 c2 c3 c3 c5 c5 c5 c5 c5'\n              'c1 c1 c1 c1 c2 c3 c3 c6 c6 c6 c6 c6'\n              'c1 c1 c1 c1 c2 c3 c3 c6 c6 c6 c6 c6'\n              'c7 c7 c7 c7 c7 c7 c7 c7 c7 c7 c7 c7'\n              'c8 c8 c8 c8 c8 c8 c8 c8 c8 c9 c9 c9'\n              "},children:(0,n.jsx)(v,{companies:r,categories:t,subCategories:l})})})]}),x&&(0,n.jsxs)("div",{className:"absolute right-2 bottom-2 z-50 flex w-full max-w-[calc(min(420px,100%-16px))] flex-col overflow-hidden transition-opacity duration-200",children:[(0,n.jsx)(s.Z,{id:"selected-company-modal",company:x,"data-company":x.id}),(0,n.jsx)("button",{className:"absolute top-3 right-3 stroke-black hover:stroke-purple-400 dark:stroke-white dark:hover:stroke-purple-400",onClick(){p(void 0)},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,className:"h-6 w-6 ",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]})]})}var k=!0;function j(e){let{companies:r,categories:t,subCategories:c}=e;return(0,n.jsx)(o,{children:(0,n.jsx)(w,{companies:r,categories:t,subCategories:c})})}},6254:function(e,r,t){"use strict";var n,c;t.d(r,{v:function(){return l}});let l=(e,r)=>e.reduce((e,t)=>(((n=e)[c=r(t)]||(n[c]=[])).push(t),e),{})},9957:function(e,r,t){"use strict";t.d(r,{V:function(){return n},z:function(){return c}});let n={red:"border-fmred dark:border-red-400",blue:"border-fmblue dark:border-blue-400",gold:"border-fmgold dark:border-yellow-400",purple:"border-fmpurple dark:border-purple-400",green:"border-fmgreen dark:border-green-400",teal:"border-fmteal dark:border-teal-400",navy:"border-fmnavy dark:border-gray-200"},c={red:"text-fmred dark:text-red-400",blue:"text-fmblue dark:text-blue-400",gold:"text-fmgold dark:text-yellow-400",purple:"text-fmpurple dark:text-purple-400",green:"text-fmgreen dark:text-green-400",teal:"text-fmteal dark:text-teal-400",navy:"text-fmnavy dark:text-gray-200"}}},function(e){e.O(0,[772,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);