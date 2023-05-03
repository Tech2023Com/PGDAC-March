import { useState ,  createContext ,  useContext } from "react"

const CountContext = createContext()


function Comp1(){
    const count = useContext(CountContext)
    return (
        <h1>This is Comp-1 ,  value of count from props {count}</h1>
    )
}


function Comp2(){
    return (
        <>
        <h1>This is Comp-2</h1>
        <Comp1/>
        </>
    )
}
function Comp3(){
    const count = useContext(CountContext)
    return (
        <>
        <h1>This is Comp-3 , {count}</h1>
        <Comp2/>
        </>
    )
}

function Comp4(){
    return (
        <>
        <h1>This is Comp-4</h1>
        <Comp3/>
        </>
    )
}







function Comp5(){


  var [count , setCount] =  useState(0)


  function incre(){
    setCount(++count)
  }

 return(
    <>
    <h1>This is Props Drilling Comp  : Count is  { count}</h1>
    <button  onClick={incre} >Incre</button>
    <CountContext.Provider  value={count}>

    <Comp4/>
    </CountContext.Provider>
    </>
 )   

}

export default Comp5