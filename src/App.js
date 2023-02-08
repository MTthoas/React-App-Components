import Header from './components/header';
import Footer from './components/footer';
import React from 'react';
import { createContext, ReactElement, useEffect, useState } from "react";

import './index.css';




function App() {
    return (

        <div className="App mx-auto">
            <Header />
            <div className="h-screen bg-white dark:bg-dark_theme"> 
            </div>
            <Footer />
        </div>
        
    );
}

export default App;
