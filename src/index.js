//React imports
import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';

// //Pages
import Home from './pages/Home';
import About from './pages/AboutUs';
import Servers from './pages/Servers';
import LeaderBoards from './pages/LeaderBoards';
import Membership from './pages/Membership';
import News from './pages/News';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
//Amplify imports
 import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css'
import { studioTheme } from './ui-components';
//Amplify Components

//Amplify Configuration
Amplify.configure(awsExports);


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="servers" element={<Servers />} />
          <Route path="leader-boards" element={<LeaderBoards />} />
          <Route path="membership" element={<Membership />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals