import { prisma } from "./database.server";

export async function addCollectionItem(collectionData) {
  try {
    return await prisma.collection.create({
      data: {
        spiritId: collectionData.spiritId,
        spiritName: collectionData.spiritName,
        opened: collectionData.opened,
        finished: collectionData.finished,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add collection item.");
  }
}

export async function getCollection() {
  try {
    const collection = await prisma.collection.findMany({
      orderBy: { spiritName: "asc" },
    });
    return collection;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get collection.");
  }
}

export async function deleteCollectionItem(id) {
  try {
    const collection = await prisma.collection.delete({
      where: { id },
    });
    return collection;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete collection item.");
  }
}

export async function updateCollectionItem(id, collectionData) {
  try {
    const collection = await prisma.collection.update({
      where: { id },
      data: {
        spiritId: collectionData.spiritId,
        spiritName: collectionData.spiritName,
        opened: collectionData.opened,
        finished: collectionData.finished,
      },
    });
    return collection;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update collection item.");
  }
}

export async function getCollectionItem(id) {
  try {
    const collection = await prisma.collection.findFirst({
      where: { id },
    });
    return collection;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get collection item.");
  }
}
