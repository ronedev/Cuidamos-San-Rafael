import { useEffect, useState } from 'react';
import LazyNavbar from 'components/reutilizables/navbar/LazyNavbar';
import LazyHeader from 'components/Home/header/LazyHeader';
import LazyUso from 'components/Home/uso/LazyUso';
import LazyEncuentraDoctor from 'components/Home/encuentraDoctor/LazyEncuentraDoctor';
import LazyPedirTurno from 'components/Home/pedirTurno/LazyPedirTurno';
import LazyReview from 'components/Home/review/LazyReview';
import LazyOpiniones from 'components/Home/opiniones/LazyOpiniones';
import LazyFooter from 'components/reutilizables/footer/LazyFooter';
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
              <LazyNavbar users={users} auth={auth} />
              <LazyHeader especialistas={especialistas}/>
              <LazyUso />
              <LazyEncuentraDoctor especialistas={especialistas} />
              <LazyPedirTurno />
              <LazyReview />
              <LazyOpiniones />
              <LazyFooter />
            </>
          } />
          <Route path='/turno' element={
            <>
              <LazyNavbar users={users} auth={auth} />
              <Turnero especialidades={especialidades} especialistas={especialistas} auth={auth} turnos={turnos} />
              <LazyFooter />
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
