// import React from "react";
import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';

import './style.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }
