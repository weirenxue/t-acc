import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import SideNav from './components/nav/SideNav';
import TopNav from './components/nav/TopNav';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHideMenu: false,
        }
    }
    handleMenuClick() {
        this.setState({
            isHideMenu: !this.state.isHideMenu
        });
    }
    render() {
        return (
            <div>
                <SideNav onClick={() => this.handleMenuClick()} className={`sideNav ${!this.state.isHideMenu ? "is-sideNav-open" : ""}`} />
                <div className={`topNav ${!this.state.isHideMenu ? "is-sideNav-open" : ""}`}>
                    <TopNav isHideMenu={this.state.isHideMenu} onClick={() => this.handleMenuClick()} brandName="個人記帳系統" color="white"/>
                    <div>
                        <Switch>
                            <Route exact path="/">
                            <h1>index</h1>
                            </Route>
                            <Route path="/profile">
                            <h1>profile</h1>
                            </Route>
                            <Route path="/account" >
                            <h1>account</h1>
                            </Route>
                            <Route path="/ledger">
                            <h1>ledger</h1>
                            </Route>
                            <Route path="/report">
                            <h1>report</h1>
                            </Route>
                            <Route path="/subject" >
                            <h1>subject</h1>
                            </Route>
                            <Route path="/budget">
                            <h1>budget</h1>
                            </Route>
                            <Route path="/startdate">
                            <h1>startdate</h1>
                            </Route>
                            <Route path="/notify" >
                            <h1>notify</h1>
                            </Route>
                        </Switch>
                    </div>
                </div>

            </div>
        )
    }
}


ReactDOM.render(
    (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById('root')
);
