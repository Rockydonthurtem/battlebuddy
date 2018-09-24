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
    const { title, body } = req.body;

    db.story_create([title, body])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => console.log(err));
  }
};
