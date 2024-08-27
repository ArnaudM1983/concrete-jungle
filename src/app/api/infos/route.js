import { NextResponse } from "next/server"
import prisma from "../../../utils/connect"

// Fonction pour gérer les requêtes GET
export const GET = async () => {
    try {
        // Effectuer une requête pour obtenir toutes les entrées de la collection 'info'
        const infos = await prisma.info.findMany(); // 'info' en minuscule selon le schéma Prisma

        return new NextResponse(JSON.stringify(infos), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération des programmes" }), { status: 500 });
    }
}
