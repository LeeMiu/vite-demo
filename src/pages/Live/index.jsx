import {lazy} from 'react'
import {Switch, Route} from 'react-router-dom'

const LiveSingleNoble = lazy(() => import('./LiveSinglePage'))

function Live() {
    return (
        <Switch>
            <Route exact path="/live/noble" component={LiveSingleNoble} />
        </Switch>
    )

}
export default Live