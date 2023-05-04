import {useNavigate} from 'react-router-dom'
import Router from './Router'
import { useState } from 'react'




function Navbar(){
  const navigate = useNavigate()
  var [mode , setMode] =  useState(localStorage.getItem('theme'))
  
  

  function handleMode(e){
    e.preventDefault()

    if(mode == 'light')
    {
      localStorage.setItem('theme' , 'dark')
      setMode('dark')
    }
    else{
      localStorage.setItem('theme' , 'light')

      setMode('light')
    }

  }




return(

    <>
<nav class={`navbar navbar-expand-lg navbar-light bg-${mode == 'light' ?  'light' :  'dark' }`}>
  <a style={{cursor:'pointer' , color : mode == 'light' ?  'black' : "white"}} class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a style={{cursor:'pointer' , color : mode == 'light' ?  'black' : "white" }} class="nav-link" onClick={()=> navigate('/') } >Home <span class="sr-only">(current)</span></a>
      </li>
      <li class={`nav-item ${window.location.href.includes('about') ? 'active' : "" }`}>
        <a style={{cursor:'pointer' , color : mode == 'light' ?  'black' : "white"}}  class="nav-link" onClick={()=> navigate('/about') }>About <span class="sr-only">(current)</span></a>
      </li>
      <li class={`nav-item ${window.location.href.includes('props-drilling') ? 'active' : "" }`}>
        <a style={{cursor:'pointer' , color : mode == 'light' ?  'black' : "white"}}  class="nav-link" onClick={()=> navigate('/props-drilling')} >PropsDrilling <span class="sr-only">(current)</span></a>
      </li>
      <li class={`nav-item ${window.location.href.includes('use-memo') ? 'active' : "" }`}>
        <a style={{cursor:'pointer' , color : mode == 'light' ?  'black' : "white"}}  class="nav-link" onClick={()=> navigate('/use-memo')}>UseMemo <span class="sr-only">(current)</span></a>
      </li>
      <li class={`nav-item ${window.location.href.includes('p3') ? 'active' : "" }`}>
        <a style={{cursor:'pointer' , color : mode == 'light' ?  'black' : "white"}}  class="nav-link" onClick={()=> navigate('/p3')}>Page3 <span class="sr-only">(current)</span></a>
      </li>
      
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button onClick={  (e)=> handleMode(e)} class="btn btn-outline-success my-2 my-sm-0" > {mode == 'light' ?  "Dark" : "Light" } </button>
    </form>
  </div>
</nav>
<Router  mode={mode} />
    </>

)


}


export default Navbar