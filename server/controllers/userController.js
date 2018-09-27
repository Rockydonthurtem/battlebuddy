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
  // console.log(req.body);
  const db = req.app.get("db");
  const { name, email, address, phone_number } = req.body;

  db.post_users([name, email, address, phone_number])
    .then(response => {
      // console.log(response);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Come back later" });
    });
};

const deleteUsers = (req, res) => {
  const db = req.app.get("db");
  db.delete_users([req.params.id])
    .then(response => {
      // console.log(response);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Could not complete delete" });
      console.log(err);
    });
};

const getOneUser = (req, res) => {
  // console.log(req.user);
  const db = req.app.get("db");

  db.get_usersByAuthid(req.user.authid)
    .then(response => {
      console.log(response);
      res.status(200).send(response[0]);
    })
    .catch(err => console.log(err));
};
const logOut = (req, res) => {
  req.session.destroy(() => {
    // res.redirect("http://localhost:3000/#/firstpage");
    res.redirect(process.env.REACT_APP_DESTROY);
  });
};
const getAdmin = (req, res) => {
  const db = req.app.get("db");

  db.admin_get().then(response => {
    // console.log(response);

    res.status(200).send(response);
  });
};
module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  getOneUser,
  logOut,
  getAdmin
};
