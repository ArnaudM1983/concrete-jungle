const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log("Connecté à la base de données avec succès!");
    } catch (e) {
        console.error("Erreur de connexion à la base de données:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
