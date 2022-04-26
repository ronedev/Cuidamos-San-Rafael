import { useEffect, useState } from 'react';
import LazyEncuentraDoctor from 'components/Home/encuentraDoctor/LazyEncuentraDoctor';
import Footer from './components/reutilizables/Footer';
import Header from './components/Home/Header';
import Navbar from './components/reutilizables/Navbar';
import LazyOpiniones from 'components/Home/opiniones/LazyOpiniones';
import LazyPedirTurno from 'components/Home/pedirTurno/LazyPedirTurno';
import Review from './components/Home/Review';
import Uso from './components/Home/Uso';
import Turnero from './components/Turno/Turnero';
import './scss/App.scss';
import { app } from './config';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
              <Header especialistas={especialistas}/>
              <Uso />
              <LazyEncuentraDoctor especialistas={especialistas} />
              <LazyPedirTurno />
              <Review />
              <LazyOpiniones />
              <Footer />
            </>
          } />
          <Route path='/turno' element={
            <>
              <Navbar users={users} auth={auth} />
              <Turnero especialidades={especialidades} especialistas={especialistas} auth={auth} turnos={turnos} />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
