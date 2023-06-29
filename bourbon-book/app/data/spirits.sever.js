import { prisma } from "./database.server";

export async function addSpirit(spiritData) {
  try {
    return await prisma.spirit.create({
      data: {
        name: spiritData.name,
        brandId: spiritData.brandId,
        brandName: spiritData.brandName,
        type: spiritData.type,
        proof: spiritData.proof,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add spirit.");
  }
}

export async function getSpirits() {
  try {
    const spirits = await prisma.spirit.findMany({
      orderBy: { name: "asc" },
    });
    return spirits;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get spirits.");
  }
}

export async function deleteSpirit(id) {
  try {
    const spirit = await prisma.spirit.delete({
      where: { id },
    });
    return spirit;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete spirit.");
  }
}

export async function updateSpirit(id, spiritData) {
  try {
    const spirit = await prisma.spirit.update({
      where: { id },
      data: {
        name: spiritData.name,
        brandId: spiritData.brandId,
        brandName: spiritData.brandName,
        type: spiritData.type,
        proof: spiritData.proof,
      },
    });
    return spirit;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update spirit.");
  }
}

export async function getSpirit(id) {
  try {
    const spirit = await prisma.spirit.findFirst({
      where: { id },
    });
    return spirit;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get spirit.");
  }
}
