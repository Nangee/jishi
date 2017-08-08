import React, { Component } from 'react';
import './Dazhong.css';
 import log from '../img/log.png';
 import $ from 'jquery';
class New extends Component {
	 constructor() {
        super();
        this.state = {
            news:[]	
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/news/news',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({news:[opt[0].title,
                	                 opt[0].title1,
                	                 opt[0].title2,
                	                 opt[0].img
                             ]});
            }.bind(this)
        })
    }
  	render() {
    	return (
    		<div className="LJN_new">
    		<div className="lNew">
      	    	<div className="lxxNew">
                 	<div className="ltitle">
        			    <h1>{this.state.news[0]}</h1>
      			        <p>{this.state.news[1]}</p>
       				</div>
                   <div className="lconter">
       			 <div className="lconterl">
       			 <span>{this.state.news[2]}</span>
       			 </div>
       			 <div className="lconterr">
       			   <img src={log}/>
       			 </div>
       			</div>
      			</div>
      		</div>
			</div>
   		 ); 
  	}
}

export default New;
	