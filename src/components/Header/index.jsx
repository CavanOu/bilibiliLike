import React from 'react'
import { HeaderWrapper } from './style'
import { HeaderNavBar } from './style'
import CannelBar from '../CannelBar'
import { Link } from 'react-router-dom'
import download from '../../assets/images/common/navOpenApp.png'


export default function Header(props) {

    return (
        <HeaderWrapper>
            <HeaderNavBar className='m-navbar'>
                <Link to="/shouye" className="logo"><i className="iconfont Navbar_logo"></i></Link>
                <div className="right">
                    <Link to="/sousuo" className="search">
                        <i className="iconfont ic_search_tab">
                        </i>
                    </Link>
                    <Link to="/space" className="face">
                        <img className="bfs-img" />
                    </Link>
                    <div className="launch-app-btn m-nav-openapp">
                        <img src={download} className="nav-open-app-img" />
                    </div>
                </div>
            </HeaderNavBar>
            <CannelBar />
        </HeaderWrapper>
    )
}
