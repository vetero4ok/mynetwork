(this.webpackJsonpmynetwork=this.webpackJsonpmynetwork||[]).push([[0],{12:function(e,t,a){e.exports={sidebar:"Navbar_sidebar__1wpjc",item:"Navbar_item__2ZLbJ",activeLink:"Navbar_activeLink__2YsRQ",blockFriends:"Navbar_blockFriends__20-rz"}},127:function(e,t,a){},128:function(e,t,a){e.exports={posts:"MyPosts_posts__2H1K1"}},129:function(e,t,a){e.exports={item:"Posts_item__VfFga",active:"Posts_active__23wSf"}},158:function(e,t,a){},162:function(e,t,a){},21:function(e,t,a){e.exports={myInfo:"ProfileInfo_myInfo__2siFq",logos:"ProfileInfo_logos__C_jHK",statusWrap:"ProfileInfo_statusWrap__e1CI6",status:"ProfileInfo_status__3t5hw"}},286:function(e,t,a){"use strict";a.r(t),a.d(t,"renderEntireTree",(function(){return Ut}));var n=a(1),s=a.n(n),i=(a(158),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,288)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))}),c=a(59),r=a.n(c),o=a(16),l=a(17),u=a(19),d=a(18),j=(a(162),a(11)),b=a(12),p=a.n(b),m=a(4),f=a(50),h=a.n(f),g=a(0),O=function(e){var t=e.dialogsData.map((function(e){return Object(g.jsxs)("div",{className:h.a.items,children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:e.avatar,alt:""})}),Object(g.jsx)("div",{className:h.a.name,children:e.name})]},e.id)}));return Object(g.jsxs)("div",{className:h.a.mane,children:[Object(g.jsx)("h1",{children:"Friends"}),Object(g.jsx)("div",{className:h.a.flexContainer,children:t})]})},x=a(9),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(O,Object(m.a)({},this.props))}}]),a}(s.a.Component),A=Object(x.b)((function(e){return{dialogsData:e.dialogPage.dialogsData}}),{})(v),w=function(){return Object(g.jsxs)("nav",{className:p.a.sidebar,children:[" ",Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(g.jsx)("div",{className:p.a.item,children:Object(g.jsx)(j.b,{to:"/friends",activeClassName:p.a.activeLink,children:"Friends"})}),Object(g.jsx)("div",{className:p.a.blockFriends,children:Object(g.jsx)(A,{})})]})},P=a(10);function y(){return Object(g.jsx)("div",{children:"News"})}function k(){return Object(g.jsx)("div",{children:"Music"})}function C(){return Object(g.jsx)("div",{children:"Settings"})}var I=a(39),N=a(126),F=a.n(N).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ed866548-b66a-44f9-8f52-2b761c116c4c"}}),B=function(e,t){return F.get("users?page=".concat(e,"&count=").concat(t))},S=function(e){return F.post("follow/".concat(e))},D=function(e){return F.delete("follow/".concat(e))},E=function(e){return F.get("profile/".concat(e))},R=function(e){return F.get("profile/status/".concat(e))},T=function(e){return F.put("profile/status/",{status:e})},M=function(){return F.get("auth/me")},U=function(e,t,a,n){return F.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},Z=function(){return F.delete("auth/login")},L={users:[],pageSize:5,totalUsersCount:0,currentPages:1,isFetching:!1,followingInProcess:[]},Q="FOLLOW",_="UNFOLLOW",z="SET-USERS",W="SET-CURRENT_PAGE",G="TOTAL-USER-COUNT",H="TOGGLE-IS-FETCHING",J="TOGGLE-IN-PROCESS",V=function(e){return{type:H,isFetching:e}},Y=function(e,t){return{type:J,followingInProcess:e,userID:t}},X=a(86),K=a.n(X),q=a.p+"static/media/user.de6feba5.png",$=function(e){for(var t=[],a=1;a<=20;a++)t.push(a);return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:t.map((function(t,a){return Object(g.jsx)("span",{className:e.currentPages===t?K.a.selectedPages:"",onClick:function(a){e.onPageChanged(t)},children:t},a)}))}),e.users.map((function(t){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(j.b,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{alt:"",src:null!==t.photos.small?t.photos.small:q,className:K.a.userPhoto})})}),Object(g.jsx)("div",{children:t.followed?Object(g.jsx)("button",{disabled:e.followingInProcess.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:e.followingInProcess.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]}),Object(g.jsx)("span",{})]})]},t.id)}))]})},ee=a.p+"static/media/preloader.b2a8fa3d.gif",te=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{src:ee,style:{width:"30px",height:"30px"},alt:"loaders"})})},ae=a(8),ne=a(32),se=function(e){return{isAuth:e.auth.isAuth}};function ie(e){return Object(x.b)(se)((function(t){var a=t.isAuth,n=Object(ne.a)(t,["isAuth"]);return a?Object(g.jsx)(e,Object(m.a)({},n)):Object(g.jsx)(P.a,{to:"/login"})}))}var ce=function(e){return e.usersPage.users},re=function(e){return e.usersPage.pageSize},oe=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPages},ue=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProcess},je=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPages,this.props.pageSize)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(te,{}):null,Object(g.jsx)($,{users:this.props.users,pageSize:this.props.pageSize,totalUserCount:this.props.totalUserCount,currentPages:this.props.currentPages,followingInProcess:this.props.followingInProcess,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged})]})}}]),a}(s.a.Component),be=Object(ae.d)(Object(x.b)((function(e){return{users:ce(e),pageSize:re(e),totalUserCount:oe(e),currentPages:le(e),isFetching:ue(e),followingInProcess:de(e)}}),{follow:function(e){return function(t){t(Y(!0,e)),S(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:Q,userID:e}}(e)),t(Y(!1,e))}))}},unfollow:function(e){return function(t){t(Y(!0,e)),D(e).then((function(a){0===a.data.resultCode&&t(function(e){return{type:_,userID:e}}(e)),t(Y(!1,e))}))}},getUsers:function(e,t){return function(a){a(V(!0)),a({type:W,currentPages:e}),B(e,t).then((function(e){var t,n;a(V(!1)),a((t=e.data.items,{type:z,users:t})),a((n=e.data.totalCount,{type:G,totalUsersCount:n}))}))}}}),ie)(je),pe=a(127),me=a.n(pe),fe=a(21),he=a.n(fe),ge=a.p+"static/media/youtube.a5cac8fb.png",Oe=a.p+"static/media/vk.6c19e6f7.svg",xe=a.p+"static/media/twiter.9f903e55.png",ve=a.p+"static/media/metalink.0c325440.png",Ae=a.p+"static/media/instagram.b005695f.png",we=a.p+"static/media/website.f1b72cd3.png",Pe=a.p+"static/media/Facebook.4178d148.svg",ye=a(91),ke=function(e){var t=Object(n.useState)(!1),a=Object(ye.a)(t,2),s=a[0],i=a[1],c=Object(n.useState)(e.profileStatus),r=Object(ye.a)(c,2),o=r[0],l=r[1];Object(n.useEffect)((function(){l(e.profileStatus)}),[e.profileStatus]);var u=function(){i(!1),e.setStatusProfileTC(o)};return Object(g.jsxs)(g.Fragment,{children:[!s&&Object(g.jsx)("div",{children:Object(g.jsx)("span",{onDoubleClick:function(){return i(!0)},children:""===e.profileStatus?"My status":e.profileStatus})}),s&&Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",placeholder:"Input your status",value:o,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&u()},onBlur:u,autoFocus:!0})})]})},Ce=function(e){return e.profile||null!==e.profile?Object(g.jsxs)("div",{className:he.a.myInfo,children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:e.profile.photos.large,alt:"avatar"})}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:he.a.statusWrap,children:[Object(g.jsx)("div",{children:Object(g.jsx)("h2",{children:e.profile.fullName})}),Object(g.jsx)("div",{className:he.a.status,children:Object(g.jsx)(ke,{profileStatus:e.profileStatus,setStatusProfileTC:e.setStatusProfileTC})})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Contacts:"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:Pe,alt:"Facebook ",className:he.a.logos}),e.profile.contacts.facebook]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:Oe,alt:"VK ",className:he.a.logos}),e.profile.contacts.vk]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==",alt:"github ",className:he.a.logos}),e.profile.contacts.github]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:xe,alt:"twitter ",className:he.a.logos}),e.profile.contacts.twitter]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:Ae,alt:"instagram ",className:he.a.logos}),e.profile.contacts.instagram]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:ve,alt:"mainLink ",className:he.a.logos}),e.profile.contacts.mainLink]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:we,alt:"website ",className:he.a.logos}),e.profile.contacts.website]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:ge,alt:"youtube ",className:he.a.logos}),e.profile.contacts.youtube]})]})]})]}):Object(g.jsx)(te,{})},Ie=a(287),Ne={myPostsData:[{id:Object(Ie.a)(),massage:"Hi, how are you?",likesCounts:12},{id:Object(Ie.a)(),massage:"It is my first post!",likesCounts:15},{id:Object(Ie.a)(),massage:"hey!",likesCounts:1}],profile:null,profileStatus:""},Fe="ADD-POST-CALLBACK",Be="SET-USER-PROFILE",Se="SET-STATUS-PROFILE",De=function(e){return{type:Se,status:e}},Ee=a(128),Re=a.n(Ee),Te=a(129),Me=a.n(Te),Ue=function(e){return Object(g.jsxs)("div",{className:Me.a.item,children:[Object(g.jsx)("img",{src:"https://i.mycdn.me/i?r=AzEOxUXG5QgodWC3x6hM10Ckx0BZLGOfgD6nXhJoLZbA4MAmq-mVtRg1TeCwydjhl-Q&fn=sqr_288",alt:"ava"}),Object(g.jsxs)("span",{children:[" ",e.massage]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:Object(g.jsx)("button",{children:"Like"})}),Object(g.jsx)("span",{children:Object(g.jsx)("button",{children:e.likesCounts})})]})]})},Ze=a(123),Le=a(124),Qe=a(87),_e=a.n(Qe),ze=function(e){var t=e.red,a=e.className,n=Object(ne.a)(e,["red","className"]),s="".concat(t?_e.a.red:_e.a.default," ").concat(a);return Object(g.jsx)("button",Object(m.a)({className:s},n))},We=a(47),Ge=a.n(We),He=function(e){var t=e.input,a=e.meta,n=a.touched,s=a.error,i=(Object(ne.a)(a,["touched","error"]),Object(ne.a)(e,["input","meta"])),c=n&&s;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:Ge.a.formControl+" "+(c?Ge.a.error:""),children:Object(g.jsx)("input",Object(m.a)(Object(m.a)({},t),i))}),Object(g.jsx)("div",{children:c&&Object(g.jsx)("span",{children:s})})]})},Je=function(e){if(!e)return"Field required"},Ve=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols ")}},Ye=Ve(20),Xe=Object(Le.a)({form:"AddPostReduxForm"})((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)(Ze.a,{name:"newTextPost",component:He,validate:[Je,Ye],placeholder:"Enter your text"}),Object(g.jsx)(ze,{children:"send"})]})})})),Ke=Object(x.b)((function(e){return{myPostsData:e.profilePage.myPostsData}}),(function(e){return{addPostCallback:function(t){e({type:Fe,postMessage:t})}}}))((function(e){var t=e.myPostsData.map((function(e){return Object(g.jsx)(Ue,{massage:e.massage,likesCounts:e.likesCounts},e.id)}));return Object(g.jsxs)("div",{className:Re.a.posts,children:[Object(g.jsx)("div",{children:Object(g.jsx)("h3",{children:"My posts"})}),Object(g.jsx)("div",{children:Object(g.jsx)(Xe,{onSubmit:function(t){e.addPostCallback(t.newTextPost)}})}),Object(g.jsx)("div",{children:t})]})})),qe=function(e){return Object(g.jsxs)("div",{className:me.a.content,children:[Object(g.jsx)(Ce,{profile:e.profile,profileStatus:e.profileStatus,setStatusProfileTC:e.setStatusProfileTC}),Object(g.jsx)(Ke,{})]})},$e=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.setProfilePage(e),this.props.getStatusProfileTC(e)}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(qe,Object(m.a)(Object(m.a)({},this.props),{},{profile:this.props.profile,profileStatus:this.props.profileStatus}))})}}]),a}(s.a.Component),et=Object(ae.d)(Object(x.b)((function(e){return{profile:e.profilePage.profile,userId:e.auth.userId,profileStatus:e.profilePage.profileStatus}}),{setProfilePage:function(e){return function(t){E(e).then((function(e){var a;t((a=e.data,{type:Be,profile:a}))}))}},getStatusProfileTC:function(e){return function(t){R(e).then((function(e){return t(De(e.data))}))}},setStatusProfileTC:function(e){return function(t){T(e).then((function(a){0===a.data.resultCode?t(De(e)):console.log(a.data.messages)}))}}}),P.f,ie)($e),tt=a(64),at=a.n(tt),nt=function(e){var t,a;return Object(g.jsxs)("header",{className:at.a.header,children:[Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAA0CAQAAABCrz6fAAAFdklEQVR4Ae3aBXArWx0G8F/zwsNlcZcUG0EXd9kyg+viLikuY8VdegXXu7jDDe7Q4C6LuwR3Ce7wfGdn0j2ve9MTaGb2t2PtuV/+mftFzpztyjHATdzDlZ3N7hzjVz7umT6isyArx3BqL3FbMT3bQ/yH+Do9vChyXTzAPp2F6LuB24vvIV7tC3ZnU6qyZq/YUik9dFHZsL77WYSe+xjanVRm78kiZufQc2WLcWWd+PQkFuMMOvHp6SyVvsW6q4uDf/uh9/qRPa4r7FZuqPJfr3d/v7Mkuo/Entv5tLPZw7rCTqsGF/Zqe1hXWN+sNVe3VLpd4k0tla6wgT2rK2zFdkdHOLLKpOKLOKnKLtu2/gxiGsrkaqMTriZDico+szKpysjEdrl8ZtJYIax9Nvw8S+Ng9ZVJ37JIHZI2/NeMPVRpVi4LFya1qVKaNKxmDZOG1pUC5s5uqkysarIhV1nrWQ6pLakmmS25eHJbsvBziJwdmaoMGrOJXGVi3LMctiRCEoel4kgdPtlJW5GzU4VabruhWkHPYh0tjkRlfMI167AkypTDKs3zkujZQm1oYFb+vy3s1OKZWndmaydcZ7ZuqjYwtHtDg5bz4mUnRoF6YCBVKUzpWRalVYWp+qNkVam2IbE7iY128yJkw+8xBH4esTyFTa2ZIvy7RG53ckn7eRGzYxOVgTzwgTgxXqbC9pk21vhQtczupO3nRc2yL/Ceyg1UChZb2H/BacVRaDaKeOSVtp0XIRve3GcGKhnbC/uZxfgF6IuhNNVsqlRJ7U7afl6EbHhzP2z4kC9MgZ6xxfigeKZzri1+XqxsU2G5RGUM0PNM/xXf371AJyy8uScxBFnTas/nPUl8D/Ej8WSt1iZ2Z9J+XsRsZfbEYyBvWuvhMR7mn+L5s3t6Aeg7oziGmuXsWFja4jcwaT8vVjawuc+k8ubtSh/H2PR693Y5ZwSc03mE/cm3hfzWJxR+DriWWIYKTTbUxpqlSjUSmSZjWft5EbOVfQ6pDGXNN4D6gO/bUMsdFvJ9N/Y1bZzRfk3+OOfNlXWzDkkD2+aJWq5ovAc1a2SzzbwI2fBjJKETjkpPk48L+ZgrBus6g6S6XMi6L7iMJl8yj6EtA7WBLcPARwoTtcym2oZNzSbG7edFywY294GzRn1NfuYHLmi7V7mnf+A2XmvFfP7p9eaT+Z7SCORSNXho8BXPhswIA5mBsIf6XOt5MbOVwoZZBTsXxse2FXaMR3gKuKKXWDGvp/iBIzWVAFKpJg9VbnvFZ9CYmwRqKz3UJsEcTCXRs5WJwvDkz0d6tPpQ/IvcU8AFvN1pzOvFnuDIlQphFPY1VDiFIz7VK4SxTxk/G67HyKRdYZ9Q42eu6Y3gjN7ubOZxjM+6rXv6j3msK8J3yazbrrRmGj73D1q3Hlzf56HEyQaMleECw4XxVX9QKV1BCTja3Vyuvlzeu4Rxo5P+3SWd1RW83vzWrRk3vFdWFZqVLrdtbexySievsNpw4j6y5qHEywYU4Q0HrBwj4F2uD97sTv4i7CgHPESzXziXuBKpFEyVylaJzABMlCbaS6USUAaPdONnB76n8lD72hf2SE/AUzzCMXay7tlOYbs3uaUj0zlkqLJqYkZfyCf8w9ArWg75rpEkvHXptJTIwxsO6An5lMwrtPV+V/Idsz6m017wlkq7wv7qY9rj267kQzOP8EWdef8MaKoIFxbH71zPi9Q+65920klVBg4ZqOzTqC+mf7mXb9l0VPcN1tqmzBiJdMdzRfTFdtC3vMbpusJaGiAL/5XY4gvj7a7q7c7rkzrtCptV2iegZxG+7IpeZmonnTRwqBa0coz/o05qS6JWKhR0he1l9XZjLKArbGkdCwpL2mtq9RxYAAAAAElFTkSuQmCC",alt:"app logo"}),Object(g.jsx)("div",{className:at.a.mainTitle,children:"My social network"}),e.isAuth?Object(g.jsxs)("div",{className:at.a.loginBlock,children:[Object(g.jsx)("div",{children:e.login}),Object(g.jsx)("img",{src:null!==(null===(t=e.profile)||void 0===t?void 0:t.photos.small)?null===(a=e.profile)||void 0===a?void 0:a.photos.small:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoACkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9L7y+t9OtnuLqaO3gT70kjBVX6k1yXjj4q6R4FazS4Sa9kuRvCWgDlY+7nnp/OtvxZNLa6Dd3Mc1vAtujSyG6j3xlVBJBFfHM0+t314+orFbI91c5e3Zm8uG35+WPuO3B968h3vY9VI+qdX+MHhjTdD/tGDVLbUCygxW1rMryuT0G0HI/HpVrwz8StF8SaLb6gLhbNpZDCbaYjzFkHVcDr1B49a+PbeDUFN+9lotrY3ccgWGSY/LKueTx0r0P4Nw3Vl8Q7q1N8tnHq67oplhWR0kjGdo35CgjPTuBS1Hyo+qqKbGpWNVZt7AYLYxn3p1WQea/H7WG0/wQtlG219SuUtif9nl2/MLj8a+ddNi1CO9u/tTo1ru/cKo6LXuH7Rsbrb+Hp2/49xcvGfTey5X9FavIaEPoZ+uLqDWIGmlVuN65LY+7nnGe9Ranc6lpc+k6pZXccEmnXUdzJvHEoU5K+2a1az9f0+11PSLqC9jEluULMpJHTntTaC59m2d1HfWkNxEweKZA6sOhBGQalr520n9qTw34f8H+H9M0y0vtf1WOyhhNvbRFfnWNcrubAJ9hXpv/AAs69/6FDWf++F/xqOZBys6vxB4fsPFGkz6dqVutzaTDDIeCPQgjkEeorxm6/Z51ZdUuUsdahTSxgwNdRmSY+qtjaMDseaKKYrif8M964ynOvWant/orH/2arXhX9n6ea483xReRTQxvxZWedkoH99iM4P8AdH5miigdz1TR/BPh7w/L5umaHp+nyYxvtrZI2x9QK2qKKBH/2Q==",alt:"user avatar"}),Object(g.jsx)(j.b,{to:"/login",children:Object(g.jsx)(ze,{onClick:function(){e.logoutTC()},children:"Logout"})})]}):Object(g.jsx)(j.b,{to:"/login",children:Object(g.jsx)(ze,{children:"Login"})})]})},st=a(34),it={userId:null,login:"",email:"",isAuth:!1},ct="SET_USER_DATA",rt=function(e,t,a,n){return{type:ct,userId:e,email:t,login:a,isAuth:n}},ot=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(nt,Object(m.a)({},this.props))}}]),a}(s.a.Component);var lt=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,userId:e.auth.userId,email:e.auth.email,login:e.auth.login,isFetching:e.usersPage.isFetching,profile:e.profilePage.profile}}),{logoutTC:function(){return function(e){Z().then((function(t){0===t.data.resultCode&&e(rt(null,"","",!1))}))}}})(ot),ut=a(65),dt=a.n(ut),jt=a(66),bt=a.n(jt),pt=function(e){return Object(g.jsxs)("div",{className:bt.a.message,children:[Object(g.jsx)("div",{className:bt.a.angle}),Object(g.jsx)("div",{className:bt.a.textArea,children:e.message})]})},mt=a(90),ft=a.n(mt);function ht(e){var t="/dialog/"+e.id;return Object(g.jsxs)("div",{className:ft.a.dialog,children:[Object(g.jsx)("img",{src:e.avatar,alt:"avatar"}),Object(g.jsx)(j.b,{to:t,children:Object(g.jsx)("div",{className:ft.a.name,children:e.name})})]})}var gt=Ve(30),Ot=Object(Le.a)({form:"updateNewMessageText"})((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)(Ze.a,{validate:[Je,gt],placeholder:"Enter your message",name:"updateNewMessageText",component:He}),Object(g.jsx)(ze,{children:" send"})]})})}));var xt={dialogsData:[{id:Object(Ie.a)(),name:"Igor",avatar:"https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg"},{id:Object(Ie.a)(),name:"Maryna",avatar:"https://buddy.ghostpool.com/wp-content/uploads/avatars/2/d1b23ad972e736b7c0510b288875c3b6-bpthumb.jpg"},{id:Object(Ie.a)(),name:"Ragnar",avatar:"https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg"},{id:Object(Ie.a)(),name:"Ruslan",avatar:"https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg"}],massagesData:[{id:Object(Ie.a)(),massage:"Hi!"},{id:Object(Ie.a)(),massage:"How are you?"},{id:Object(Ie.a)(),massage:"Hey!"},{id:Object(Ie.a)(),massage:"Hello my friends"}]},vt="ADD-MESSAGE-CALLBACK",At=Object(ae.d)(Object(x.b)((function(e){return{dialogsData:e.dialogPage.dialogsData,massagesData:e.dialogPage.massagesData}}),(function(e){return{addMessageCallback:function(t){e({type:vt,message:t})}}})),ie)((function(e){var t=e.dialogsData.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(ht,{id:e.id,name:e.name,avatar:e.avatar})},e.id)})),a=e.massagesData.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(pt,{message:e.massage})},e.id)}));return Object(g.jsxs)("div",{className:dt.a.dialogs,children:[Object(g.jsx)("div",{className:dt.a.dialogsItems,children:t}),Object(g.jsx)("div",{className:dt.a.messeges,children:a}),Object(g.jsx)("div",{children:Object(g.jsx)(Ot,{onSubmit:function(t){var a=t.updateNewMessageText.trim();e.addMessageCallback(a)}})})]})})),wt=a(67),Pt=a.n(wt),yt=function(e){var t=e.dialogsData.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:e.avatar,alt:""})}),Object(g.jsx)("div",{className:Pt.a.item_text,children:e.name})]},e.id)}));return Object(g.jsxs)("div",{className:Pt.a.mane,children:[Object(g.jsx)("h2",{children:"Friends"}),Object(g.jsx)("div",{className:Pt.a.friends,children:t})]})},kt=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)(yt,Object(m.a)({},this.props))}}]),a}(s.a.Component),Ct=Object(x.b)((function(e){return{dialogsData:e.dialogPage.dialogsData}}),{})(kt),It=Object(Le.a)({form:"login"})((function(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)("div",{children:Object(g.jsx)(Ze.a,{type:"email",validate:[Je],placeholder:"login",name:"email",component:He})}),Object(g.jsx)("div",{children:Object(g.jsx)(Ze.a,{type:"Password",validate:[Je],placeholder:"password",name:"password",component:He})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(Ze.a,{type:"checkbox",name:"rememberMe",component:"input"})," Remember me"]}),e.error&&Object(g.jsx)("div",{className:Ge.a.formSummeryError,children:e.error}),Object(g.jsx)("div",{children:Object(g.jsx)(ze,{children:"Submit"})})]})})})),Nt=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,a,n){return function(s){U(e,t,a,n).then((function(e){if(0===e.data.resultCode)M().then((function(e){if(0===e.data.resultCode){var t=e.data.data,a=t.id,n=t.email,i=t.login;s(rt(a,n,i,!0)),s(V(!1))}}));else{var t=e.data.messages.length>0?e.data.messages[0]:"Some Error";console.log(t),s(Object(st.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(g.jsx)(P.a,{to:"/profile"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{children:"Login"}),Object(g.jsx)(It,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe,!0),console.log(t)}})]})})),Ft={initializedApp:!1},Bt=(a(285),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.initializedAppTC()}},{key:"render",value:function(){return this.props.initializedApp?Object(g.jsx)(j.a,{children:Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(lt,{}),Object(g.jsx)(w,{}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsx)(P.b,{path:"/dialogs",render:function(){return Object(g.jsx)(At,{})}}),Object(g.jsx)(P.b,{path:"/profile/:userId?",render:function(){return Object(g.jsx)(et,{})}}),Object(g.jsx)(P.b,{path:"/news",render:function(){return Object(g.jsx)(y,{})}}),Object(g.jsx)(P.b,{path:"/music",render:function(){return Object(g.jsx)(k,{})}}),Object(g.jsx)(P.b,{path:"/settings",render:function(){return Object(g.jsx)(C,{})}}),Object(g.jsx)(P.b,{path:"/users",render:function(){return Object(g.jsx)(be,{})}}),Object(g.jsx)(P.b,{path:"/friends",render:function(){return Object(g.jsx)(Ct,{})}}),Object(g.jsx)(P.b,{path:"/login",render:function(){return Object(g.jsx)(Nt,{})}})]})]})}):Object(g.jsx)(te,{})}}]),a}(s.a.Component)),St=Object(ae.d)(Object(x.b)((function(e){return{initializedApp:e.app.initializedApp}}),{initializedAppTC:function(){return function(e){var t=e((function(e){return e(V(!0)),M().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,s=a.email,i=a.login;e(rt(n,s,i,!0)),e(V(!1))}}))}));Promise.all([t]).then((function(){e({type:"APP/INITIALIZED-APP",initializedApp:!0})}))}}}))(Bt),Dt={friendsData:[{id:Object(Ie.a)(),avatar:"https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg",name:"Igor"},{id:Object(Ie.a)(),avatar:"https://buddy.ghostpool.com/wp-content/uploads/avatars/2/d1b23ad972e736b7c0510b288875c3b6-bpthumb.jpg",name:"Maryna"},{id:Object(Ie.a)(),avatar:"https://buddy.ghostpool.com/wp-content/uploads/avatars/4/d0344a04087644befce78124c6277bb1-bpthumb.jpg",name:"Ragnar"},{id:Object(Ie.a)(),avatar:"https://buddy.ghostpool.com/wp-content/uploads/group-avatars/34/1c7da6471476e42b543812f35ef23d2f-bpthumb.jpg",name:"Ruslan"}]},Et=a(131),Rt=a(125),Tt=Object(ae.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:var a={id:Object(Ie.a)(),massage:t.postMessage,likesCounts:0};return Object(m.a)(Object(m.a)({},e),{},{myPostsData:[a].concat(Object(I.a)(e.myPostsData))});case Be:return Object(m.a)(Object(m.a)({},e),{},{profile:t.profile});case Se:return Object(m.a)(Object(m.a)({},e),{},{profileStatus:t.status});default:return e}},dialogPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt:var a={id:Object(Ie.a)(),massage:t.message};return Object(m.a)(Object(m.a)({},e),{},{massagesData:[].concat(Object(I.a)(e.massagesData),[a])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case _:return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case z:return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case W:return Object(m.a)(Object(m.a)({},e),{},{currentPages:t.currentPages});case G:return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.totalUsersCount});case H:return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case J:return Object(m.a)(Object(m.a)({},e),{},{followingInProcess:t.followingInProcess?[].concat(Object(I.a)(e.followingInProcess),[t.userID]):e.followingInProcess.filter((function(e){return e!==t.userID}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(m.a)(Object(m.a)({},e),{},{userId:t.userId,email:t.email,login:t.login,isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/INITIALIZED-APP":return Object(m.a)(Object(m.a)({},e),{},{initializedApp:t.initializedApp});default:return e}},form:Rt.a}),Mt=Object(ae.e)(Tt,Object(ae.a)(Et.a));window.store=Mt;var Ut=function(){r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(x.a,{store:Mt,children:Object(g.jsx)(St,{})})}),document.getElementById("root"))};Ut(),Mt.subscribe(Ut),i()},47:function(e,t,a){e.exports={formControl:"FormsControl_formControl__36wWl",error:"FormsControl_error__1RGVx",formSummeryError:"FormsControl_formSummeryError__8yxVB"}},50:function(e,t,a){e.exports={mane:"BlockFriends_mane__3h5Ou",flexContainer:"BlockFriends_flexContainer__13wqd",items:"BlockFriends_items__3DyIR",name:"BlockFriends_name__2fzGO"}},64:function(e,t,a){e.exports={header:"Header_header__2F04D",mainTitle:"Header_mainTitle__39HZS",loginBlock:"Header_loginBlock__3070L"}},65:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__3Vx-t",dialogsItems:"Dialogs_dialogsItems__2HfqF",dialog:"Dialogs_dialog__u9dsJ",active:"Dialogs_active__ltnZm"}},66:function(e,t,a){e.exports={message:"Message_message__1udRW",angle:"Message_angle__3bG17",textArea:"Message_textArea__lm1Ke"}},67:function(e,t,a){e.exports={main:"Friends_main__mzRnv",friends:"Friends_friends__3xrJf",item_text:"Friends_item_text__2BvpS"}},86:function(e,t,a){e.exports={userPhoto:"Users_userPhoto__5KIGs",selectedPages:"Users_selectedPages__1MulH"}},87:function(e,t,a){e.exports={default:"SuperButton_default__3skPe"}},90:function(e,t,a){e.exports={dialog:"DialogsItem_dialog__2Fj15",name:"DialogsItem_name__1n45g"}}},[[286,1,2]]]);
//# sourceMappingURL=main.8bb80d9a.chunk.js.map