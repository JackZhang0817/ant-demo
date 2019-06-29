import {
  Table
} from 'antd';
import {
  Component
} from 'react';

class Problem extends Component {
  constructor(props) {
    super(props);
    this.problem_columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '名称',
            dataIndex: 'problem_name',
            key: 'problem_name'
        },
        {
            title: '问题描述',
            dataIndex: 'description',
            key: 'description'
        },
    ];
    this.state = {
        problemList: []
    }
  }


  componentDidMount() {
    this.setState({
      problemList: [{
          id: 1,
          problem_name: '问题1',
          description: '问题描述1'
        },
        {
          id: 2,
          problem_name: '问题2',
          description: '问题描述2'
        },
        {
          id: 3,
          problem_name: '问题3',
          description: '问题描述3'
        },
      ],
    })
  }
  render() {
    return ( 
        <div>
            <Table dataSource = { this.state.problemList } columns = { this.problem_columns } /> 
        </div>
    );
  }
}
export default Problem;
