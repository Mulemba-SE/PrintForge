import { notFound } from "next/navigation"
import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "@/app/lib/models"
import { getAllCategories } from "@/app/lib/categories"
import type { CategoryPageProps } from "@/app/types"

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params

  const category = getAllCategories().find((cat) => cat.slug === categoryName)
  if (!category) {
    notFound()
  }

  const models = await getModels({ category: categoryName })

  return <ModelsGrid title={category.displayName} models={models} />
}