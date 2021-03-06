import React, { Component } from 'react';
// import styles from './index.css';
import { Layout,Menu } from 'antd';

const { Header, Content, } = Layout;

class BasicLayout extends Component{
  state = {
    current: 'index'
  }

  handleClick = (e) => {
    console.log(e)
    this.setState({
      current: e.key,
    })
  }


  render() {
    const { children } = this.props;
    const HeaderDom = (
      <Layout className="layout" theme="light">
        <Header style={{ backgroundColor: '#fff'}}>
          <Menu onClick= { this.handleClick } theme="light" selectedKeys={[this.state.current]} mode="horizontal" style={{ lineHeight: '64px'}} >
            <Menu.Item key="index">Index</Menu.Item>
            <Menu.Item key="list">List</Menu.Item>
          </Menu>
        </Header>  
        <Content>
          { children }
        </Content>
      </Layout>
    );
    return (
      <div>
        { HeaderDom }
      </div>
    );
  }
}
export default BasicLayout;
