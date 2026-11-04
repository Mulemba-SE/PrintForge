import { getDBConnection } from './db'
import { Category } from '../types'

export async function getAllCategories(): Promise<Category[]> {
  const db = await getDBConnection()
    try {
        return await db.all<Category[]>(`
            SELECT slug, name AS displayName FROM categories ORDER BY name
        `)
    } finally {
        await db.close()
    }
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
    const db = await getDBConnection()
    try {
        return await db.get<Category>(`
            SELECT slug, name AS displayName FROM categories WHERE slug = ?
        `, [slug])
    } finally {
        await db.close()
    }
}