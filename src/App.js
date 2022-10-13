import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <>
    <div className='bg-white-500 shadow-lg'>
      <Navbar />
      {/* <Hero /> */}
      <Search />
    </div>
    </>
    );
}

export default App;
