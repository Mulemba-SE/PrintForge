import { notFound } from "next/navigation"
import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "@/app/lib/models"
import { getCategoryBySlug } from "@/app/lib/categories"
import type { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { categoryName } = await params
  const { query } = await searchParams

  const category = await getCategoryBySlug(categoryName)
  if (!category) {
    notFound()
  }

  const models = await getModels({ category: categoryName, query })

  return <ModelsGrid title={category.displayName} models={models} />
}