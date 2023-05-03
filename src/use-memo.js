import { useState , useMemo } from "react"





function calulation(num){
    console.log("Calculating")
    for(let i = 0 ; i < 1000000000 ; i++)
    {
        num += 1
    }

    return num
}

function Todos(){
    
    const [todos , setTodos] = useState([])
    
    var [count , setCount] = useState(0)
    // const calValue = calulation(count)
    const calValue = useMemo(()=> calulation(count) , [count])

function add(){
setTodos([...todos, "New To Do"])
}

function incre(){
    setCount(++count)
}


return(
    <>
    <button  onClick={add} >Add To do</button>
    <h1>________________ To Do's ________</h1>
    {todos.map((el,i)=>(
        <h5>{el}</h5>
        ))}
    <h1>________________ To Do's ________</h1>
        <button onClick={incre}>incre</button>
    <h1>Count is : {count}</h1>
    <h1>calulation Value is : {calValue}</h1>

    </>
)    


}

export  default Todos