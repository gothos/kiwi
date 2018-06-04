import React from 'react'
import {Layout} from 'antd'
const {Content, Footer} = Layout

export default class BasicLayout extends React.Component {
  render() {
    return (
      <Layout className="basic-ant-layout">
        <Content>
          <Layout>
            <Content
              style={{
                padding: 30,
                margin: 0,
                backgroundColor: 'white',
                minHeight: 360,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center', backgroundColor: 'white'}}>
          Kiwi ©2018
        </Footer>
        {true === 'on' && true}
      </Layout>
    )
  }
}
