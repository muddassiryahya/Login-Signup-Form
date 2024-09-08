import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Logo from "../assets/images/logo.png";
import { signOut, auth } from "../config/firebase"
import Logo2 from "../assets/images/short logo.png";
import { useNavigate } from 'react-router-dom';




const { Header, Sider, Content } = Layout;
const AppLayout = ({ children }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const logoutUser = () => {
        signOut(auth).then(() => {
            console.log("Sign-out successful.");
        }).catch((error) => {
            console.log("An error happened-->", error);
        });

    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo-container demo-logo-vertical">
                    <img width={collapsed ? "50px" : "100px"} src={collapsed ? Logo2 : Logo} alt="" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: 'Users',
                            onClick: () => navigate("/users")
                        },
                        {
                            key: '4',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                            onClick: () => logoutUser()
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default AppLayout;