import React, { Component } from "react";
import axios from "axios";

class Journal extends Component {
  constructor() {
    super();
    this.state = {
      title: " ",
      body: " ",
      story: []
    };
    this.postStory = this.postStory.bind(this);
  }
  componentDidMount() {
    axios.get("/api/story").then(response => {
      console.log(response);
      this.setState({ story: response.data });
    });
  }

  postStory(title, body) {
    axios.post("/api/story", { title, body }).then(response => {
      console.log(response);
      this.setState({ story: response.data });
    });
  }
  render() {
    console.log(this.state);
    let newStory = this.state.story.map((e, i) => (
      <p className="storybox" key={i}>
        {e.title}
        <br />
        {e.body}
      </p>
    ));
    return (
      <div>
        {newStory}
        <br />
        <br />
        <input
          className="storytitle"
          onChange={e => this.setState({ title: e.target.value })}
          type="text"
          placeholder="Title"
        />
        this was done by lorem 65 Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Animi architecto neque cum non laborum nostrum
        mollitia vel, porro dolore nesciunt eveniet omnis quisquam sapiente quae
        quasi cumque, tenetur distinctio ratione quam amet temporibus. Iusto non
        voluptate dolore eum laboriosam ratione a ab quo facere odit dicta,
        alias natus enim fugit iste deserunt vero provident id error quia
        reiciendis optio molestiae? Vero dolore esse labore atque.
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
          onClick={() => this.postStory(this.state.title, this.state.body)}
        >
          Share
        </button>
      </div>
    );
  }
}

export default Journal;
