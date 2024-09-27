
import './App.css';
import Navigation from './customer/components/ Navigation/ navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      <HomePage/>
      <Product/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
