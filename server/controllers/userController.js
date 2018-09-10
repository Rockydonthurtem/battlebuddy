const getUsers = (req, res) => {
  req.app
    .get("db")
    .get_users()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const postUsers = (req, res) => {
  console.log(req.body);
  const db = req.app.get("db");
  const { name, email, address, phone_number } = req.body;

  db.post_users([name, email, address, phone_number])
    .then(response => {
      console.log(response);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Come back later" });
    });
};
module.exports = {
  getUsers,
  postUsers
};
