"use server";

import { Product } from "@/app/products/page";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProduct(produto: Product) {
  const response = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });
  await response.json();
  revalidatePath("/products");
  redirect("/products");
}
