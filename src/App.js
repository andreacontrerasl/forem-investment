import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Services from './components/Services/ServicesView';
import FooterView from './components/Footer/FooterView';
import Contact from './components/Contact';
import mainTheme from './styles/theme/mainTheme';
import AskAPIView from './components/AskAPIView';
import WhyForemView from './components/WhyForem/WhyForemView';
import ServicePage from './components/Services/ServicePage'

function App() {
  const [language, setLanguage] = useState('EN')
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Navbar data={{language, setLanguage}}/>
        <Routes>
          <Route path="/" element={<Home data={{language}} />} />
          <Route path="/whyforem" element={<WhyForemView data={{language}} />} />
          <Route path="/services" element={<Services data={{language}} />} />
          <Route path="/contact" element={<Contact data={{language}} />} />
          <Route path='/askai' element={<AskAPIView data={{language}} />} />
          <Route path='/family-office' element={<ServicePage data={{language}} />} />
          <Route path='/investments-portfolio' element={<ServicePage data={{language}} />} />
          <Route path='/custodian-data-aggregation' element={<ServicePage data={{language}} />} />
        </Routes>
        <FooterView />
      </Router>
    </ThemeProvider>
  );
}

export default App;
