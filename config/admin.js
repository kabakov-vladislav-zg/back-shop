module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0d71f4c67ebc7f45e7d4ab8a046282f6'),
  },
});
