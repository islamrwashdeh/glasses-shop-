const bcrypt = require('bcryptjs');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async ({ username, password, email, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            username,
            password : hashedPassword,
            role,
            email,
        },
    });

    return user;
};


exports.getUserByemail = async (email) => {
    return prisma.user.findUnique({
      where: {
        email,
      }
    });

  };

  exports.getActiveFrames= async (status) => {
    return prisma.frame.findMany({
        where: {
            status:status,
        }
      });
  };
  
  
  exports.getActivelens= async () => {
    return prisma.lens.findMany();
  };


  
 
  exports.addCustomGlassesToBasket = async (userId, frameId, lensId,userCurrency) => {
    
  
    // Retrieve frame and lenses from database
    const frame = await prisma.frame.findUnique({
      where: { id: frameId },
    });
    const lens = await prisma.lens.findUnique({
      where: { id: lensId },
    });
  
    // Check if both frame and lens are in stock
    if (frame.stock < 1 || lens.stock < 1) {
      throw new Error('Frame or lens is out of stock');
    }
  
    // Determine price based on user's currency
    const totalPrice = frame.price + lens.price ; 
    
  
    // Create the custom glasses and add to user's shopping basket
    await prisma.shoppingBasket.create({
      data: {
        userId,
        frameId,
        lensId,
        totalPrice,
        userCurrency:'USD'
        // You may add more details like quantity, timestamps, etc.
      },
    });
  
    // Update stock levels
    await prisma.frame.update({
      where: { id: frameId },
      data: { stock: frame.stock - 1 },
    });
    await prisma.lens.update({
      where: { id: lensId },
      data: { stock: lens.stock - 1 },
    });
  
    return 'Custom glasses added to shopping basket successfully';
  };