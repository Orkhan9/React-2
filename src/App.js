import React, {Component} from 'react';
import './App.css'
import Blog from "./Blog";

class App extends Component {
  state={
    counter:1,
      isToggle:false,
      isToggleTwo:false
  }

    plus=()=>{
      //this.setState({counter:++this.state.counter})
        this.setState((prevState=>{
            return {counter:prevState.counter+1}
        }))
    };

    minus=()=>{
        if(this.state.counter>1){
            //this.setState({counter:this.state.counter-1})
            this.setState((prevState=>  ({counter:prevState.counter-1})
            ))
        }
    };

    ten=(e,value2)=> {
        //this.setState({counter:10})
        console.log(e.target,value2)
        this.setState((prevState=> ({counter:10})
        ))
    }

    one=(value,value2)=> {
        //this.setState({counter:1})
        console.log(value,value2)
        this.setState((prevState=>({counter:1})
        ))
    }

    toggleHandler=()=> {
        this.setState({isToggle:!this.state.isToggle})
    }

    toggleHandlerTwo=()=> {
        this.setState({isToggleTwo:!this.state.isToggleTwo})
    }

  render() {
      let classname='';
      this.state.isToggleTwo? classname+='customClass' : classname+='';

      if(this.state.isToggle){
          return (
              <div>
                  {this.state.isToggleTwo? <h1>Salam</h1> : <h1>Sagol</h1>}
                  <h1 className={classname} >Orkhan</h1>
                  <button onClick={this.toggleHandler}>Toggle</button>
                  <button onClick={this.toggleHandlerTwo}>ToggleTwo</button>
                  <h1 style={{color:'red',backgroundColor:"aquamarine"}}>{this.state.counter}</h1>
                  <button onClick={this.one.bind(this,'salam')}>1</button>
                  <button onClick={this.minus}>minus</button>
                  <button onClick={this.plus}>plus</button>
                  <button onClick={(e)=>this.ten(e,'salam')}>10</button>
              </div>
          );
      }else{
          return(
              <button onClick={this.toggleHandler}>Toggle</button>
              )
      }
  }
}

export default App;
