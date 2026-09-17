import type { CategoryPageProps } from "@/app/types";
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params
  return <h1>{categoryName}</h1>
}