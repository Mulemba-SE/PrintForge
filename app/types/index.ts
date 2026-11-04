import type { ReactNode } from "react"

// Data Types
export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

// Page Types
export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
    searchParams: Promise<{
        query?: string
    }>
}

export type ModelsPageProps = {
    searchParams: Promise<{
        query?: string
    }>
}

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type PillProps = {
    children: ReactNode
    className?: string
    role?: string
    "aria-label"?: string
}

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

export type Post = {
    id: number
    userId: number
    title: string
    body: string
}

export type SearchFormProps = {
    action: string
    defaultValue?: string
}