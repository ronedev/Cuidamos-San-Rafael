import { useEffect, useState } from 'react';
import EncuentraTuDoctor from './components/EncuentraTuDoctor';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Opiniones from './components/Opiniones';
import PedirTurno from './components/PedirTurno';
import Review from './components/Review';
import Uso from './components/Uso';
import './scss/App.scss';
import { app } from './config'

function App() {
  const [users, setUsers] = useState([])


  useEffect(()=>{
    const getUsers = async ()=>{
      await app.firestore().collection('usuarios').get()
        .then(querysnapshot => querysnapshot.forEach(doc=>{
          setUsers(users => [...users, {[doc.id]: doc.data()}])
        }))
    }
    getUsers()
  }, [])
  return (
    <>
      <Navbar users={users}/>
      <Header />
      <Uso />
      <EncuentraTuDoctor />
      <PedirTurno />
      <Review />
      <Opiniones />
      <Footer />
    </>
  );
}

export default App;
