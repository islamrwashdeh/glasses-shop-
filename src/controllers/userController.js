
const {
userService,
}=require('../services');

const httpStatus = require('http-status');
const bcrypt = require('bcryptjs');


const jwt = require('jsonwebtoken');

////  register and  login 
exports.createUser = async (req, res) => {
    try {
      const result = await userService.createUser(req.body);
      return res.status(httpStatus.CREATED).send({ data: result });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal server error' });
    }
  };

exports. /// user   loginn to ditrmine  the    role  
loginUser = async (req, res) => {
    try 
    {
      const { email, password } = req.body;
      console.log( email, password );
  
      // Find th user by username
      const user = await userService.getUserByemail(email);
  
      if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).json({ success: false, message: 'Invalid username or password' });
      }
  
      // Compare the provided password wth the hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(httpStatus.UNAUTHORIZED).json({ success: false, message: 'Invalid username or password' });
      }
  
      // Generate a JWT token
       const token = jwt.sign({ userId: user.id, email: user.email, role:user.role }, process.env.JWT_SECRET);
  
      // Send the token back to the client
      res.json({ success: "welcom ",token });
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal server error' });
    }
  };
  

  ///// inventory 

 /// get  the  freams list 
  exports.getActiveFrames= async (req, res) => {
    try {
        const result = await userService.getActiveFrames(req.body.status);
        return res.status(httpStatus.CREATED).send({ data: result });
      } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal server error' });
      }
    };

// get  the  lenses   lest 
    exports.getAllLenses= async (req, res) => {
        try {
            const result = await userService.getActivelens();
            return res.status(httpStatus.CREATED).send({ data: result });
          } catch (error) {
            console.error(error);
            return res.status(500).send({ error: 'Internal server error' });
          }
        };


///  creat  the  glasse 
    exports.createCustomGlasses =async(req,res) =>{
        const { userId, frameId, lensId } = req.body;

        try {
          // Call the service function to add custom glasses to shopping basket
          const result = await userService.addCustomGlassesToBasket(userId, frameId, lensId);
          res.status(200).json({ success: true, message: result });
        } catch (error) {
          res.status(400).json({ success: false, error: error.message });
        }
    };

        