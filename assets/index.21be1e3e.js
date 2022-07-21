import{K as p,M as g,P as l,Q as m,U as h,s as r,r as s,j as e,F as c,d as o,L as f,W as y,f as L,D as x}from"./index.e1b189dc.js";const v=n=>({type:h,data:n}),w=n=>({type:g,data:n}),D=n=>({type:m,data:n}),F=(n,t)=>({type:l,data:{typename:n,typepath:t}}),A=()=>n=>{p().then(t=>{console.log(t),n(w(t.data[0].typename)),n(F(t.data[0].typename,t.data[0].typepath)),n(D(t.data)),n(v(!1))})},C=r.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`,E=r.div`
  padding: 0 1.33333vw;
  margin-bottom: 2.66666vw;
  margin-top: 2.66666vw;
`,b=r.div`
  padding: 1.33333vw 2.66666vw;
  font-size: 3.73333vw;
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  a {
    text-decoration: none;
  }
  .bt {
    font-size: 4vw;
  }
  .rank-more {
    color: #ffa726;
  }
  .more {
    color: #999;
  }
  .iconfont {
    font-family: iconfont !important;
    font-size: 4.26667vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;function j({data:n=[],type:t}){console.log(n,t,t.typename,t.typepath);const i=n.slice(0,4);return e(c,{children:o(E,{children:[o(b,{children:[e("span",{className:"bt",children:t.typename}),o(f,{to:t.typepath,className:"more",children:["\xA0 \u67E5\u770B\u66F4\u591A\xA0 ",e("i",{className:"iconfont gengduo1"})]})]}),e(C,{children:i.map(a=>e(y,{video:a},a.aid))})]})})}var T=s.exports.memo(j);const N=n=>{const{typename:t,data:i,enterLoading:a,type:d}=n,{getFourCardListDispatch:u,changeEnterLoadingDispatch:P}=n;return s.exports.useEffect(()=>{u()},[]),o(c,{children:[a&&e(()=>e("div",{style:{textAlign:"center",verticalAlign:"middle"},children:o("span",{children:["\u65BD\u6CD5\u52A0\u8F7D\u4E2D(\u3000o=^\u2022\u30A7\u2022)o\u3000\u250F",e(x,{})]})}),{}),e(T,{data:i,showLoading:a,type:d})]})},k=n=>({typename:n.donghuatuijian.typename,data:n.donghuatuijian.data,enterLoading:n.donghuatuijian.enterLoading,type:n.donghuatuijian.type}),z=n=>({getFourCardListDispatch(){n(A())}});var B=L(k,z)(s.exports.memo(N));export{B as default};
