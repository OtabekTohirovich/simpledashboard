import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/saidbar';
import { Route, Routes } from 'react-router-dom';
import Main from './components';

const App = () => {
  const [state, setState] = useState("");
  const handleAuth = (e) => {
    setState(e);
  };
  return (
    <div className="app">
    <Sidebar handleAuth={(e) => handleAuth(e)} />
    <main className="content">
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/employer" element={<Main />} />
      </Routes>

    </main>
    </div>
  );
}

export default App;
