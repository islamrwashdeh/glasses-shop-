const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createFrame = async ({name, description, status, stock, price,currency}) => {
  
      const frame = await prisma.frame.create({
        data: {
          name,
          description,
          status,
          stock,
          price,
          currency
        }
      });
  return frame;
  
  };
  

  exports.createlenses = async ({colour, description, prescriptionType, stock, price,lensType ,currency  }) => {
  
    const lens = await prisma.lens.create({
      data: {
        colour,
        description,
        prescriptionType,
        stock,
        price,
        lensType,
        currency
      }
    });
return lens;

};

