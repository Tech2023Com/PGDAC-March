import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'


function Router({mode}){


return(

    <>

    <Routes>
    <Route  path='/'   element={<Login  mode={mode} />} />
    <Route  path='/login'   element={<Login  mode={mode} />} />
    <Route  path='/register'   element={<Register mode={mode} />} />
    <Route  path='*'   element={<Login mode={mode} />} />



    </Routes>

    </>
)


}

export default Router