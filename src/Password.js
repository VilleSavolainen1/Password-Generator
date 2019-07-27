import React from 'react';
import './index.css';
import Create from './Create';
import CopyPassword from './Copy';



//Main function
function Password() {
  return (
  <body>
    <h2 id="header">Password Generator</h2>
    <div class="container">
   <div id="tooltable">
     <div class="row">
     <div class="col col-lg-4">
       <div class="input-group">
       <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
     <input type="text" class="form-control input-sm" id="password" name="password" placeholder="Password"></input>
     </div>
     <div class="btn-group">
    <button class="btn btn btn-sm" id="generate" onClick={Create}>Generate</button>
     <button class="btn btn btn-sm" id="copy" onClick={CopyPassword} data-toggle="tooltip" title="Copy to clipboard">Copy</button>
     </div>
     </div>
     </div>
   </div>
   </div>
  </body>
  );
}


export default Password;
