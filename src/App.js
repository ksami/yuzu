import React, { Component } from 'react';
import 'grommet/grommet.min.css';

import { App, Header, Title } from 'grommet';
import { loadAllPosts } from './actions';
import { Post } from './components';
import { PreviewList } from './views';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class YuzuApp extends Component {
  componentDidMount() {
    this.props.loadAllPosts()
      .then(() => console.log('All posts loaded'));
  }

  render() {
    return (
      <Router>
        <App centered={true}>
          <Header fixed={true} direction="row" align="center" justify="between" size="small" pad={{ horizontal: 'medium' }}>
            <Title>Articles</Title>
            <Link to='/posts'>Posts -></Link>
          </Header>
          <Route exact path='/posts' component={PreviewList} />
          <Route path='/posts/:postId' component={Post} />
        </App>
      </Router>
    );
  }
}

export default connect(null, { loadAllPosts })(YuzuApp);
