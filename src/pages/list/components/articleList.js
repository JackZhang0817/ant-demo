import React, { Component } from 'react';
import { List, Typography } from 'antd';

class ArticleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: 'zheshi yige biaoti1'},
        { title: 'zheshi yige biaoti2'},
        { title: 'zheshi yige biaoti3'},
        { title: 'zheshi yige biaoti4'},
        { title: 'zheshi yige biaoti5'},
      ]
    };
  }
  

  render() {
    return (
      <div>
        <List
          size="large"
          bordered
          dataSource={this.state.data}
          renderItem={item => (<List.Item>
            <List.Item.Meta 
          title={<Typography.Text>{item.title}</Typography.Text>} 
          />
          </List.Item>)}
        />
      </div>
    );
  }
}
export default ArticleInfo;



