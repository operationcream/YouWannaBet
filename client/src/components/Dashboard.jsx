/* eslint import/extensions: 0 */
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './searchGames.jsx';
import TopBar from './TopBar.jsx';
import User from './User.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'dashboard',
    };
    // this.getItems = this.getItems.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
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

  changeView(option) {
    // will toggle the view between the dash and the search
    this.setState({
      view: option,
    });
  }

  // getItems() {
  //   return axios.get('/items')
  //     .then(({ data }) => data);
  // }

  render() {
    const { view } = this.state;
    return (
      <div>
        <h1>DashBoard</h1>
        <TopBar changeView={this.changeView} />
        { view === 'dashboard'
          ? <User />
          : <Search />
        }
      </div>
    );
  }
}

export default Dashboard;
