import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Initialisation du client Prisma pour interagir avec la base de données
const prisma = new PrismaClient();

// Configuration de NextAuth pour la gestion de l'authentification
const handler = NextAuth({
  providers: [
    // Configuration du provider d'authentification basé sur des identifiants
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Recherche de l'utilisateur dans la base de données en fonction du nom d'utilisateur
        const user = await prisma.user.findUnique({
          where: { username: credentials.username }
        });

        if (!user) {
          throw new Error("Aucun utilisateur trouvé");
        }

        // Vérification du mot de passe fourni avec le mot de passe stocké dans la base de données
        const isValidPassword = await bcrypt.compare(credentials.password, user.password);

        if (!isValidPassword) {
          throw new Error("Mot de passe incorrect");
        }

        return {
          id: user.id,
          name: user.username,
          email: user.email,
          image: user.img,
          isAdmin: user.isAdmin
        };
      }
    })
  ],
  pages: {
    signIn: "/login", 
  },
  session: {
    strategy: "jwt", // Utilisation des JSON Web Tokens pour la gestion des sessions
  },
  callbacks: {
    // Fonction de rappel pour personnaliser les informations de session
    async session({ session, token }) {
      session.user.id = token.sub;
      session.user.isAdmin = token.isAdmin;
      return session;
    },
    // Fonction de rappel pour personnaliser les informations du JSON Web Token
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
