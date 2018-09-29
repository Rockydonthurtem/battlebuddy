module.exports = {
  getStory: (req, res) => {
    const db = req.app.get("db");

    db.story_getAll()
      .then(response => {
        console.log(response);
        res.status(200).send(response);
      })
      .catch(err => console.log(err));
  },
  postStory: (req, res) => {
    const db = req.app.get("db");
    const { title, body, id } = req.body;

    db.story_create([title, body, id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => console.log(err));
  },
  deletePost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(req.params.id);
    db.delete_post([id]).then(response => {
      console.log(response);
      res.status(200).send(response);
    });
    // .catch(err => {
    //   res.status(500).send({ errorMessage: "Could not complete delete" });
    //   console.log(err);
    // });
  }
};
