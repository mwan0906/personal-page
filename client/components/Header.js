import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import history from '../history';

const possiblePages = ['about', 'projects', 'contact'];

class Header extends React.Component {
  checkUrl(e) {
    const clicked = e.target;
    if (
      clicked.classList.contains('selected') ||
      clicked.parentNode.classList.contains('selected')
    )
      e.preventDefault();
  }

  render() {
    return (
      <div id='header'>
        <h1 onClick={() => history.push('/')}>Marcia Wan</h1>
        <div id='nav'>
          {possiblePages.map(pageName => (
            <Button
              to={`/${pageName}`}
              component={NavLink}
              activeClassName='selected'
              activeStyle={{
                backgroundColor: 'lightgray',
                color: 'white'
              }}
              disableRipple={true}
              onClick={this.checkUrl}
              key={pageName}
            >
              {pageName.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
