import {Suspense} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Live from './pages/Live'
import Empty from './pages/Empty'

function App() {
  return (
    <Suspense fallback={null}>
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
