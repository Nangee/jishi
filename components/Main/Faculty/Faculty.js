import React,{Component} from 'react';
import './Faculty.css';
 import $ from 'jquery'
class Faculty extends Component{
	 constructor() {
	      super();
        this.state = {
            faculty:[]	
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/faculty/faculty',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({faculty:[opt[0].title,
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
                	                    opt[0].img,
                	                    opt[0].img1,
                	                    opt[0].img2,
                	                    opt[0].img3,
                             ]});
            }.bind(this)
        })
    }
    render(){
        return(
            <div>
                {/*   Banner   */}
            <div className="LJN_main_Faculty"></div>
                {/*   Banner   */}
                {/*  我们的师资团队  */}
            <div className="fullmeasureOuterContent">
                <div>
                    <span>{this.state.faculty[0]}</span>
                    <p>{this.state.faculty[1]}</p>
                    <div className="floatImg_J_special">
                        <div className="floatImg_J_specia2">
                            <div className="float_in_img"></div>
                            <div className="J_defImage">
                                <span>{this.state.faculty[2]}</span>
                                <p>{this.state.faculty[3]}</p>
                                <p>{this.state.faculty[4]}</p>
                                <div></div>
                            </div>
                        </div>
                        <div className="floatImg_J_specia2">
                            <div className="float_in_img2"></div>
                            <div className="J_defImage">
                                <span>{this.state.faculty[2]}</span>
                                <p>{this.state.faculty[3]}</p>
                                <p>{this.state.faculty[4]}</p>
                                <div></div>
                            </div>
                        </div>
                        <div className="floatImg_J_specia2">
                            <div className="float_in_img3"></div>
                            <div className="J_defImage">
                                <span>{this.state.faculty[2]}</span>
                                <p>{this.state.faculty[3]}</p>
                                <p>{this.state.faculty[4]}</p>
                                <div></div>
                            </div>
                        </div>
                        <div className="floatImg_J_specia2">
                            <div className="float_in_img4"></div>
                            <div className="J_defImage">
                                <span>{this.state.faculty[2]}</span>
                                <p>{this.state.faculty[3]}</p>
                                <p>{this.state.faculty[4]}</p>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {/*  我们的师资团队  */}

                {/*  content Banner  */}
                <div className="fullmeasureOuterContentBg462 ">
                    <div>
                        <font><span className="simpleText">{this.state.faculty[5]}</span></font>
                        <font><span className="simpleText1">{this.state.faculty[6]}</span></font>
                    </div>
                </div>
            {/*  content Banner  */}

                <div className="fullmeasureOuterContent">
                    <div className="J_packContentBg">
                        <div><span>{this.state.faculty[7]}</span><p>{this.state.faculty[8]}</p></div>
                        <div className="lightModuleOuterContent">
                            <img src={this.state.faculty[29]} alt=""/>
                            <div className="fk-editorsimpleText">
                                <span>{this.state.faculty[9]}</span>
                                <span className="span">{this.state.faculty[10]}</span>
                                <div></div>
                                <span className="span">{this.state.faculty[11]} </span>
                                <span className="span">{this.state.faculty[12]}</span>
                                <span className="span">{this.state.faculty[13]}</span>
                            </div>
                        </div>
                        <div className="lightModuleOuterContent1">
                            <img src={this.state.faculty[30]} alt=""/>
                            <div className="fk-editorsimpleText1">
                                <span>{this.state.faculty[14]} </span>
                                <span className="span">{this.state.faculty[15]}</span>
                                <div></div>
                                <span className="span">{this.state.faculty[16]}  </span>
                                <span className="span">{this.state.faculty[17]}  </span>
                                <span className="span">{this.state.faculty[18]}</span>
                            </div>
                        </div>
                        <div className="lightModuleOuterContent">
                            <img src={this.state.faculty[31]} alt=""/>
                            <div className="fk-editorsimpleText">
                                <span>{this.state.faculty[19]}</span>
                                <span className="span">{this.state.faculty[20]}</span>
                                <div></div>
                                <span className="span">{this.state.faculty[21]}</span>
                                <span className="span">{this.state.faculty[22]}</span>
                                <span className="span">{this.state.faculty[23]}</span>
                            </div>
                        </div>
                        <div className="lightModuleOuterContent1">
                            <img src={this.state.faculty[32]} alt=""/>
                            <div className="fk-editorsimpleText1">
                                <span>{this.state.faculty[24]} </span>
                                <span className="span">{this.state.faculty[25]}</span>
                                <div></div>
                                <span className="span">{this.state.faculty[26]} </span>
                                <span className="span">{this.state.faculty[27]}  </span>
                                <span className="span">{this.state.faculty[28]}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Faculty;