import React, { lazy, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SoftwarePage from "./pages/SoftwarePage";
import HomePage from "./pages/HomePage";
import StudyPage from "./pages/StudyPage";
import FlyingPage from "./pages/FlyingPage";
import SailingPage from "./pages/SailingPage";
import DivingPage from "./pages/DivingPage";
import ArticlesListPage from "./pages/ArticleListPage";
import SpaceBlasterPage from "./pages/SpaceBlasterPage";
import ArticlesRouter from "./components/ArticlesRouter";
import { Divider, Container, FormGroup, FormControlLabel } from "@material-ui/core";
import { Switch as SwitchButton } from "@material-ui/core"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  if (darkMode) {
    lazy(() => import("./AppDark"));
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Container className='Darkmode'>
            <FormGroup row>
              <FormControlLabel
                control={<SwitchButton checked={darkMode} onChange={handleChange} name="checkedA" />}
                label="Dark Mode"
              />
            </FormGroup>
          </Container> */}
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
              <Route exact path="/tech" render={
                (props) => <SoftwarePage />
              } />
              <Route exact path="/study" render={
                (props) => <StudyPage />
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
              <Route exact path="/articles" render={
                (props) => <ArticlesListPage />
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
