import React,{Component} from 'react';
import './Apply.css';
import $ from 'jquery';
class Conter extends Component{
		 constructor() {
        super();
        this.state = {
            apply:[]
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/apply/apply',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({apply:[opt[0].title,
                	                  opt[0].title1,
                	                  opt[0].title2,
                	                  opt[0].title3,
                	                  opt[0].title4,
                	                  opt[0].title5,
                	          		  opt[0].title6,
                	                  opt[0].title7,
                	           		  opt[0].title8,
                	                  opt[0].title9,
                	                  opt[0].img,
                	                  opt[0].img1,
                	                  opt[0].img2,
                	                  opt[0].img3,
                	                  opt[0].img4,
                	                  opt[0].img5,
                	                  opt[0].img6,
                	                  opt[0].img7,
                	                  opt[0].img8,
                	                  opt[0].img9,
                	                  opt[0].img10,
                	                  opt[0].img11,
                	                  opt[0].img12,
                	                  opt[0].img13,
                	                  opt[0].img14,
                	                  opt[0].img15,
                	                  opt[0].img16,
                	                  opt[0].img17,
                	                  opt[0].img18,
                	                  opt[0].img19,
                           ]});
            }.bind(this)
        })
    };
    render(){
        return(
        	<div>
        	    {/*学校介绍*/}
            	<div className="lxbanner"></div>
            		<div className="lxxxiao">
            			<div className="lxxxiaoceter">
            		 		<div className="lxxxiaotitle">
            		  			 <b>{this.state.apply[0]} </b>
            		  			 <p>{this.state.apply[1]}</p>
            		 			</div>
            		 		<div className="lxxiaoconter">
            		 		  <div className="lxxiaoleft">
            		 		   	<img src={this.state.apply[10]}/>
            		 		   	<div className="lxxiaolefp">
            		 		   	  <p>{this.state.apply[2]}</p>
            		 		   	</div>
            		 		 </div>
            		 		 	<div className="lxxiaoright">
            		 		   		<p>{this.state.apply[3]} </p>
            		 		   		<div className="lxxiaort">
            		 		   		  <b>{this.state.apply[4]}</b>
            		 		   		  <p>{this.state.apply[5]}</p>
            		 		   		</div>
            		 		   		<div className="lxxiaorlogo">
										<div><img src={this.state.apply[11]}/></div>
										<div><img src={this.state.apply[12]}/></div>
										<div><img src={this.state.apply[13]}/></div>
            		 		   		</div>
            		 		  	</div>
            		 		</div>
            		
            	        </div>
            	    </div>
            	    {/*学校介绍结束*/}
            	    {/*我们的课程*/}
            	    <div className="lxc">
        	 			<div className="lXcenter">
	            			<div className="lXctitle">
	            	   			<b>{this.state.apply[6]}</b>
	            	   			<p>{this.state.apply[7]} </p>
	            			</div>
	            				<div className="lXconter">
	            	 				<img src={this.state.apply[14]}/>
	            		 			<img src={this.state.apply[15]}/>
	            	   				<img src={this.state.apply[16]}/>
	            	    			<img src={this.state.apply[17]}/>
	            	     			<img src={this.state.apply[18]}/>
	            	      			<img src={this.state.apply[19]}/>
	            	       			<img src={this.state.apply[20]}/>
	            	        		<img src={this.state.apply[21]}/>
	            				</div>
	           			 </div>
            		</div>
            		{/*我们的课程结束*/}
            		{/*教育环境*/}
            		<div className="lXJy">
        	 				<div className="lXJycenter">
	            				<div className="lXJyctitle">
	            	  				 <b>{this.state.apply[8]} </b>
	            	  				 <p>{this.state.apply[9]} </p>
	            				</div>
	            				<div className="lXJyconter">
	            				 	<span><img src={this.state.apply[22]}/></span>
	            	  		     	<span><img src={this.state.apply[23]}/></span>
	            	  				<span><img src={this.state.apply[24]}/></span>
	            	    		 	<span><img src={this.state.apply[25]}/></span>
	            	     		 	<span><img src={this.state.apply[26]}/></span>
									<span><img src={this.state.apply[27]}/></span>
									<span><img src={this.state.apply[28]}/></span>
									<span><img src={this.state.apply[29]}/></span>
	            				</div>
	           			 	</div>
          			 </div>
            		{/*教育环境结束*/}
        </div>
        )
    }
}
export default Conter;