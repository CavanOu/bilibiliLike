import React from 'react'
import { Link } from 'react-router-dom'
import { CardWrapper } from './style'
import { NumberFormat } from '@/utils'
import classnames from 'classnames'
import protoTypes from 'prop-types'


export default function Card({ videos = [] }) {
    // console.log(videos)
    return (
        <>
            {
                videos.map(
                    ({ aid, pic, title, play, video_review }) => (
                        <CardWrapper key={aid}>
                            <Link
                                to="/videodetail"
                                className='v-card'
                            >
                                <div className="card">
                                    <picture>
                                        <img src={pic}
                                            alt={title}
                                            // onLoad="eager"
                                            className={classnames("m-bfs-pic pic", { notfond: pic == "" })} />
                                        {/* 待实现，数据请求失败时，display:none; */}
                                        {/* {console.log(item)} */}
                                    </picture>
                                    <div className="count">
                                        <span>
                                            <i className="iconfont icon_shipin_bofangshu"></i>
                                            {NumberFormat(play)}
                                        </span>
                                        <span>
                                            <i className="iconfont icon_shipin_danmushu"></i>
                                            {NumberFormat(video_review)}
                                        </span>
                                    </div>
                                </div>
                                <p className="title">{title}</p>
                            </Link >
                        </CardWrapper>
                    )

                )
            }

        </>
    )
}
Card.protoTypes = {
    video: protoTypes.array.isRequired
}