import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

export const GET = async (request) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page')) || 1;  // Page actuelle, par défaut 1
  const limit = parseInt(url.searchParams.get('limit')) || 1;  // Nombre d'actualités par page, par défaut 1

  try {
    // Compte total des actualités
    const total = await prisma.actus.count();
    
    // Récupère les actualités pour la page actuelle
    const actus = await prisma.actus.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json({
      data: actus,
      meta: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Erreur lors de la récupération des actualités" }, { status: 500 });
  }
};
