import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Fac from '../Faculty/Faculty';
import Ref from '../Referral/Referral';
import Appl from '../Apply/Conter';
import Campu from '../Campus/Campus';
import "./Dazhong.css"
const Ho=()=>(
    <div>
        <Home/>
    </div>
);
const Fa=()=>(
    <div>
        <Fac/>
    </div>
);
const Re=()=>(
    <div>
        <Ref/>
    </div>
);
const App=()=>(
    <div>
        <Appl/>
    </div>
);
const Cam=()=>(
    <div>
        <Campu/>
    </div>
);
class Nav extends Component{
    render(){
        return(
            <div>
                <Header/>
            <Router basename="" keyLength={6}>
            <div className="lnav">
                <div className="lnanvc">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="color">首页</NavLink></li>
                        <li> <NavLink to="/Faculty" activeClassName="color">师资力量</NavLink></li>
                        <li><NavLink to="/Referral" activeClassName="color">校园资讯</NavLink></li>
                        <li><NavLink to="/Apply" activeClassName="color">学校介绍</NavLink></li>
                        <li><NavLink to="/Campus" activeClassName="color">在线报名</NavLink></li>
                    </ul>

                    <div className="LJN_main">
                        <Route exact path="/" component={Ho}/>
                        <Route path="/Faculty" component={Fa}/>
                        <Route path="/Referral" component={Re}/>
                        <Route path="/Apply" component={App}/>
                        <Route path="/Campus" component={Cam}/>
                    </div>

                </div>
            </div>
            </Router>
                <Footer/>
            </div>
        )
    }
}
export default Nav;