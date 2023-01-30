import { Component } from "react";
class RegisterForm extends Component{
  render(){
    return(
      <form className="container">
        <div className="mb-3">
    <label htmlFor="exampleFirstName" className="form-label">First Name</label>
    <input type="text" className="form-control" id="exampleFirstName" required placeholder="Your FirstName"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleLastName" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="exampleLastName" required placeholder="Your LastName"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleGender" className="form-label">Gender</label><br/>
 
    <input type="radio" className="form-check-input" id="exampleCheck1"/>Male 
    <input type="radio" className="form-check-input" id="exampleCheck1"/>Female
    <input type="radio" className="form-check-input" id="exampleCheck1"/>Other
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleAddress" className="form-label">Address</label>
    <textarea className="form-control" id="exampleAddess" rows="2" cols="10" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  
 
    )
  }
}
export default RegisterForm;