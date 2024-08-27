import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

// Fonction pour gérer les requêtes GET
export const GET = async (request) => {
  try {
    // Crée une instance de URL à partir de l'URL de la requête pour extraire les paramètres de requête
    const url = new URL(request.url);
    
    // Récupère les paramètres de requête pour les filtres. Utilise des chaînes vides par défaut si les paramètres ne sont pas présents
    const date = url.searchParams.get('date') || '';
    const location = url.searchParams.get('location') || '';
    const time = url.searchParams.get('time') || '';
    const category = url.searchParams.get('category') || ''; 

    // Crée un objet pour les conditions de filtrage, initialisé comme un objet vide
    const filterConditions = {};
    if (date) {
      filterConditions.date = new Date(date);
    }
    if (location) {
      filterConditions.location = location;
    }
    if (time) {
      filterConditions.time = time;
    }
    if (category) {
      filterConditions.category = category; 
    }

    // Effectue une requête pour récupérer les programmes de la base de données en appliquant les conditions de filtrage
    const programmes = await prisma.programme.findMany({
      where: filterConditions,
    });

    return new NextResponse(JSON.stringify(programmes), { status: 200 });
  } catch (err) {
    console.error('Erreur lors de la récupération des programmes:', err);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors de la récupération des programmes" }),
      { status: 500 }
    );
  }
};
