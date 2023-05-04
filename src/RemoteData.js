import {useEffect , useState} from 'react'

function RData(){

    var [count , setCount] = useState(0)

    var [rdata  , setrData] =  useState([])
    
    
    useEffect(()=>{
        console.log("hi")
        
        fetch('https://jsonplaceholder.typicode.com/photos').then((data) => data.json()).then((result)=>{
          console.log(result)
          setrData(result)
        })


    // return  ()=>{
    //     console.log('bye')
    // }

 },[])   


function incre(){
    setCount(++count)
    localStorage.setItem('count' ,  ++count)
}


return(
    <><h1>This is Remote data </h1>
    <button onClick={incre}>Incre</button>
    <h1>Value of Count is : {count}</h1>

    <table>
        <tr>
            <th>Sr#</th>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail</th>
        </tr>

        {rdata.map((el,i)=>(

            <tr>
                <td>{i+1}</td>
                <td>{el.id}</td>
                <td>{el.title}</td>
                <td><img style={{width:100 , height:100}} src={el.url} /></td>
                <td><img style={{width:100 , height:100}} src={el.thumbnailUrl} /></td>
            </tr>

        ))}


    </table>

    </>
)


}

export default RData