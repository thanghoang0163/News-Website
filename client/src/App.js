import React, { Component, Suspense } from "react";
import './App.css';

import { Route, Routes} from 'react-router-dom';


const FAQs = React.lazy(() => import("./infor-page/faqs.jsx"));


class App extends Component {
  render() {
    return(
      <React.StrictMode>
        <Suspense fallback={<div><h1>Loading...</h1></div>}>
          <Routes>
              <Route path ="/FAQs" element={<FAQs/>}/>
              
          </Routes>
        </Suspense>
      </React.StrictMode>
    );
  }
}

export default App;
