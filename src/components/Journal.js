import React, { Component } from "react";
import axios from "axios";
import "./Journal.css";
import { connect } from "react-redux";

class Journal extends Component {
  constructor() {
    super();
    this.state = {
      title: " ",
      body: " ",
      story: []
    };
    this.postStory = this.postStory.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios.get("/api/story").then(response => {
      // console.log(response);
      this.setState({ story: response.data });
    });
  }

  postStory(title, body, id) {
    axios.post("/api/story", { title, body, id }).then(response => {
      console.log(response);
      this.setState({ story: response.data });
    });
  }
  handleDelete(id) {
    axios.delete(`/api/deletePost/${id}`).then(response => {
      // console.log(response);
      this.setState({ story: response.data });
    });
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    let newStory = this.state.story.map((e, i) => (
      <p className="storybox" key={i}>
        {e.title}
        <br />
        {e.body}
        <br />
        {this.props.user.authUser.admin && (
          <button onClick={() => this.handleDelete(e.map_id)}>Delete</button>
        )}
      </p>
    ));
    return (
      <div className="overallJournal">
        <div className="journal">
          <div> {newStory}</div>
        </div>
        <br />
        <p />
        <div className="bottomJournal">
          <input
            className="storytitle"
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Title"
          />
          <br />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="storybody"
            onChange={e => this.setState({ body: e.target.value })}
            type="text"
            placeholder="Share your story"
          />

          <br />
          <button
            className="storybutton"
            onClick={() =>
              this.postStory(
                this.state.title,
                this.state.body,
                this.props.user.authUser.user_id
              )
            }
          >
            Share
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Journal);
