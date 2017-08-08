import React, { Component } from 'react';
import './Dazhong.css';
import logo from '../img/lxxogo.png'
 import $ from 'jquery'
class End extends Component {
	 constructor() {
	      super();
        this.state = {
            end:[]	
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/end/end',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({end:[opt[0].title,
                	                 opt[0].title1,
                	                 opt[0].img,
                             ]});
            }.bind(this)
        })
    }
  render() {
    return (
        <div className="LJn_bottom">
      <div className="lxxbottom">
        <div className="lbc">
           <div className="lbcl">
          <a href="/Campus"><img src={logo}/></a>
           </div>
           <div className="lbcr">
            <h1>{this.state.end[0]}</h1>
            <p>{this.state.end[1]}</p>
           </div>
        </div>
      </div>
        </div>
    );
  }
}

export default End;
