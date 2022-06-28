import axios from 'axios'

export const getVideos = () =>
    axios.get(`https://www.fastmock.site/mock/c4ece9fff3bb5ad98093439f16f136be/bLike/videolist`)

export const getTest = () =>
    axios.get(`http://api.bilibili.com/x/web-interface/ranking/region?rid=21`)
    // 待解决 跨域请求问题