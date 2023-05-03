import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import PropsDrilling from './Props-Drilling'
import UseMemo from './use-memo'




function Router(){


return(

    <>

    <Routes>
    <Route  path='/'   element={<Home/>} />
    <Route  path='/about'   element={<About/>} />
    <Route  path='/props-drilling'   element={<PropsDrilling/>} />
    <Route  path='/use-memo'   element={<UseMemo/>} />


    </Routes>

    </>
)


}

export default Router