import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon, Modal, Tabs, message, Form, Input, Button, Checkbox} from 'antd';
const FormIterm = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'Top',
            modalVisiable: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        }
    }
    //原生参数e
    handleClick(e) {
        if(e.key = "register"){
            this.setState({current:'register'});

        }
        
        this.setState({
            current: e.key,
        });
    }

    setModalVisible(value){
        this.setState({
            modalVisiable : value
        });
    }

    render() {
        console.log(this.props.user);
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="-blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button">登出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" class="register">
                <Icon type="login"></Icon>
                注册登录
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="../src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            selectedKeys={[this.state.current]}
                            onClick={this.handleClick.bind(this)}
                            mode="horizontal"
                        >
                            <Menu.Item key="Top">
                                <Icon type="mail"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="exception"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="mail"/>国际
                            </Menu.Item>
                            <Menu.Item key="appstore">
                                <Icon type="exception"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="exception"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title="用户中心"
                               visible={this.state.modalVisiable}
                               onOk={()=>this.setModalVisible(false)}
                               onCancel={()=>this.setModalVisible(false)}
                               wrapClassName="vertical-center-modal"
                               okText="关闭"
                        >
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormIterm label="账户">
                                            <Input placeholder="请输入账号" {...getFieldProps('r_userName')}/>
                                        </FormIterm>
                                        <FormIterm label="密码">
                                            <Input type="password" placeholder="请输入密码" {...getFieldProps('r_password')}/>
                                        </FormIterm>
                                        <FormIterm label="确认密码">
                                            <Input type="password" placeholder="请再次输入密码" {...getFieldProps('r_confirmPassword')}/>
                                        </FormIterm>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}
export default PCHeader = Form.create({})(PCHeader);
