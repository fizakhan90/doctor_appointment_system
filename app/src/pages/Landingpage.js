
  import  "../styles/Login.css" ;
  import React from "react"
  <div>
  <header className="header">
    <div>
      <div classname="left">
        {'{'}/* left box for logo */{'}'} 
        Doctors' App 
      </div>
      <div classname="mid">
        {'{'}/* mid box for nav */{'}'} 
        <ul classname="navbar">
          <li><a href> Home</a></li>
          <li><a href>Login</a></li>
          <li><a href>Sign Up</a></li>
          <li><a href>Reviews</a></li>
        </ul>
      </div>
      <div classname="right">
        {'{'}/* right box for buttons */{'}'}
        <button><div classname="btn">Search for Doctors</div></button>
        <button><div classname="btn"> Contact Us</div></button>
      </div>
      <div classname="text-right">
        We connect Doctors and Patients!
      </div>
    </div></header> 
  <div classname="img-right">
  </div>
  <div classname="form-container ">
    <form layout="vertical" onfinish="{onfinishHandler}" classname="register-form">
      <h3 classname="text-center">Login Form</h3>
      <form.item label="Email" name="email">
        <input type="email" required />
      </form.item>
      <form.item label="Password" name="password">
        <input type="password" required />
      </form.item>
      <link to="/register" classname="m-2" />
      Not a user? Register here!
      <button classname="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  </div>
  );
  {'{'}"{'}'}"{'}'};
  ){'}'}
</div>