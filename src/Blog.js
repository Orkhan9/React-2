import React, {Component,createRef} from 'react';

class Blog extends Component {
    state={
        name:'',
        surName:''
    }
    myRef=createRef()
    render() {
        const {name,surName}=this.state;
        return (
            <div>
                <React.Fragment>
                    <form onSubmit={this.submitHandler}>
                        <input name='name'
                               onChange={(e)=>this.inputChangeHandler(e)}
                               type="text"
                               value={name}/><br/>
                        <input name='surName'
                               onChange={(e)=>this.inputChangeHandler(e)}
                               type="text"
                               value={surName}/>
                        <p>{name} {surName}</p>
                        <button type="submit">Submit</button>
                    </form>
                    <input type="text" ref={this.myRef}/>
                </React.Fragment>
            </div>
        );
    }

    submitHandler=(event)=> {
        event.preventDefault();
        //console.log(this.state)
        console.log(this.myRef)
    }

    inputChangeHandler=(event)=> {
        this.setState({[event.target.name]:event.target.value})
        //console.log(event.target.name)
    }
}

export default Blog;