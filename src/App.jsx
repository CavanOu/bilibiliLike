import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import RoutesConfig from './routes'
import Header from './components/Header'


function App() {

  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
    </div>
  )
}

export default App
