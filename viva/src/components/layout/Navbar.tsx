import * as React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar is-light">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            Logo here
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-end">
                            <Link to={'/'} className="navbar-item"> Home</Link>
                            <Link to={'/customers'} className="navbar-item"> Customers</Link>
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-info" href="#">
                                            Store App
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}