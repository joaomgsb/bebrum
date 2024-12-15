import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  try {
    const password = await bcrypt.hash("admin123", 10)
    
    const admin = await prisma.user.upsert({
      where: { email: "admin@bebrum.com.br" },
      update: {
        password,
        role: "ADMIN"
      },
      create: {
        email: "admin@bebrum.com.br",
        name: "Admin",
        password,
        role: "ADMIN"
      }
    })

    console.log("Admin user created:", admin)
  } catch (error) {
    console.error("Error seeding database:", error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })