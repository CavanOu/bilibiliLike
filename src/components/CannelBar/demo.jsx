import React, { useEffect, useState } from 'react'
import { HeaderMenu } from './style'
import { Link, useLocation } from 'react-router-dom'
import CannelData from '@/config'
import { isPathPartlyExisted } from '@/utils'
import { Tabs } from 'antd-mobile'
import classnames from 'classnames'


export default function ChildCannel() {
    const { pathname } = useLocation();
    const [items, setItems] = useState([])
    // console.log(pathname, isPathPartlyExisted(pathname))
    // CannelData.map(({ children }) => console.log(children.map(({ ctitle }) => console.log(ctitle))))
    // children.map(({ ctitle }) => console.log(ctitle))

    useEffect(() => {
        const CannelItems = () => {
            const res = CannelData.filter(
                ({ children }) =>
                    children.length > 0
            )
            console.log('过滤后数组', res)
            // const finres = res.filter(({ cannelname }) => cannelname == pathname)
            // console.log('children数组', finres)
            // const test = finres.map((i) => { return i })
            // console.log(test)
            // const everyRes = finres.filter((lit) => console.log(lit.cannelname, pathname))
            // console.log(everyRes);
            console.log(res[0].children[0].cannelname);
            return (
                // <div>$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</div> 

                <Tabs defaultActiveKey="1">
                    {
                        res.map((i) => {
                            console.log(i.cannelname, pathname, i.children)
                            if (pathname.includes(i.cannelname)) {
                                console.log(i.children, '---------------')
                                return (
                                    i.children.map((t) => {
                                        return (
                                            <Tabs.Tab title={<Link to={t.cannelname}
                                                className={classnames({
                                                    active: pathname == t.cannelname || pathname.includes(t.cannelnames)
                                                })}>
                                                <span>{t.ctitle}</span>
                                            </Link>}
                                                key={t.cannelname}>
                                            </Tabs.Tab>
                                        )
                                    }
                                    ))
                            }
                        }
                        )
                    }
                </Tabs>
            )
        }
        setItems(CannelItems)
    }, [pathname])
    // console.log(items)
    if (isPathPartlyExisted(pathname)) return

    return (
        <HeaderMenu>
            {items}
        </HeaderMenu>
    )
}
