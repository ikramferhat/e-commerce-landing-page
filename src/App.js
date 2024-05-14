import './SCSS/main.scss';

import RouterConfig from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <RouterConfig />
      </div>
      <Footer />
    </div>
  );
}

export default App;
