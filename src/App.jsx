import './App.css'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import NavBar from './Components/NavBar'
import { Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
     <NavBar/>
     <Header/>
     <Routes>
      <Route path="/" element={<Homepage/>}></Route>
     </Routes>
    </>
  )
}

export default App
