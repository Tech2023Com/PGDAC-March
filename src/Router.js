import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import PropsDrilling from './Props-Drilling'
import UseMemo from './use-memo'

import Page3 from './Page-3'
import RData from './RemoteData'




function Router({mode}){


return(

    <>

    <Routes>
    <Route  path='/'   element={<Home  mode={mode} />} />
    <Route  path='/about'   element={<About mode={mode}  />} />
    <Route  path='/props-drilling'   element={<PropsDrilling mode={mode}/>} />
    <Route  path='/use-memo'   element={<UseMemo mode={mode}/>} />
    <Route  path='/p3'   element={<Page3 mode={mode}/>} />
    <Route  path='/rdata'   element={<RData mode={mode}/>} />
    <Route  path='*'   element={<Home mode={mode}/>} />


    </Routes>

    </>
)


}

export default Router