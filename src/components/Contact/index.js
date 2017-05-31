import React from 'react';

const Contact = () => (
  <section>
    <h2>Contact Page</h2>
    
    <form>
      <div className="form-info-container">
        <div className="form-group">
          <label htmlFor="userName">Your Name</label>
          <input type="text" className="form-control" id="contact-userName" placeholder="Enter Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">Email Address</label>
          <input type="text" className="form-control" id="contact-userEmail" placeholder="Enter Email Address"/>
        </div>
        <div className="form-group">
          <label htmlFor="userTelephone">Your Phone Number</label>
          <input type="text" className="form-control" id="contact-userTelephone" placeholder="Enter Phone Number with Area Code"/>
        </div>
        <div className="form-group">
          <label htmlFor="userMessage">Your Phone Number</label>
          <textarea className="form-control" id="contact-userMessage" placeholder="Enter Your Message"></textarea>
        </div>
        <button type="button" className="btn btn-default submit">Submit</button>
      </div>
    </form>
  </section>
)

export default Contact;