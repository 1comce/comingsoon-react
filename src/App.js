import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import ParticlesBackGround from './component/ParticlesBackGround';
import Content from './component/Content/Content';
import Footer from './component/Footer';
import AuthForm from './component/AuthForm/AuthForm';
import Layout from './component/Layout';
import Missing from './component/Missing';
import PersistLogin from './component/PersistLogin';
import RequireAuth from './component/RequireAuth';
import DashBoard from './component/Test/DashBoard';

function App() {
    return (
        <Routes>
            <Route element={<Layout></Layout>}>
                {/* Public routes */}
                <Route element={<PersistLogin />}>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Content />
                                <AuthForm />
                                <Footer />
                                <ParticlesBackGround />
                            </>
                        }
                    />
                    <Route element={<RequireAuth />}>
                        <Route path="/dashboard" element={<DashBoard></DashBoard>} />
                    </Route>
                </Route>

                {/* Catch all route */}
                <Route path="*" element={<Missing></Missing>} />
            </Route>
        </Routes>
    );
}

export default App;
