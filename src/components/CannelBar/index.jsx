import React, { useEffect, useRef } from 'react'
import { Tabs } from 'antd-mobile'
import { Button, Dropdown } from 'antd-mobile'
import { DownOutline } from 'antd-mobile-icons'
import { HeaderMenu } from './style'
import { DropdownWrapper, DrawerWrapper } from './style'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import CannelData from '@/config'
import { useState } from 'react'
import ChildCannel from './demo'


export default function CannelBar() {
    const { pathname } = useLocation();
    const ref = useRef(null)
    const [items, setItems] = useState([])
    const [cannelNames, SetCannelNames] = useState([])

    useEffect(() => {
        const CannelItems = () => {
            return (
                <Tabs defaultActiveKey='1' >
                    {
                        CannelData.map(
                            (item) => {
                                // item.children && setChildChannel(item.children)
                                return (
                                    <Tabs.Tab title={<Link to={item.cannelname} className={classnames({ active: pathname == item.cannelname })}>
                                        <span>{item.ctitle}</span>
                                    </Link>}
                                        key={item.cannelname}>
                                    </Tabs.Tab>
                                )

                            }
                        )
                    }
                </Tabs>
            )
        }
        setItems(CannelItems)
    }, [pathname])

    return (
        <>
            <HeaderMenu>
                {items}
                <DropdownWrapper defaultActiveKey="1" >
                    <Dropdown arrow={<DownOutline />} ref={ref}>
                        <Dropdown.Item key='sorter' title=''>
                            <DrawerWrapper>
                                <div>
                                    {
                                        CannelData.map(
                                            (item) => {
                                                // item.children && setChildChannel(item.children)
                                                return (
                                                    <Link key={item.cannelname}
                                                        to={item.cannelname}
                                                        className={classnames({ active: pathname == item.cannelname })}
                                                        onClick={() => {
                                                            ref.current?.close()
                                                        }}
                                                    >
                                                        <span>{item.ctitle}</span>
                                                    </Link>
                                                )

                                            }
                                        )
                                    }
                                </div>
                                <i class="iconfont general_pullup_s" onClick={() => {
                                    ref.current?.close()
                                }}></i>
                            </DrawerWrapper>

                            {/* <div style={{ padding: '0 12px 12px' }}>
                                <Button
                                    fill='none'
                                // onClick={() => {
                                //     ref.current?.close()
                                // }}
                                >
                                </Button>
                            </div> */}
                        </Dropdown.Item>
                    </Dropdown>
                </DropdownWrapper>
            </HeaderMenu>
            <ChildCannel message={items} />
        </>
    )
}
