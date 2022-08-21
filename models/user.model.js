const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = async (data) => {
  const toReturn = {
    error: "",
    data: {}
  }

  try {

    const user = await prisma.user.create({
      data,
    });
    
    toReturn.data = user;

  }catch(e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        toReturn.error = "Username already exist!";
      }
    }
  }

  return toReturn;
};
