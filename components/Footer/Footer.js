import React, { Component } from 'react';
import './Footer.css'
import code from '../Main/img/1.png';
import wechant from '../Main/img/2.png';
import call from '../Main/img/3.png';
class Footer extends Component {
  render() {
    return (
    	<div className="lfooter">
      	<div className="lfooterc">
         	<div className="lfooterctop">
           {/*二维码*/}
      			<div  className="lcode">
        			<img src={code}/>
       			  <p>扫描查看手机版网站</p>
      			</div>
      			{/*微信*/}
      			<div  className="lwechant">
      				<img src={wechant}/>
      				<p>在线咨询</p>
      				<p>联系qq:258506508</p>
      				<p>联系时间:09:00-19:00</p>
      			</div>
         		{/*电话*/}
      			<div  className="lcall">
         			<img src={call}/>
        			 <p>020-00000000</p>
        			 <p>工作时间:09:00-24:00</p>
         				<p>欢迎随时拨打全国招生热线</p>
     			 	</div>
      		</div>
          	{/*下标*/}
      			<div className="lunderline"></div>
      				<div className="lbottom">
      		       <p>学院总部：XXX省XXX市XXX区XXX路XXX号（XXX学院）</p>
      		       <a href="javaScript:;">手机端</a>
      				</div>
       	</div>
      </div>
    );
  }
}

export default Footer;
