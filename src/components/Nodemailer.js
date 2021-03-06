import React, { Component } from "react";
import axios from "axios";

class Nodemailer extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    // axios({
    //   method: "POST",
    //   url: "/api/send",
    //   data: {
    //     name: name,
    //     email: email,
    //     messsage: message
    //   }
    // })
    axios.post("/api/send", { name, email, message }).then(response => {
      console.log("THIS IS RESPONSE FROM AXIOSPOST", response);
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "success") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    return (
      <div>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label for="name">Name</label>
            <br />
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <br />
            <label for="message">Message</label>
            <br />
            <textarea className="form-control" rows="5" id="message" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Nodemailer;
