import './App.css'
import Article from './Components/Article'
import Header from './Components/Header'
import Homepage from './Components/Homepage'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import { Route, Routes} from 'react-router-dom'
import Profile from './Components/Profile'

function App() {
  
  return (
    <>
     <NavBar/>
     <Header/>
     <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/topic/:topic" element={<Homepage/>}></Route>
      <Route path="/article/:article_id" element={<Article/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
     </Routes>
    </>
  )
}

export default App
