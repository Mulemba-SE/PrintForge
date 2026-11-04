import Form from "next/form"
import type { SearchFormProps } from "@/app/types"

export default function SearchForm({ action, defaultValue }: SearchFormProps) {
    return (
        <div className="container px-4 pt-8 mx-auto">
            <Form action={action}>
                <input
                    type="search"
                    name="query"
                    placeholder="Search models..."
                    defaultValue={defaultValue}
                    aria-label="Search models"
                    className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-full md:max-w-md focus:outline-none focus:border-[#F77D36] focus:ring-1 focus:ring-[#F77D36]"
                />
            </Form>
        </div>
    )
}