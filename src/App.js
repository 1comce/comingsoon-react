import './App.css';
import React from 'react';
import Header from './component/Header';
import ParticlesBackGround from './component/ParticlesBackGround';
import Middle from './component/Middle';
import Footer from './component/Footer';
import LoginForm from './component/LoginForm';
function App() {
  return (
    <div className='Container'>
            <Header />
            <Middle />
            <LoginForm />
            <Footer />
            <ParticlesBackGround />
    </div>
  );
}

export default App;
