import './App.css';
import React from 'react';
import Header from './component/Header';
import ParticlesBackGround from './component/ParticlesBackGround';
import Middle from './component/Middle';
import Footer from './component/Footer';
function App() {
  return (
    <React.Fragment>
            <Header />
            <Middle />
            <Footer />
            <ParticlesBackGround />
    </React.Fragment>
  );
}

export default App;
