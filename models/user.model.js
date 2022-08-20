const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.create = (data) => {
  return prisma.user.create({
    data,
  });
};
