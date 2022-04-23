import { useEffect, useState } from 'react';
import EncuentraTuDoctor from './components/Home/EncuentraTuDoctor';
import Footer from './components/reutilizables/Footer';
import Header from './components/Home/Header';
import Navbar from './components/reutilizables/Navbar';
import Opiniones from './components/Home/Opiniones';
import PedirTurno from './components/Home/PedirTurno';
import Review from './components/Home/Review';
import Uso from './components/Home/Uso';
import './scss/App.scss';
import { app } from './config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Turnero from './components/Turno/Turnero';
import { getUsers, getEspecialistas, getEspecialidades, getTurnos } from './funciones'

function App() {
  const [users, setUsers] = useState([])
  const [especialistas, setEspecialistas] = useState([])
  const [especialidades, setEspecialidades] = useState([])
  const [turnos, setTurnos] = useState([])
  const [auth, setAuth] = useState(null)


  useEffect(() => {
    //Se verifica que no haya una sesion iniciada en el cache del navegador
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      setAuth(usuarioFirebase)
    })

    getUsers().then(res => setUsers(res))
    getEspecialidades().then(res => setEspecialidades(res))
    getEspecialistas().then(res => {
      setEspecialistas(res)
      setTurnos(getTurnos(res))
    })
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar users={users} auth={auth} />
              <Header />
              <Uso />
              <EncuentraTuDoctor />
              <PedirTurno />
              <Review />
              <Opiniones />
              <Footer />
            </>
          } />
          <Route path='/turno' element={
            <>
              <Navbar users={users} auth={auth} />
              <Turnero especialidades={especialidades} especialistas={especialistas} auth={auth} turnos={turnos} />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
