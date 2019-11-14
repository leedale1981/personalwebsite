import React from 'react';
import { Divider, Container } from '@material-ui/core';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Container className='Container'>
          <Header />
        </Container>
      </header>
      <Divider />
      <body>
        <Container className='Container'>
          <MainContent />
        </Container>
        <Divider />
      </body>
      <footer className="App-Footer">
        <Container className='Container'>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

export default App;
