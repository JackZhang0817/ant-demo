import {
    List,
} from 'antd';
import { Component } from 'react';
import styles from './article.css';




class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                title: 'Ant Design Title 1',
                },
                {
                title: 'Ant Design Title 2',
                },
                {
                title: 'Ant Design Title 3',
                },
                {
                title: 'Ant Design Title 4',
                },
            ],
        }
    }
    componentDidMount() {
        console.log('this do something')
        this.setState({
            data: [
                {
                title: 'Ant Design ..... 1',
                },
                {
                title: 'Ant Design ..... 2',
                },
                {
                title: 'Ant Design ..... 3',
                },
                {
                title: 'Ant Design ..... 4',
                },
            ],
        }) 
    }
    
    render() {
        return (
            <List
                bordered
                dataSource={this.state.data}
                renderItem={item=>(<List.Item.Meta 
                    title = {item.title}
                    description = "Ant Design this can write more font, but i want this give a tool of descrition, i don't know how it's work, but i will try more times;Ant Design this can write more font, but i want this give a tool of descrition, i don't know how it's work, but i will try more times;Ant Design this can write more font, but i want this give a tool of descrition, i don't know how it's work, but i will try more times;Ant Design this can write more font, but i want this give a tool of descrition, i don't know how it's work, but i will try more times;"
                    >
                    </List.Item.Meta>)}
            />
        );
    }
}
export default Article;