const jwt = require("jsonwebtoken");

const secret = "mysecretssshhhhhhh";
const expiration = "48h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // console.log(data);
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ userName, _id }) {
    const payload = { userName, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
