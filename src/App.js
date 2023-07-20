import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
