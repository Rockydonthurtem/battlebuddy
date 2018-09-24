const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_FFQamMaARlOiGenl7X3N5wYs"
    : "pk_test_FFQamMaARlOiGenl7X3N5wYs";

export default STRIPE_PUBLISHABLE;
