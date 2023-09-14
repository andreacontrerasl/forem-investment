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
import PersonInformation from './components/WhyForem/PersonInformation';
import { LoadingProvider } from './context/LoadingContext';

function App() {
  const [language, setLanguage] = useState('EN')
  return (
    <ThemeProvider theme={mainTheme}>
      <LoadingProvider>
      <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Navbar data={{language, setLanguage}}/>
        <div style={{ flex: '1' }}>
        <Routes>
          <Route path="/" element={<Home data={{language}} />} />
          <Route path="/whyforem" element={<WhyForemView data={{language}} />} />
          <Route path="/services" element={<Services data={{language}} />} />
          <Route path="/contact" element={<Contact data={{language}} />} />
          <Route path='/askai' element={<AskAPIView data={{language}} />} />
          <Route path='/family-office' element={<ServicePage data={{language}} />} />
          <Route path='/investments-portfolio' element={<ServicePage data={{language}} />} />
          <Route path='/custodian-data-aggregation' element={<ServicePage data={{language}} />} />
          <Route path="/freddy-martinez" element={<PersonInformation data={{language}} />} />
          <Route path="/bernardo-perez" element={<PersonInformation data={{language}} />} />
          <Route path="/michele-di-carlo" element={<PersonInformation data={{language}} />} />
        </Routes>
        </div>
          <FooterView />
        </div>
      </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
