import { NextResponse } from "next/server";
import prisma from "../../../../utils/connect"; 

// Fonction pour gérer les requêtes GET
export const GET = async (request) => {
  try {
    // Extraire l'ID de l'URL en utilisant des segments d'URL
    const id = request.nextUrl.pathname.split("/").pop();

    if (!id) {
      return new NextResponse(JSON.stringify({ message: "ID non fourni" }), { status: 400 });
    }

    const programme = await prisma.programme.findUnique({
      where: {
        id: id,
      },
    });

    if (!programme) {
      return new NextResponse(JSON.stringify({ message: "Programme non trouvé" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify(programme), { status: 200 });
  } catch (err) {
    console.error('Erreur lors de la récupération du programme:', err);
    return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération du programme" }), { status: 500 });
  }
};
