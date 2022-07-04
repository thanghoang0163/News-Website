import React, { Component, Suspense } from "react";
import './App.css';

import { Route, Routes} from 'react-router-dom';

// HomePage
const HomePage = React.lazy(() => import("./home-page/home-page.jsx"));

// Info Pages
const QnA = React.lazy(() => import("./info-page/qna.jsx"));
const TermOfUse = React.lazy(() => import("./info-page/term.jsx"));
const CookiePolicy = React.lazy(() => import("./info-page/cookie-policy.jsx"));
const PrivacyPolicy = React.lazy(() => import("./info-page/privacy-policy.jsx"));
const Advertising = React.lazy(() => import("./info-page/ads.jsx"));


class App extends Component {
  render() {
    return(
      <React.StrictMode>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
          <Routes>
              {/* Home Page */}
              <Route path ="/" element={<HomePage/>}/>

              {/* Info Pages */}
              <Route path ="/QnA" element={<QnA/>}/>             
              <Route path ="/term" element={<TermOfUse/>}/>           
              <Route path ="/cookie-policy" element={<CookiePolicy/>}/>           
              <Route path ="/privacy-policy" element={<PrivacyPolicy/>}/>            
              <Route path ="/advertising" element={<Advertising/>}/>            
          </Routes>
        </Suspense>
      </React.StrictMode>
    );
  }
}

export default App;
