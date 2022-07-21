import{m as j,r as d,u as I,b as M,w as E,j as t,c as R,d as o,F as A,e as W,S as O,C as P,s as f,L as V,N as S,D as $,f as G,h as D}from"./index.e1b189dc.js";const q="adm-ellipsis",J={direction:"end",rows:1,expandText:"",collapseText:"",stopPropagationForActionButtons:[],onContentClick:()=>{}},K=i=>{const e=j(J,i),r=d.exports.useRef(null),[p,m]=d.exports.useState({}),[h,b]=d.exports.useState(!1),[v,z]=d.exports.useState(!1);function T(){const u=r.current;if(!u)return;const g=window.getComputedStyle(u),n=document.createElement("div");Array.prototype.slice.apply(g).forEach(l=>{n.style.setProperty(l,g.getPropertyValue(l))}),n.style.position="fixed",n.style.left="999999px",n.style.top="999999px",n.style.zIndex="-1000",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="unset",n.style.display="block";const H=C(g.lineHeight),x=Math.floor(H*(e.rows+.5)+C(g.paddingTop)+C(g.paddingBottom));if(n.innerText=e.content,document.body.appendChild(n),n.offsetHeight<=x)z(!1);else{let w=function(s,a){if(a-s<=1)return e.direction==="end"?{leading:e.content.slice(0,s)+"..."}:{tailing:"..."+e.content.slice(a,l)};const c=Math.round((s+a)/2);return e.direction==="end"?n.innerText=e.content.slice(0,c)+"..."+N:n.innerText=N+"..."+e.content.slice(c,l),n.offsetHeight<=x?e.direction==="end"?w(c,a):w(s,c):e.direction==="end"?w(s,c):w(c,a)},y=function(s,a){if(s[1]-s[0]<=1&&a[1]-a[0]<=1)return{leading:e.content.slice(0,s[0])+"...",tailing:"..."+e.content.slice(a[1],l)};const c=Math.floor((s[0]+s[1])/2),k=Math.ceil((a[0]+a[1])/2);return n.innerText=e.content.slice(0,c)+"..."+N+"..."+e.content.slice(k,l),n.offsetHeight<=x?y([c,s[1]],[a[0],k]):y([s[0],c],[k,a[1]])};z(!0);const l=e.content.length,N=h?e.collapseText:e.expandText,L=Math.floor((0+l)/2),_=e.direction==="middle"?y([0,L],[L,l]):w(0,l);m(_)}document.body.removeChild(n)}I(T,r),M(()=>{T()},[e.content,e.direction,e.rows,e.expandText,e.collapseText]);const F=v&&e.expandText?E(e.stopPropagationForActionButtons,t("a",{onClick:()=>{b(!0)},children:e.expandText})):null,B=v&&e.expandText?E(e.stopPropagationForActionButtons,t("a",{onClick:()=>{b(!1)},children:e.collapseText})):null;return R(e,t("div",{ref:r,className:q,onClick:u=>{u.target===u.currentTarget&&e.onContentClick(u)},children:(()=>v?h?o(A,{children:[e.content,B]}):o(A,{children:[p.leading,F,p.tailing]}):e.content)()}))};function C(i){if(!i)return 0;const e=i.match(/^\d*(\.\d*)?/);return e?Number(e[0]):0}var Q=K;const U=i=>({type:P,data:i}),X=i=>({type:O,data:i}),Y=()=>i=>{W().then(e=>{i(X(e.data.list.vlist)),i(U(!1))})},Z=f.div`
    background: #fff;
    font-size: 0px;
    margin-top:11.73333vw;
`,ee=f.div`
    background: #fff;
    font-size: 0px;
    
    .banner{
        width: 100vw;
        height: 24vw;
        overflow: hidden;
        background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/bannerTop_new.png);
        background-size: cover;
        background-position: 50%;
    }
    .part1{
        padding: 0 3.2vw;
        .face{
            float: left;
            position: relative;
            width: 22.4vw;
            height: 22.4vw;
            .avatar{
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                margin-top: -1.6vw;
            }
        }
        .relation{
            float: right;
            width: 58.66667vw;
            padding-top: 2.13333vw;
            color: #e7e7e7;
            .count{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                justify-content: space-around;
                &>span {
                    width: 19.2vw;
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;
                    .num{
                        font-size: 3.73333vw;
                        color: #212121;
                        line-height: 4.26667vw;
                    }
                    .type{
                        font-size: 2.93333vw;
                        color: #999;
                    }
                }
                .split{
                    vertical-align: middle;
                    width: 1px;
                    height: 4.26667vw;
                    background: #e7e7e7;
                }
            }
            .follow-btn{
                display: block;
                button{
                    width: 100%;
                    display: block;
                    height: 8vw;
                    border: none;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    border-radius: 1.06667vw;
                    font-size: 3.73333vw;
                    margin-top: 3.2vw;
                    outline: none;
                    &.white{
                        background: #fff;
                        border: 1px solid #fb7299;
                        color: #fb7299;
                    }
                }
            }
        }
    }
    .part2{
        clear: both;
        padding: 3.2vw;
        .base{
            .name{
                font-size: 4.8vw;
                color: #212121;
                max-width: 62.66667vw;
                vertical-align: middle;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }
            .gender{
                margin-left: 1.06667vw;
                display: inline-block;
                vertical-align: middle;
                padding-top: 0.53333vw;
            }
            .level{
                margin-left: 1.6vw;
                vertical-align: middle;
                i{  
                    color: #FF0000;
                    font-size: 6.4vw;
                    vertical-align: middle;
                }
            }
        }
        .desc{
            clear: both;
            .content {
                margin-top: 2.13333vw;
                font-size: 3.46667vw;
                color: #999;
                /* line-height: 4.53333vw; */
                /* width: 83.46667vw; */
                width: 93vw;
                /* height: 4.53333vw; */
                /* overflow: hidden; */
                /* text-overflow: ellipsis; */
                /* white-space: nowrap; */
                /* float: left; */
                a{
                    text-decoration: none;
                }
                .spread {
                    height: auto;
                    white-space: normal;
                    word-break: break-all;
                }
            }
            .spread-btn {
                margin-top: 1.86667vw;
                float: right;
                font-size: 3.46667vw;
                color: #1389bf;
                text-decoration: none;
                }
        }
        .clearfloat {
            clear: both;
        }
    }
    .iconfont {
    font-family: iconfont!important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`,te=f.div`
    height: 10.66667vw;
    line-height: 10.66667vw;
    padding-left: 3.2vw;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
    span {
        display: inline-block;
        margin-right: 8.53333vw;
        color: #757575;
        font-size: 3.46667vw;
        &.on {
            color: #fb7299;
        }
    }
    
`,ie=f.div`
padding-left: 3.2vw;
background: #fff;
a{
    color: inherit;
    cursor: default;
    text-decoration: none;
    &.video-item-space {
        position: relative;
        height: 24.26667vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        padding: 2.4vw 3.2vw 2.4vw 0;
        .cover {
            float: left;
            width: 31.2vw;
            height: 19.46667vw;
            position: relative;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                border-radius: 1.06667vw;
            }
            .bfs-img[data-v-be935d08] {
                background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/loading.png) no-repeat 50%;
                background-size: contain;
                background-color: #e7e7e7;
                -o-object-fit: cover;
                object-fit: cover;
            }
            .duration {
                position: absolute;
                right: 1.06667vw;
                bottom: 1.06667vw;
                font-size: 3.2vw;
                padding: 0 0.53333vw;
                color: #fff;
                border-radius: 0.53333vw;
                background: rgba(0,0,0,.5);
            }
        }
        .info {
            position: relative;
            margin-left: 34.4vw;
            height: 19.46667vw;
            .title {
            font-size: 3.73333vw;
            color: #212121;
            line-height: 4.53333vw;
            font-weight: 400;
            max-height: 9.06667vw;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            }
            .state {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                font-size: 2.66667vw;
                color: #999;
                line-height: 4.53333vw;
                height: 4.53333vw;
                &>span {
                    display: inline-block;
                }
                i{
                    margin-right: 1.06667vw;
                    vertical-align: middle;
                }
                .danmaku {
                    margin-left: 7.73333vw;
                }
            }
        }
    }
}
`;function ne(){return t("div",{children:"DynamicList"})}const oe=f.div`

`,se=f.div`

`;function ae({archiveList:i=[]}){return t(se,{children:i.map(({aid:e,pic:r,title:p,play:m,video_review:h,bvid:b,length:v})=>t(oe,{children:o(V,{to:`/video/${b}`,className:"video-item-space",children:[o("div",{className:"cover",children:[t("img",{"data-v-be935d08":"",src:r,alt:"\u6C83\u739B\u8981\u996D\u5220\u51CF\u7247\u6BB5",className:"bfs-img"}),t("span",{className:"duration",children:v})]}),o("div",{className:"info",children:[t("h3",{className:"title",children:p}),o("div",{className:"state",children:[o("span",{className:"view",children:[t("i",{className:"iconfont icon_shipin_bofangshu"}),t("span",{children:S(m)})]}),o("span",{className:"danmaku",children:[t("i",{className:"iconfont icon_shipin_danmushu"}),t("span",{children:S(h)})]})]})]})]})},e))})}function le(){return t("div",{style:{textAlign:"center",verticalAlign:"middle",fontSize:"12px"},children:o("span",{children:["\u65BD\u6CD5\u52A0\u8F7D\u4E2D(\u3000o=^\u2022\u30A7\u2022)o\u3000\u250F",t($,{})]})})}const ce=i=>{const[e,r]=d.exports.useState(!0),{archiveList:p,enterLoading:m}=i,{getArchiveListDispatch:h}=i;return d.exports.useEffect(()=>{h()},[]),o(Z,{children:[o(ee,{children:[t("div",{className:"banner"}),o("div",{className:"part1",children:[t("div",{className:"face",children:t("img",{src:"//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg",className:"bfs-img avatar","data-v-be935d08":""})}),o("div",{className:"relation",children:[o("div",{className:"count",children:[o("span",{className:"fans",children:[t("span",{className:"num",children:"678"}),t("br",{}),t("span",{className:"type",children:"\u7C89\u4E1D"})]}),t("span",{className:"split"}),o("span",{className:"follow",children:[t("span",{className:"num",children:"168"}),t("br",{}),t("span",{className:"type",children:"\u5173\u6CE8"})]}),t("span",{className:"split"}),o("span",{className:"likes",children:[t("span",{className:"num",children:"1.1\u4E07"}),t("br",{}),t("span",{className:"type",children:"\u83B7\u8D5E"})]})]}),t("div",{className:"follow-btn",children:t("button",{className:"white",children:"\u7F16\u8F91\u8D44\u6599"})})]})]}),o("div",{className:"part2",children:[o("div",{className:"base",children:[t("span",{className:"name",children:"CAVAN\u5494\u53FD"}),t("span",{className:"gender"}),t("span",{className:"level",children:t("i",{className:"iconfont ic_userlevel_6"})})]}),t("div",{className:"desc",children:t(Q,{className:"content",direction:"end",content:"Something New | Something Exciting | Something Out of Imagination",expandText:"\u5C55\u5F00",collapseText:"\u6536\u8D77"})})]})]}),o(te,{children:[t("span",{className:D({on:!e}),onClick:()=>r(!e),children:"\u52A8\u6001"}),t("span",{className:D({on:e}),onClick:()=>r(!e),children:"\u89C6\u9891"})]}),m&&t(le,{}),o(ie,{children:[!e&&t(ne,{}),e&&t(ae,{archiveList:p})]})]})},re=i=>({archiveList:i.space.archiveList,enterLoading:i.space.enterLoading}),de=i=>({getArchiveListDispatch(){i(Y())}});var fe=G(re,de)(d.exports.memo(ce));export{fe as default};
