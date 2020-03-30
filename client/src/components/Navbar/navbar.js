import react, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
              </a>
          
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  Kurse
                </a>
          
                <a className="navbar-item">
                  Documentation
                </a>
          
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>
          
                  <div className="navbar-dropdown">
                    <a className="navbar-item">
                      About
                    </a>
                    <a className="navbar-item">
                      Jobs
                    </a>
                    <a className="navbar-item">
                      Contact
                    </a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
          
              <div className="navbar-end">
                <div className="navbar-item">

                <div className="navbar-item">
                  <div>   
                      <div className=" field has-addons">
                          <div className="control">
                              <input className="input" type="text" placeholder="Finde einen Kurs..." />
                          </div>
                          <div className="control">
                              <a className="button is-link">
                              <strong>Suchen</strong>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>


                  <div className="buttons">
                    <a className="button is-primary">
                      <strong>Registrieren</strong>
                    </a>
                    <a className="button is-light">
                      <strong>Login</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar