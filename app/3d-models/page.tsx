import ModelsGrid from "@/app/components/ModelsGrid"
import SearchForm from "@/app/components/SearchForm"
import { getAllModels, getModels } from "@/app/lib/models"
import type { ModelsPageProps } from "@/app/types"

export default async function Page({ searchParams }: ModelsPageProps) {
    const { query } = await searchParams

    const models = await getModels({ query})


    return (
        <>
            <SearchForm action="/3d-models" defaultValue={query} />

            {models.length > 0 ? (
                <ModelsGrid title="3D Models" models={models} />
            ) : (
                <div className="container px-4 py-8 mx-auto">
                    <h1 className="mb-4 text-3xl font-bold">3D Models</h1>
                    <p className="text-gray-600">
                        No models found for &quot;{query}&quot;. Try a different search.
                    </p>
                </div>
            )}
        </>
    )
}