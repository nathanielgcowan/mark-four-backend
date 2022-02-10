module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '65abd8a3624256fe59e78c29d795a02b'),
  },
});
