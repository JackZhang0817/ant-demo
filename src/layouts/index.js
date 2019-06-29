import React, { Component } from 'react';
import { Layout,Menu } from 'antd';
import Link from 'umi/link';
import styles from './index.css';

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
        <Header className={ styles.header }>
          <Menu onClick= { this.handleClick } theme="light" selectedKeys={[this.state.current]} mode="horizontal" style={{ lineHeight: '61px'}} >
            <Menu.Item key="index">
              <Link to="/">Index</Link>
            </Menu.Item>
            <Menu.Item key="list">
              <Link to="/list">List</Link>
            </Menu.Item>
            <Menu.Item key="problem">
              <Link to="/problem">Problem</Link>
            </Menu.Item>
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
