import bcrypt from "bcryptjs"
import { db } from "@/lib/db"

export async function verifyCredentials(email: string, password: string) {
  const user = await db.user.findUnique({
    where: { email }
  })

  if (!user || !user.password) {
    return null
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return null
  }

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  }
}