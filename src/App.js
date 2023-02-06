import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

// const Loader = React.lazy(() => import('./components/Loading'))
// const BasicLayout = React.lazy(() => import('./pages/__Layout'))
// const Dashboard = React.lazy(() => import('./pages/Dashboard'))
// const NotFound = React.lazy(() => import('./pages/NotFound'))
import { Loader } from './components/Loading'
import BasicLayout from './pages/__Layout'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <BasicLayout>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/customize' element={<NotFound />} />
            <Route path='/tools' element={<NotFound />} />
            <Route path='account' element={<NotFound />} />
            <Route path='/*' element={<Navigate replace to='/dashboard' />} />
          </Routes>
        </BasicLayout>
      </Suspense>
    </Router>
  )
}

export default App
