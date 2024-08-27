import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

// Fonction pour gérer les requêtes GET
export const GET = async () => {
  try {
    // Obtenir les dates, lieux, heures et catégories distincts
    const [dates, locations, times, categories] = await Promise.all([
      prisma.programme.findMany({
        distinct: ['date'],
        select: { date: true }
      }),
      prisma.programme.findMany({
        distinct: ['location'],
        select: { location: true }
      }),
      prisma.programme.findMany({
        distinct: ['time'],
        select: { time: true }
      }),
      prisma.programme.findMany({
        distinct: ['category'],
        select: { category: true }
      })
    ]);

    // Mapper les résultats pour obtenir des listes simples
    return new NextResponse(JSON.stringify({
      dates: dates.map(item => item.date.toISOString().split('T')[0]), // Formate les dates
      locations: locations.map(item => item.location),
      times: times.map(item => item.time),
      categories: categories.map(item => item.category),
    }), { status: 200 });
  } catch (err) {
    console.error('Erreur lors de la récupération des options de filtre:', err);
    return new NextResponse(
      JSON.stringify({ message: "Erreur lors de la récupération des options de filtre" }),
      { status: 500 }
    );
  }
};
