import React, { Component } from 'react';
import 'grommet/grommet.min.css';

import { App, Header, Split, Title, Box } from 'grommet';
import { loadAllPosts } from './actions';
import { Post, Sidebar } from './components';
import { PreviewList } from './views';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


class YuzuApp extends Component {
  componentDidMount() {
    this.props.loadAllPosts()
      .then(() => console.log('All posts loaded'));
  }

  _onResponsive(columns) {
    if (columns === 'single') {
      //TODO: dispatch action to show button for overlay sidebar
      console.log('single');
    } else {
      //TODO: dispatch action to hide button for overlay sidebar and hide overlay
      console.log('multiple');
    }
  }

  render() {
    return (
      <Router>
        <App centered={false}>
          <Split fixed={true} flex='right' priority='right' onResponsive={this._onResponsive}>
            <Sidebar />
            <Box>
              <Header fixed={true} direction="row" align="center" justify="between" size="small" pad={{ horizontal: 'medium' }}>
                <Title>Articles</Title>
                <Link to='/posts'>Posts -></Link>
              </Header>
              <Route exact path='/posts' component={PreviewList} />
              <Route path='/posts/:postId' component={Post} />
            </Box>
          </Split>
        </App>
      </Router>
    );
  }
}

export default connect(null, { loadAllPosts })(YuzuApp);
