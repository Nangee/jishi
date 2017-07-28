import React, { Component } from 'react';
import './Dazhong.css';
 import code from '../img/4.png';
 import $ from 'jquery'
class Substance extends Component {
	 constructor() {
	   super();
        this.state = {
            ry:[]
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/Substance/Substance',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({ry:[opt[0].title,
                	               opt[0].title1,
                	               opt[0].title2,
                	                opt[0].img,
                             ]});
            }.bind(this)
        })
    }
  	render() {
    	return (
    	    <div className="Lxx-Main">
      		<div className="lxxsubstance">
          	{/*中间部分*/}
      			<div className="lcrosshead">
        			<h1>{this.state.ry[0]}</h1>
      			 	<p>{this.state.ry[1]}</p>
       			</div>
                <div className="lsmall">
                	<div className="lsmaleft">
                 		<img src={code}/>
                	</div>
                   <div className="lsmalright">
                    <div className="lsmalcenter">
                     <p>{this.state.ry[2]}</p>
                    </div>
                     <div className="lsmalcenter">
                     <p>{this.state.ry[2]}</p>
                    </div>
                     <div className="lsmalcenter">
                     <p>{this.state.ry[2]}</p>
                    </div>
                    
                	</div>
                </div>
      		</div>
            </div>
   		 ); 
  	}
}

export default Substance;
	