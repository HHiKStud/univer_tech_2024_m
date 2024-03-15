import { Outlet, useNavigate } from "react-router-dom"
import { Layout, Menu } from 'antd'

export const PageLayout = ({}) => {
    const { Header, Footer, Content, Sider } = Layout
    const Navigate = useNavigate()

    const menuItems = [
        { id: 1, label: 'Main', key: 1, link:'/' },
        { id: 2, label: 'Info', key: 2, link:'/info' },
        { id: 3, label: 'User', key: 3, link:'/user' },
        { id: 4, label: 'Login', key: 4, link:'/auth/login' },
        { id: 5, label: 'Signup', key: 5, link:'/auth/signup' }
    ]

    const SidebarItems = [
        {label: 'First'},
        {label: 'Second'},
        {label: 'Third'},
        {label: 'Fourth'},
    ]
    
    const handleNavigate = (key) => {
        let link = menuItems.find((item) => item.key == key)

        if (link) {
            Navigate(link.link)
        }
    }

    return (
        <Layout>
            <Header style={{display: 'flex', alignItems: 'center'}}>
                <Menu 
                    items={menuItems}
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['1']}
                    onClick={({key}) => handleNavigate(key)}
                />
            </Header>
            <Content>
                <Layout>
                    <Sider theme='light'><Menu items={SidebarItems}/></Sider>
                    <Content style={{height: '100vh', margin: '0 auto', overflowY: 'auto'}}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}
