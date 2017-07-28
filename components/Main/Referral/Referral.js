import React,{Component} from 'react';
import './Referral.css';
import Finally from '../Conter/Finally';
import Substance from '../Conter/Substance';
import $ from 'jquery';
class Referral extends Component{
	 constructor() {
        super();
        this.state = {
            referral:[]
        }
    }
componentDidMount = function () {
        $.ajax({
            'url': 'http://192.168.43.245:8005/referral/referral',
            'type': 'get',
            'success': function (opt) {
                console.log(opt);
                this.setState({referral:[opt[0].title]});
            }.bind(this)
        })
    }
    render(){
        return(
            <div>
                {/*  Banner  */}
                    <div className="LJN_main_referral"></div>
                {/*  Banner  */}
                    <Finally/>
                <div className="LJN_fullmeasureOuterContent ">
                    <span>{this.state.referral[0]}</span>
                </div>
                    <Substance/>
            </div>
        )
    }
}
export default Referral;