import React, { Component } from 'react';

//import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';
//import Navbar from '../../node_modules/react-bulma-components/lib/components/navbar';
import Navbar from '../../../node_modules/react-bulma-components/lib/components/navbar';
//import Box from '../../node_modules/react-bulmbox';

class Navigation extends Component {
  // const colors = {
  //   Default: '',
  //   primary: 'primary',
  //   info: 'info',
  //   danger: 'danger',
  //   warning: 'warning',
  //   success: 'success',
  //   white: 'white',
  //   black: 'black',
  //   light: 'light',
  //   dark: 'dark',
  //   link: 'link',
  // };
  
    render () {
      return (
        <Navbar
          color= "is-primary"
         
        >
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu >
            <Navbar.Container>
              <Navbar.Item dropdown hoverable href="#">
                <Navbar.Link arrowless={boolean('Arrowless', false)}>
                  First
                </Navbar.Link>
                <Navbar.Dropdown>
                  <Navbar.Item href="#">
                    Subitem 1
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    Subitem 2
                  </Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
              <Navbar.Item href="#">
                Second
              </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item href="#">
                    At the end
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      )
    }
}

export default Navigation
