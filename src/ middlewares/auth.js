

// authMiddleware.js

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const verifyToken = (req, res, next) => {
    // Get token from request headers
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }
  
    // Verify token
    jwt.verify(token,JWT_SECRET , (err, decoded) => {
        console.log(err);
      if (err) {
        return res.status(401).json({ success: false, message: 'Failed to authenticate token' });
      }
      // Extract user ID and role  from decoded token
      req.userId = decoded.userId;
      req.role = decoded.role;
     
      next();
    });
  };
  
  module.exports = verifyToken;

