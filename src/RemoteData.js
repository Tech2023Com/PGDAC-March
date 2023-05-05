import {useEffect , useState} from 'react'

function RData(){

    var [count , setCount] = useState(0)

    var [rdata  , setrData] =  useState([])

    var [bkp ,setBkp ] = useState([])

    var [start , setStart] =  useState(0)
    var [end ,setEnd] = useState(5)

    
    
    
    useEffect(()=>{
        console.log("hi")
        
        fetch('https://jsonplaceholder.typicode.com/photos').then((data) => data.json()).then((result)=>{
          console.log(  "result", result)
          setrData(result)
          setBkp(result)
        })


    // return  ()=>{
    //     console.log('bye')
    // }

 },[])   


 function handleSearch(e){
    var temp =  bkp;
    var fdata  =  temp.filter((el)=>{


        return el.title.includes(e.target.value) || el.id == e.target.value
    })

    setrData(fdata)

 }


function incre(){
    setCount(++count)
    localStorage.setItem('count' ,  count)
}


return(
    <>
    
    {/* <h1>This is Remote data </h1>
    <button onClick={incre}>Incre</button>
    <h1>Value of Count is : {count}</h1> */}

    <div  style={{display:'flex',marginTop:30 , flexDirection : "row" , width:'80%' , margin:'auto' , justifyContent:"center"}}>

    <input placeholder='Enter for search' onChange={handleSearch} style={{ height:50, width:"100%" , borderRadius : 10 }}   />
    </div>

   

        <>
        {   rdata && Array.isArray(rdata) && rdata.length > 0
         ?
         <table>
         <tr>
             <th>Sr#</th>
             <th>ID</th>
             <th>Title</th>
             <th>URL</th>
             <th>Thumbnail</th>
         </tr>

         {rdata.map((el,i)=>{

            if(i >= start  && i <end)
            {
                return ( 

                    <tr>
                        <td>{i+1}</td>
                        <td>{el.id}</td>
                        <td>{el.title}</td>
                        <td><img style={{width:100 , height:100}} src={el.url} /></td>
                        <td><img style={{width:100 , height:100}} src={el.thumbnailUrl} /></td>
                    </tr>
                      )
            }
            else{ return null}

             


         })}
        </table>

        : 
        <h1>Please Wait !! Data is loading....</h1>


        
        }

        
        </>    

        <button disabled={rdata.length == end } onClick={()=> {  setStart( start + 5 ) ; setEnd(end + 5) }} >Next</button>
        <button disabled={start == 0} onClick={()=> {  setStart( start - 5 ) ; setEnd(end - 5) }} >Previous</button>

       


   

    </>
)


}

export default RData