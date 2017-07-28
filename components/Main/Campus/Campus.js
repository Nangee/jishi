import React,{Component} from 'react';
import './Campus.css';
import $ from 'jquery';
class Campus extends Component{
	 constructor() {
        super();
        this.state = {
            campus:[]
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/campus/campus',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({campus:[opt[0].title,
                	                  opt[0].title1,
                	                  opt[0].title2,
                	                  opt[0].title3,
                	                  opt[0].title4,
                	                  opt[0].title5,
                	          		  opt[0].title6,
                	                  opt[0].title7,
                	           		  opt[0].title8,
                	                  opt[0].img,
                           ]});
            }.bind(this)
        })
    }
    render(){
        return(
        	<div>
        	     {/*banner部分*/}
           		 <div className="Campus"></div>
           		    {/*内容开始*/}
                    <div className="Campucter">
                      <div  className="Campcter">
                        <div className="Camptitle">
                          <b>{this.state.campus[0]}</b>
                          <p>{this.state.campus[1]}</p>
                        </div>
                        <div clasName="Campcen">
                          <div className="Campcleft">
                           <img src={this.state.campus[9]}/>
                          </div>
                          <div className="Campcright">
                           <div className="Campcrt">
                           <p>{this.state.campus[2]}</p>
                           <p>{this.state.campus[3]}</p>
                           <p>{this.state.campus[4]}</p>
                           </div>
                            <div className="Campcrb">
                           <p>{this.state.campus[5]}</p>
                           <input type="text"/>*
                           </div>
                           <div className="Campcrb">
                           <p>{this.state.campus[6]}</p>
                           <input type="text"/>*
                           </div>
                           <div className="Campcrb">
                           <p>{this.state.campus[7]}</p>
                           <input type="text"/>*
                           </div>
                           <div className="Campcrb">
                           <p>{this.state.campus[8]}</p>
                           <input type="text"/>*
                           </div>
                           <div className="btn">
                             <button>提交</button>
                           </div>
                          </div>
                        </div>
                        
                       </div>
                    </div>
                    {/*内容结束*/}
            
            	
            </div>
        )
    }
}
export default Campus;