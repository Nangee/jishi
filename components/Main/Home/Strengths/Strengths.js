import React,{ Component } from 'react';
import { Carousel } from 'antd';
import './Strengths.css';
import $ from 'jquery'
class Strengths extends Component {
	constructor(){
		super();
		this.state={
			ys:[]
		}
	}
componentDidMount = function () {
        $.ajax({
            'url':'http://192.168.43.245:8005/Strengths/Strengths',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({ys:[opt[0].title,
                	               opt[0].title1,
                	               opt[0].title2,
                	               opt[0].title3,
                	               opt[0].title4,
                	               opt[0].title5,
                	               opt[0].title6,
                	               opt[0].title7,
                	               opt[0].title8,
                	               opt[0].title9,
                	               opt[0].title10,
                	               opt[0].title11,
                	               opt[0].title12,
                	               opt[0].title13,
                	               opt[0].title14,
                	               opt[0].title15,
                	               opt[0].title16,
                	               opt[0].title17,
                	               opt[0].title18,
                	               opt[0].title19,
                	               opt[0].title20,
                	               opt[0].title21
                               ]});
            }.bind(this)
        })
    }
components	
    render(){
        return(
            <div className="Strengths">
               <div className="simpleText">
                   <span>{this.state.ys[0]}</span>
                   <p>{this.state.ys[1]}</p>
                   <div className="float_img"></div>
                   <div className="float_img_1">
                        <div className="float_img_"><span>{this.state.ys[2]}</span></div>
                        <div className="float_img_e"><span>{this.state.ys[3]} </span></div>
                        <div className="float_img_e"><span>{this.state.ys[4]} </span></div>
                       <div className="float_img_e"><span>{this.state.ys[5]} </span></div>
                       <div className="float_img_e1"><span>{this.state.ys[6]}</span></div>
                   </div>
                   <div className="float_img_2">
                       <div className="float_img_"><span>{this.state.ys[7]}</span></div>
                       <div className="float_img_e"><span>{this.state.ys[8]}  </span></div>
                       <div className="float_img_e"><span>{this.state.ys[9]} </span></div>
                       <div className="float_img_e"><span>{this.state.ys[10]}  </span></div>
                       <div className="float_img_e1"><span>{this.state.ys[11]}</span></div>
                   </div>
                   <div className="float_img_3">
                       <div className="float_img_"><span>{this.state.ys[12]}</span></div>
                       <div className="float_img_e"><span>{this.state.ys[13]}   </span></div>
                       <div className="float_img_e"><span>{this.state.ys[14]}</span></div>
                       <div className="float_img_e"><span>{this.state.ys[15]}   </span></div>
                       <div className="float_img_e1"><span>{this.state.ys[16]}</span></div>
                   </div>
                   <div className="float_img_4">
                       <div className="float_img_"><span>{this.state.ys[17]}</span></div>
                       <div className="float_img_e"><span>{this.state.ys[18]}  </span></div>
                       <div className="float_img_e"><span>{this.state.ys[19]}   </span></div>
                       <div className="float_img_e"><span>{this.state.ys[20]}   </span></div>
                       <div className="float_img_e1"><span>{this.state.ys[21]}</span></div>
                   </div>
               </div>
            </div>
        )
    }
}

export default Strengths;