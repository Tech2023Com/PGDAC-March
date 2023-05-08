import { useState } from "react";



function Home(){

    var [count , setCount] =  useState(localStorage.getItem('cnt'))

    function incre(){
      localStorage.setItem('cnt' , ++count)
    }

    return (
        <>
            <h1>This is Home Comp.</h1>
            <h1>Value of Count is : {count}</h1>
            <button onClick={incre} >Incre</button>
        </>
    )


}


export default Home;