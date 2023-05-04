import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import PropsDrilling from './Props-Drilling'
import UseMemo from './use-memo'




function Router({mode}){


return(

    <>

    <Routes>
    <Route  path='/'   element={<Home  mode={mode} />} />
    <Route  path='/about'   element={<About mode={mode}  />} />
    <Route  path='/props-drilling'   element={<PropsDrilling mode={mode}/>} />
    <Route  path='/use-memo'   element={<UseMemo mode={mode}/>} />


    </Routes>

    </>
)


}

export default Router