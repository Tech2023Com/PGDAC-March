import { useState } from "react";
import About  from "./About";




function Home({name}){

    var [count , setCount] =  useState(0)
    function incre(){
        setCount(++count)
    }
    return (
        <>
            <h1>This is Home Comp.</h1>
            <h1>Value of Count is : {count}</h1>
            <button onClick={incre} >Incre</button>
            <br></br>
            <About  count={count}  name={name} />
        </>
    )


}


export default Home;