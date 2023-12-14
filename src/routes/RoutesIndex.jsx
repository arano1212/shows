import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ShowDetail from '../pages/ShowDetail'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/shows/:id/cast' element={<ShowDetail />} />
    </Routes>
  )
}

export default RoutesIndex
