import React,{ Component } from 'react'
import './Content.css'
import $ from 'jquery'
class Content extends Component {
    componentDidMount=function () {
       var content=document.getElementById('content-c');
    };
    constructor(){
    	super();
    	this.state={
    		xz:[]
    	}
    }
componentDidMount=function(){
	$.ajax({
		'url':'http://192.168.43.245:8005/content/content',	
		'type':'get',
		'success':function(opt){
			console.log(opt)
	this.setState({xz:[opt[0].title,
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
		               opt[0].title21,
		               opt[0].title22,
		               opt[0].title23,
		               opt[0].title24,
		               opt[0].title25,
		               opt[0].title26,
		               opt[0].title27,
		               opt[0].title28,
		               opt[0].title39,
		               opt[0].title30,
		               opt[0].title31,
	            ]});
		}.bind(this)
	})
}
    render(){
        return(
            <div className="content-c" id="content-c">
                <div className="img-m">
                    <h1>{this.state.xz[0]} </h1>
                    <p>{this.state.xz[1]}</p>
                    <div className="module1">
                        <div className="fk-editor">
                            <span>{this.state.xz[2]}</span>
                            <div><b>{this.state.xz[3]}</b></div>
                            <div><s>&nbsp;{this.state.xz[4]}</s></div>
                            <div><s>{this.state.xz[5]}</s></div>
                            <div><s>{this.state.xz[6]}</s></div>
                        </div>
                    </div>
                    <div className="module2">
                        <div className="fk-editor">
                            <span>{this.state.xz[7]}</span>
                            <div><b>{this.state.xz[8]}</b></div>
                            <div><s>{this.state.xz[9]}</s></div>
                            <div><s>{this.state.xz[10]}</s></div>
                            <div><s>{this.state.xz[11]}</s></div>
                        </div>
                    </div>
                   <div className="module3">
                        <div className="fk-editor">
                            <span>{this.state.xz[12]}</span>
                            <div><b>{this.state.xz[13]}</b></div>
                            <div><s>&nbsp;{this.state.xz[14]}</s></div>
                            <div><s>{this.state.xz[15]}</s></div>
                            <div><s>{this.state.xz[16]}</s></div>
                        </div>
                    </div>
                    <div className="module4">
                        <div className="fk-editor">
                            <span>{this.state.xz[17]}</span>
                            <div><b>{this.state.xz[18]}</b></div>
                            <div><s>&nbsp;{this.state.xz[19]}</s></div>
                            <div><s>{this.state.xz[20]}</s></div>
                            <div><s>{this.state.xz[21]}</s></div>
                        </div>
                    </div>
                    <div className="module5">
                        <div className="fk-editor">
                            <span>{this.state.xz[22]}</span>
                            <div><b>{this.state.xz[23]}</b></div>
                            <div><s>{this.state.xz[24]}</s></div>
                            <div><s>{this.state.xz[25]}</s></div>
                            <div><s>{this.state.xz[26]}</s></div>
                        </div>
                    </div>
                    <div className="module6">
                        <div className="fk-editor">
                            <span>{this.state.xz[27]}</span>
                            <div><b> {this.state.xz[28]}</b></div>
                            <div><s>{this.state.xz[29]}</s></div>
                            <div><s>{this.state.xz[30]} </s></div>
                            <div><s> {this.state.xz[31]}</s></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;