import React, { Component } from 'react';
import './Dazhong.css';
import logo from '../img/g.png';
import logot from '../img/bg.png';
import logos from '../img/zhu.png';
 import $ from 'jquery'
class Finally extends Component {
	 constructor() {
        super();
        this.state = {
            finallys:[]	
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/finallys/finallys',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({finallys:[opt[0].title,
                	                 opt[0].title1,
                	                 opt[0].title2,
                	                 opt[0].title3,
                	                 opt[0].img,
                	                   opt[0].img1,
                	                     opt[0].img2
                             ]});
            }.bind(this)
        })
    };
  render() {
    return (
    	<div className="lfinally">
      <div className="lends">
    				<div className="lendt">
        			<h1>{this.state.finallys[0]}</h1>
      			 	<p>{this.state.finallys[1]}</p>
       			</div >
       			<div className="lendsb">
       			 <div className="lendsl">
       			  <img src={logos}/>
       			   <img src={logot}/>
       			    <img src={logo}/>
       			 </div>
       			<div className="lendsr">
       			<div className="lendsrc"></div>
       			<div className="lendsrnd">
       			  <a href="javaStart:;">{this.state.finallys[2]}</a>
              <p>{this.state.finallys[3]}</p>
       			</div>
       			 <div className="lendsrn">
       			 	<div className="le"></div>
       			  <a href="javaStart:;">{this.state.finallys[2]}</a>
              <p>{this.state.finallys[3]}</p>
       			</div>
       			<div className="lendsrn">
       			  <div className="ler"></div>
       			  <a href="javaStart:;">{this.state.finallys[2]}</a>
              <p>{this.state.finallys[3]}</p>
       			</div>

       			</div>
       			</div>
       		</div>
      </div>
    ); 	
  }
}

export default Finally;
