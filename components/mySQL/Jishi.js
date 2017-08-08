/**
 * Created by lenovo on 2017/8/8.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import './Jishi.css';
import xiang from './xiangqing'
import $ from 'jquery'
const Ho=()=>(
    <div>
        <xiang/>
    </div>
);

class Jishi extends Component {
    componentDidMount=function () {
        var jishi=document.getElementById('jishi');
    };
    constructor(){
        super();
        this.state={
            ji:[]
        }
    }
    componentDidMount=function(){
        $.ajax({
            'url':'http://192.168.43.245:8005/jishi/jishi',
            'type':'get',
            'success':function(opt){
                console.log(opt);
                this.setState({ji:[opt[0].title, opt[0].title2]});
            }.bind(this)
        });
    };
    fetchfn (){
        fetch("http://localhost:8005/news/news")
            .then((data) => {
                if(data.ok){
                    return data.json()
                }
            })
            .then((data) => {
                let pagelength=0;
                let list=[];
                let index=this.state.index*14
                if((data.length/14)%1==0){
                    pagelength=data.length/14-1
                }else{
                    pagelength=Math.floor(data.length/14)
                }
                for(var i=0,j=data.length-1-index;i<14;i++,j--){
                    data[j]!=undefined && list.push(data[j])
                }
                this.setState({
                    pagelength:pagelength,
                    list:list
                })

            })
            .catch(x => {
                console.log(x)
            })
    }
    pagetab (x){
        return (e)=>{
            let obj=e.currentTarget.parentNode;
            if(obj.children.length<5){
                alert(x)
            }else{
                if(x>2){
                    if(x>=obj.children.length-2){
                        obj.style.left=-(obj.children.length-5)*35+"px"

                    }else{
                        obj.style.left=-(x-2)*35+"px"
                    }
                }else{
                    obj.style.left=0+"px"
                }
            }
            this.setState({
                index:x
            });
            this.fetchfn()
        }
    }
    around_left (){
        if(this.state.index<=0) return ;
        this.setState({
            index:this.state.index-1
        });
        if(this.refs.pagetabs.children.length<5){

        }else{
            if(this.state.index<=3){
                console.log(this.state.index,this.refs.pagetabs.children.length-2)
                this.refs.pagetabs.style.left=0+"px"
            }else{
                if(this.state.index<this.refs.pagetabs.children.length-2){
                    this.refs.pagetabs.style.left=-(this.state.index-3)*35+"px"
                }
            }

        }

        this.fetchfn()
    }
    around_right (){
        if(this.state.index>=this.state.pagelength) return ;
        this.setState({
            index:this.state.index+1
        });
        if(this.refs.pagetabs.children.length<5){

        }else{
            if(this.state.index>=2){
                console.log(this.state.index,this.refs.pagetabs.children.length-2)
                if(this.state.index>=this.refs.pagetabs.children.length-3){
                    this.refs.pagetabs.style.left=-(this.refs.pagetabs.children.length-5)*35+"px"

                }else{
                    this.refs.pagetabs.style.left=-(this.state.index-1)*35+"px"

                }

            }else{
                this.refs.pagetabs.style.left=0+"px"

            }

        }
        this.fetchfn()

    }
    replace_news_ck (x){
        return () => {
            var str=`id=${x}`;
            this.fetchFns("http://localhost:8005/news/newsdetail",str)
        }
    }
    detele_news_ck (x){
        return () => {
            fetch("http://localhost:8005/news/newsdelete",{
                method:"post",
                headers:{
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:`id=${x}`
            })
                .then(data => {
                    if(data.ok){
                        return data.json()
                    }
                })
                .then(data => {
                    this.fetchfn()
                })
                .catch(x => {
                    console.log(x)
                })

        }
    }
    render() {
        return(
            <Router>
                <div id="jishi">
                    <ul>
                        <li><NavLink exact to="/to">{this.state.ji[0]}</NavLink><span id="Modify">修改</span><span id="delete">删除</span></li>
                    </ul>
                    <div>
                        <Route exact path="/to" component={xiang}/>
                    </div>
                </div>

            </Router>
        )
    }
}
export default Jishi;