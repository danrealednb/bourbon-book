import { prisma } from "./database.server";

export async function addBrand(brandData) {
  const existingBrand = await prisma.brand.findFirst({
    where: { name: brandData.name },
  });

  if (existingBrand) {
    const error = new Error(`Brand ${brandData.name} exists already.`);
    error.status = 422;
    throw error;
  }

  try {
    return await prisma.brand.create({
      data: {
        name: brandData.name,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add brand.");
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: { name: "asc" },
    });
    return brands;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get brands.");
  }
}

export async function deleteBrand(id) {
  try {
    const brand = await prisma.brand.delete({
      where: { id },
    });
    return brand;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete brand.");
  }
}

export async function updateBrand(id, brandData) {
  try {
    const brand = await prisma.brand.update({
      where: { id },
      data: {
        name: brandData.name,
      },
    });
    return brand;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update brand.");
  }
}

export async function getBrand(id) {
  try {
    const brand = await prisma.brand.findFirst({
      where: { id },
    });
    return brand;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get brand.");
  }
}
