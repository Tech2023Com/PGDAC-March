import { useState } from "react"


function Page3(){

    var [name , setName] =  useState("")
    const [arr ,setArr]  = useState(JSON.parse( localStorage.getItem('data')))

    const [data , setData ] = useState( JSON.parse( localStorage.getItem('data')))


        function handleInput(e){


            setName(e.target.value)


        }


        function handleAdd(){
                setArr([...arr , name])
                localStorage.setItem('data' , JSON.stringify([...arr, name]))
                var y  =  JSON.parse(localStorage.getItem('data'))

                setData(y)

        }

    return(
        <>
        <h1>Hello</h1>

        <input onChange={handleInput} placeholder="Enter nay name" />
        <button  onClick={handleAdd} >Add</button>
        {data.map((el,i)=>(
            <h1>{el}</h1>
        ))}

        </>
    )


}

export default Page3
