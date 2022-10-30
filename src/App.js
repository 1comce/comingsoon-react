import './App.css';
import React from 'react';
import Header from './component/Header';
import ParticlesBackGround from './component/ParticlesBackGround';
import Content from './component/Content';
import Footer from './component/Footer';
import AuthForm from './component/AuthForm/AuthForm';
function App() {
    return (
        <div className="Container">
            <Header />
            <Content />
            <AuthForm />
            <Footer />
            <ParticlesBackGround />
        </div>
    );
}

export default App;
