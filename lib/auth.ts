import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/admin/login", // Página de login personalizada
    error: "/admin/login", // Página de erro personalizada
  },
  session: {
    strategy: "jwt", // Usando JWT para sessões
    maxAge: 30 * 24 * 60 * 60, // Sessão expira em 30 dias
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validar credenciais
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email e senha são obrigatórios");
        }

        // Buscar usuário no banco de dados
        const user = await db.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Usuário não encontrado");
        }

        // Validar senha
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Senha incorreta");
        }

        // Retornar dados do usuário
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role, // Certifique-se de que "role" existe no modelo do Prisma
        };
      },
    }),
  ],
  callbacks: {
    // Callback para adicionar dados ao token JWT
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    // Callback para incluir dados do token na sessão
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        role: token.role as string,
      };
      return session;
    },
  },
};
