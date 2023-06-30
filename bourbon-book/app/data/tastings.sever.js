import { prisma } from "./database.server";

export async function addTasting(tastingData, userId) {
  if (!userId) {
    throw new Error("Failed to add tasting. No session");
  }
  try {
    return await prisma.tasting.create({
      data: {
        spiritId: tastingData.spiritId,
        spiritName: tastingData.spiritName,
        rating: +tastingData.rating,
        notes: tastingData.notes,
        userId: userId,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add tasting.");
  }
}

export async function getTastings(userId) {
  if (!userId) {
    throw new Error("Failed to get tastings. No session.");
  }
  try {
    const tastings = await prisma.tasting.findMany({
      where: { userId },
      orderBy: { spiritName: "asc" },
    });
    return tastings;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get tastings.");
  }
}

export async function deleteTasting(id) {
  try {
    const tasting = await prisma.tasting.delete({
      where: { id },
    });
    return tasting;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete tasting.");
  }
}

export async function updateTasting(id, tastingData) {
  try {
    const tasting = await prisma.tasting.update({
      where: { id },
      data: {
        spiritId: tastingData.spiritId,
        spiritName: tastingData.spiritName,
        rating: +tastingData.rating,
        notes: tastingData.notes,
      },
    });
    return tasting;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update tasting.");
  }
}

export async function getTasting(id) {
  try {
    const tasting = await prisma.tasting.findFirst({
      where: { id },
    });
    return tasting;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get tasting.");
  }
}
