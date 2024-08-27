import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../utils/connect"; 

export async function POST(request) {
  try {
    // Parse les données reçues de la requête
    const { username, email, password } = await request.json();

    // Vérifie que tous les champs requis sont fournis
    if (!username || !email || !password) {
      return NextResponse.json({ message: "Tous les champs sont requis." }, { status: 400 });
    }

    // Vérifie si un utilisateur avec le même nom d'utilisateur ou e-mail existe déjà
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Nom d'utilisateur ou e-mail déjà utilisé." }, { status: 400 });
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur dans la base de données
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Utilisateur créé avec succès." }, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'inscription de l'utilisateur:", error);
    return NextResponse.json({ message: "Erreur lors de l'inscription. Veuillez réessayer." }, { status: 500 });
  }
}
