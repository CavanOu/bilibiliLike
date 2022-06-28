import React from 'react'
import { lazy } from 'react'
import { Route, Routes } from 'react-router'
const Shouye = lazy(() => import('../pages/Shouye'))
const Space = lazy(() => import('../pages/Space'))
const Donghua = lazy(() => import('../pages/Donghua'))
const Fanju = lazy(() => import('../pages/Fanju'))
const Guochuang = lazy(() => import('../pages/Guochuang'))
const Yinyue = lazy(() => import('../pages/Yinyue'))
const Wudao = lazy(() => import('../pages/Wudao'))
const Youxi = lazy(() => import('../pages/Youxi'))
const VideoDetail = lazy(() => import('../pages/VideoDetail'))
const Sousuo = lazy(() => import('../pages/Sousuo'))

// 延迟加载，运行按需加载 当切换到这个路由后再加载 lazy
export default function RoutesConfig() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Shouye />} />
                <Route path='/shouye' element={<Shouye />} />
                <Route path='/donghua' element={<Donghua />} >
                    <Route path={'/donghua/:id'} element={<Donghua />} />
                    {/* /^\/donghua\/[\d]+/ */}
                </Route>
                <Route path='/fanju' element={<Fanju />} >
                    <Route path={'/fanju/:id'} element={<Donghua />} />
                </Route>
                <Route path='/guochuang' element={<Guochuang />} />
                <Route path='/yinyue' element={<Yinyue />} />
                <Route path='/wudao' element={<Wudao />} />
                <Route path='/youxi' element={<Youxi />} />
                <Route path='/space' element={<Space />} />
                <Route path='/sousuo' element={<Sousuo />} />
                <Route path='/videodetail' element={<VideoDetail />} />
            </Routes>
        </>
    )
}