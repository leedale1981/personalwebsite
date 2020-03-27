import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SoftwarePage from "./pages/SoftwarePage";
import HomePage from "./pages/HomePage";
import PhysicsPage from "./pages/PhysicsPage";
import FlyingPage from "./pages/FlyingPage";
import SailingPage from "./pages/SailingPage";
import DivingPage from "./pages/DivingPage";
import SpaceBlasterPage from "./pages/SpaceBlasterPage";
import ArticlesRouter from "./components/ArticlesRouter";
import { Divider, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Container className='Container'>
            <Header />
          </Container>
        </header>
        <Divider />
        <body>
          <Container className="Container">
            <Switch>
              <Route exact path="/" render={
                (props) => <HomePage />
              } />
              <Route exact path="/technology" render={
                (props) => <SoftwarePage />
              } />
              <Route exact path="/physics" render={
                (props) => <PhysicsPage />
              } />
              <Route exact path="/flying" render={
                (props) => <FlyingPage />
              } />
              <Route exact path="/sailing" render={
                (props) => <SailingPage />
              } />
              <Route exact path="/diving" render={
                (props) => <DivingPage />
              } />
              <Route exact path="/spaceblaster" render={
                (props) => <SpaceBlasterPage />
              } />
              <ArticlesRouter />
            </Switch>
          </Container>
          <Divider />
        </body>
        <footer className="App-Footer">
          <Container className="Container">
            <Footer />
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
