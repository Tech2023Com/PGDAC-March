import { useState } from "react";
import About  from "./About";




function Home({name}){

    var [color, setColor] =  useState(true)

    var [count , setCount] =  useState(0)
    function incre(){
        setCount(++count)
    }

    function handleDark(){
        setColor(false)
    }
    function handleLight(){
        setColor(true)

    }
    return (
        <>
            <h1>This is Home Comp.</h1>
            <h1>Value of Count is : {count}</h1>
            <button onClick={incre} >Incre</button>
            <button onClick={handleDark} >Dark</button>
            <button onClick={handleLight} >Light</button>
            <br></br>
        </>
    )


}


export default Home;