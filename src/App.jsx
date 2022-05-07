import {Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Live from './pages/Live'
import Empty from './pages/Empty'
import Loading from './components/Loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route path="/live" component={Live} />
          <Route component={Empty} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
