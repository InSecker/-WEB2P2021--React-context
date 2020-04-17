import React, { useContext } from 'react';
import './App.css';

import LoggedContext from './Context.js'

function App() {

  let login = function() {
    return( <LoggedContext.Provider value="true"></LoggedContext.Provider> )
  }

  // const logout = function() {
  //   return( <LoggedContext.Provider value="false"></LoggedContext.Provider> )
  // }

  return(
    <div>
      {login}
      <LoggedContext.Consumer>
        {value => {
          if ( value ) {
            return(<h1>Logged</h1> )
          } else {
            return(<h1>Please login</h1> )
          }
        }}
      </LoggedContext.Consumer>
    </div>
  );
}

export default App;
