const getBulletin = (req, res) => {
  const db = req.app.get("db");

  db.activity_get()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
};
const postActivity = (req, res) => {
  const db = req.app.get("db");
  const { date, location, description } = req.body;

  db.activity_post([date, location, description])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
};

const postServices = (req, res) => {
  const db = req.app.get("db");
  const { date, who, location, what } = req.body;

  db.services_post([date, who, location, what])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
};
const deleteActivityPost = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;

  db.activity_delete([id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
};
const updateActivityPost = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  console.log(req.params);
  const { date, location, description } = req.body;
  console.log(req.body);

  db.activity_update([id, date, location, description])
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
};

module.exports = {
  postActivity,
  postServices,
  deleteActivityPost,
  updateActivityPost,
  getBulletin
};
