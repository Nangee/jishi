import React,{ Component } from 'react';
import { Carousel } from 'antd';
import './Lunbo.css';
import $ from 'jquery';
class Lunbo extends Component {
	 constructor() {
        super();
        this.state = {
            banner:[]
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/text/text',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({banner:[opt[0].titile,opt[0].titile1,opt[0].titile2,opt[0].titile3,opt[0].titile4,opt[0].titile5,opt[0].titile6,opt[0].img,opt[0].img1,opt[0].img2,opt[0].img3]});
            }.bind(this)
        })
    }
    render(){
        return(
            <div>
                <Carousel effect="fade" autoplay>
                 
                  	<div>
                            <img className="img" src={this.state.banner[7]} alt=""/>
                               	<div className="content">
                                	<span>{this.state.banner[0]}<a href="#"></a>{this.state.banner[1]}</span>
                                	<span><b><font>{this.state.banner[2]}</font></b></span>
                                	<div><span>{this.state.banner[3]}</span></div>
                            		<img src={this.state.banner[8]} alt=""/>
                            	<a href="/Apply" className="middle">了解更多</a>
                       			 </div>
                    </div>
                    <div>
                        <img className="img" src={this.state.banner[9]} alt=""/>
                        <div className="content1">
                            <span>{this.state.banner[4]}</span>
                            <div><span>{this.state.banner[3]}</span></div>
                            <span><font>{this.state.banner[5]}<u></u> {this.state.banner[6]}</font></span>
                            <img src={this.state.banner[10]} alt=""/>
                            <a href="/Apply" className="middle1">了解更多</a>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Lunbo;