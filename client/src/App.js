import './App.css';
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './scrollToTop';
import PageLoader from './Components/PageLoader/page-loader';
import GlobalStyle from './globalStyles';
import Navbar from './Navbar/navbar';
import { useSelector } from 'react-redux';
import { LightTheme, DarkTheme } from './Theme/theme';

const LazyMainPage = React.lazy(() => import('./Pages/Main/main'));
const LazyDetailsPage = React.lazy(() => import('./Pages/DetailsPage/details-page'));



function App() {

  const theme = useSelector((state) => state.theme.theme);
  const ternary = theme === 'light' || theme === null;

  

  return (
    <>
      <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      
        <Suspense fallback={<PageLoader theme={ternary ? LightTheme : DarkTheme} title="Loading, Please wait..." height="100vh" />}>
          <Switch>
            <Route path="/" component={LazyMainPage} exact />
            <Route path="/view-country/:id" component={LazyDetailsPage} exact />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
