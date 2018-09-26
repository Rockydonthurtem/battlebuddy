const stripe = require("../constants/stripe");

const postStripeCharge = res => (stripeErr, stripeRes) => {
  console.log("This is stripErr", stripeErr);
  console.log("This is stripeRes", stripeRes);
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

const paymentApi = app => {
  app.get("/", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  });

  app.post("/", (req, res) => {
    console.log("THIS IS post/", req.body);
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = paymentApi;
