import { NextResponse } from "next/server";
import prisma from "../../../utils/connect";

// Fonction pour gérer les requêtes GET
export const GET = async (request) => {
    try {
        // Crée une instance de URL à partir de l'URL de la requête pour extraire les paramètres de requête
        const url = new URL(request.url);

        // Récupère la valeur du paramètre 'category' depuis l'URL. Utilise une chaîne vide par défaut si le paramètre n'est pas présent
        const category = url.searchParams.get('category') || '';  // Récupère la catégorie de la requête

        // Définit les conditions de filtrage basées sur la catégorie. Si aucune catégorie n'est fournie, filtre vide est utilisé.
        const filterConditions = category ? { category } : {};  // Applique le filtre de catégorie 

        // Effectue une requête pour récupérer les points d'intérêt depuis la base de données en appliquant les conditions de filtrage
        const map = await prisma.map.findMany({
            where: filterConditions,
        });

        return new NextResponse(JSON.stringify(map), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: "Erreur lors de la récupération des points d'intérêt" }), { status: 500 });
    }
};
