
import {useState} from 'react'
import './About.css'
function About({count , name}){

    const [arr , setArr] =  useState([])
    const [formValues , setFormValues] =  useState({
        name : "",
        email  :"",
        mobile : ""

    })
    
    function handleInput(e){
       console.log(e.target.name , e.target.value)
      
         setFormValues({...formValues ,  [e.target.name] : e.target.value})
      
      

    }

    function onAdd(){
        setArr([...arr , formValues])

        console.log(arr)

    }

    return(
        <>
        <h1 style={{color : "powderblue"}}> Value of count from props is : {count + 100}  & name is {name} </h1>
        <input onChange={handleInput}  name='name'  placeholder='Enter any name'   /> 
        <input onChange={handleInput}  name="email"  placeholder='Enter any email'   /> 
        <input onChange={handleInput}  name="mobile"  placeholder='Enter any mobile'   /> 
        
        <button onClick={onAdd} >Add</button>

        <table>
            <tr>
                <th>SR. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
            </tr>
            {arr.map((el,i)=>(
            <tr>
                <td>{i+1}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.mobile}</td>
            </tr>

        ))}

            
        </table>

       
        </>
    )
}


export default About