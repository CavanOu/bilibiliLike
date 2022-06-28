import React from 'react'
import { useEffect, useState } from 'react'
import { CardBox, VideoListWrapper } from './style'
import { Link } from 'react-router-dom'
import Card from '../Card'
import { DotLoading } from 'antd-mobile'
import { getTest, getVideos } from '../../api/request'

export default function VideoListBox() {
    const [showLoading, setShowLoading] = useState(true)
    const [videos, setVideos] = useState([])
    useEffect(() => {
        (async () => {
            let { data: { data: videoData } } = await getVideos();
            // let { data: { list: Test } } = await getTest(); //外部api直接调用
            // console.log(Test)
            // console.log(videoData)
            setVideos(videoData)
            setShowLoading(false)
        })()
    }, [])
    const Loading = () => {
        return (
            <div style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}>
                <span>施法加载中(　o=^•ェ•)o　┏<DotLoading /></span>
            </div>
        )
    }
    return (
        <>
            {showLoading && <Loading />}
            <VideoListWrapper>
                <CardBox className="card-box">
                    <Card className='v-card' videos={videos} />
                    <Card className='v-card' />
                    <Card className='v-card' />
                    <Card className='v-card' />
                </CardBox>
            </VideoListWrapper>
        </>
    )
}
