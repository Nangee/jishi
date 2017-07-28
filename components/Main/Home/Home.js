import React,{Component} from 'react';
import Lunbo from './Lunbo/Lunbo';
import Content from './Content/Content';
import Strengths from './Strengths/Strengths';
import Conte from '../Conter/Substance';
import Cont from '../Conter/New';
import Con from '../Conter/Finally';
import Co from '../Conter/End';
class Home extends Component{
    render(){
        return(
            <div>
                <Lunbo/>
                <Content/>
                <Strengths/>
                <Conte/>
                <Cont/>
                <Con/>
                <Co/>
            </div>
        )
    }
}
export default Home;