import React from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'
import Photos from '../Pages/Photos'
import Cart from '../Pages/Cart'

function App(){
    return(
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/"><Photos /></Route>
                <Route path="/cart"><Cart /></Route>
            </Switch>
        </div>
    )
}



export default App