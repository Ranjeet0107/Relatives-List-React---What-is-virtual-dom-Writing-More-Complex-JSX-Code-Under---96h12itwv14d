import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               
               <ol key="relativeList">
                <li key="relativeListItem1">Pragya Pandey</li>
                <li key="relativeListItem1">Raksha </li>
                <li key="relativeListItem1">Sandeep Subba</li>
               </ol>
            </div>
        )
    }
}


export default App;