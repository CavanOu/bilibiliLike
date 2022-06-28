import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 50%;
    background-color: #fff;
a{
    width: 100%;
    box-sizing: border-box;
    /* background: pink; */
    padding: 2.13333vw 1.33333vw;
    display: inline-block;
    .card {
    position: relative;
    background-color: #f3f3f3;
    background-image: url("src/assets/images/common/videoLoading.png");
    background-size: 36%;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 0.53333vw;
    overflow: hidden;
    &:before {
    display: block;
    width: 100%;
    padding-bottom: 56.25%;
    content: "";
    }
    .pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
    .notfond {
        display:none;
    }
    .count {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 3.2vw;
    padding: 1.33333vw 1.6vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #fff;
    /* background: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.85)),to(transparent)); */
    background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
    span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    }
    .iconfont {
    margin-right: 1.33333vw;     
    }
    }
    
    }
    
    .title {
    font-size: 3.2vw;
    color: #212121;
    margin-top: 1.6vw;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
    }
}
`