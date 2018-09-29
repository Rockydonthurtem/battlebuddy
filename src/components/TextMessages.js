import React, { Component } from "react";
import axios from "axios";
import Nodemailer from "./Nodemailer";

class TextMessages extends Component {
  constructor() {
    super();
    this.state = {
      text: {
        recipient: " ",
        textmessage: " "
      }
    };

    this.sendText = this.sendText.bind(this);
  }

  sendText() {
    const { text } = this.state;
    axios
      .get(
        `/api/text?recipient=${text.recipient}&textmessage=${text.textmessage}`
      )
      .catch(err => console.log(err));
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin: 8
    };
    const textArea = {
      borderRadius: 4
    };
    return (
      <div className="textMessags">
        <div style={{ marginTop: 10 }}>
          <h2> Send Text Message </h2>
          <label> Your Phone Number </label>
          <br />
          <input
            value={text.recipient}
            onChange={e =>
              this.setState({ text: { ...text, recipient: e.target.value } })
            }
          />
          <div style={spacer} />
          <label> Message </label>
          <br />
          <textarea
            rows={3}
            value={text.textmessage}
            style={textArea}
            onChange={e =>
              this.setState({ text: { ...text, textmessage: e.target.value } })
            }
          />
          <div style={spacer} />
          <button onClick={() => this.sendText()}> Send Text </button>
        </div>
        <br />
        <h2>Send Email</h2>
        <Nodemailer />
      </div>
    );
  }
}

export default TextMessages;
