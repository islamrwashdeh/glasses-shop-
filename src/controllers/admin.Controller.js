

const { adminService } = require('../services');
const httpStatus = require('http-status');




///craet  fream 
exports.createFrame = async (req, res) => {   
    try {
      const { name, description, status, stock, price,currency } = req.body;
  
     
      // Call the service function to create the frame
      const frame = await adminService.createFrame({ name, description, status, stock, price,currency });
  
      // Return the response
      return res.status(httpStatus.CREATED).send({ success: true, data: frame });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal server error' });
    }
  };

 //  craet lens  
  exports.createlenses = async (req, res) => {
    try {
      const { colour, description, prescriptionType, stock, price,lensType ,currency } = req.body;
  
     
      // Call the service function to create the lense
      const lense = await adminService.createlenses({ colour, description, prescriptionType, stock, price,lensType ,currency  });
  
      // Return the response
      return res.status(httpStatus.CREATED).send({ success: true, data: lense });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: 'Internal server error' });
    }
  };

