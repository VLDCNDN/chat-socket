const { PrismaClient, Prisma } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require('../utils/request_token.util');

const prisma = new PrismaClient();

const { exclude } = require("../utils/prisma.util");

const hiddenFields = ["id","password", "salt", "createdAt", "updatedAt"];

exports.create = async (data) => {
  const toReturn = {
    error: "",
    data: {},
  };

  try {
    delete data.repeat_password;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);

    data.salt = salt;
    data.password = hash;

    const user = await prisma.user.create({
      data,
    });

    if (user !== "" || user !== undefined) {
      const userData = exclude(user, hiddenFields);
      const token = jwt.generate(userData);
      user.token = token;

      toReturn.data = userData;
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        toReturn.error = "Username already exist!";
      }
    }
  }

  return toReturn;
};

exports.getUser = async (data) => {
  const toReturn = {
    error: "",
    data: {},
  };

  try {
    const user = await prisma.user.findUnique({
      where: { username: data.username },
    });

    if (user) {
      const compare = bcrypt.compareSync(data.password, user.password);
      if (compare) {
        const userData = exclude(user, hiddenFields);
        const token = jwt.generate(userData);
        user.token = token;

        toReturn.data = userData;
      } else {
        toReturn.error = "Error Logging in";
      }
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        toReturn.error = "Error loggin in";
      }
    }
  }

  return toReturn;
};
