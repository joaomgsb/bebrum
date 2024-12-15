import CredentialsProvider from "next-auth/providers/credentials"
import { verifyCredentials } from "../utils/verify-credentials"

export const credentialsProvider = CredentialsProvider({
  id: "credentials",
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      throw new Error("Email e senha são obrigatórios")
    }

    const user = await verifyCredentials(credentials.email, credentials.password)
    if (!user) {
      throw new Error("Credenciais inválidas")
    }

    return user
  }
})