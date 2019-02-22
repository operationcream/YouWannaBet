/* eslint import/extensions: 0 */
import React from 'react';
import axios from 'axios';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    // this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    console.log(this.state.items);
    // this.getItems()
    //   .then((data) => {
    //     this.setState({
    //       items: data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  }

  getItems() {
    return axios.get('/items')
      .then(({ data }) => data);
  }

  render() {
    return (
      <div>
        <h1>DashBoard</h1>
      </div>
    );
  }
}

export default Dashboard;
