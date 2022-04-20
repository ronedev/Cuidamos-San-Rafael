import EncuentraTuDoctor from './components/EncuentraTuDoctor';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Opiniones from './components/Opiniones';
import PedirTurno from './components/PedirTurno';
import Review from './components/Review';
import Uso from './components/Uso';
import './scss/App.scss';

function App() {
  return (
    <>
      <Navbar />
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
