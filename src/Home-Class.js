import React ,{Component} from "react";


class TestHome extends Component{
    constructor(){
        super()
        this.state= {
            count : 0,
            rdata : [],
            text : ""
        }

console.log("Test-1")
    }

    componentDidMount(){
        console.log("Test-2")
    }

        changeText() {
            this.setState({text : "hi"})    
        }

    componentDidUpdate(){
   

    }


    componentWillUnmount(){
        console.log("Test-4")

    }


    incre =()=>{
        this.setState({count : this.state.count +1})
        console.log(this.state.count)
    }

    render(){

        return(

            <><h1>This is Class Comp</h1>

            <button onClick={this.incre} >Incre</button>
            <h1   >Value of Count is : {this.state.count}</h1>
            <h1>{this.state.count == 10 ? "Hi" : ""}</h1>
            </>
        )
    }


}


export default TestHome



