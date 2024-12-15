import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash("admin123", 10)
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@bebrum.com.br" },
    update: {},
    create: {
      email: "admin@bebrum.com.br",
      name: "Admin",
      password,
      role: "ADMIN"
    }
  })

  console.log({ admin })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })