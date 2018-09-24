const postLatLng = (req, res) => {
  // console.log(req.body);
  const db = req.app.get("db");
  const { lat, lng } = req.body.latLng;

  db.create_location([lat, lng])
    .then(response => {
      // console.log(response);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send({ errorMessage: "Come back later" });
    });
};

const getLatLng = (req, res) => {
  const db = req.app.get("db");
  db.get_lat_lng()
    .then(latlng => {
      // console.log(latlng);
      res.status(200).send(latlng);
    })
    .catch(err => res.status(500).send("err"));
};
module.exports = {
  postLatLng,
  getLatLng
};
