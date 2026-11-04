import { getDBConnection } from "./db"
import type { Model } from "../types"

type GetModelsConfig = {
  category?: string
  query?: string
}

export async function getAllModels(): Promise<Model[]> {
  const db = await getDBConnection()
  try {
    return await db.all<Model[]>("SELECT * FROM models ORDER BY id")
} finally {
    await db.close()
  }
}

export async function getModels(config: GetModelsConfig = {}): Promise<Model[]> {
  const { category, query } = config

  const conditions: string[] = []
  const params: string[] = []

  if (category) {
    conditions.push("category = ?")
    params.push(category)
  }

  const search = query?.trim()
  if (search) {
        const escaped = search.replace(/[\\%_]/g, "\\$&")
        conditions.push("(name LIKE ? ESCAPE '\\' OR description LIKE ? ESCAPE '\\')")
        params.push(`%${escaped}%`, `%${escaped}%`)
    }
  
  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : ""
  
  const db = await getDBConnection()
  try {
    if (!category) {
      return await db.all<Model[]>("SELECT * FROM models ORDER BY id")
    }
    return await db.all<Model[]>(
      "SELECT * FROM models WHERE category = ? ORDER BY id",
      category
    )
  } finally {
    await db.close()
  }
}


export async function getModelById(id: string | number): Promise<Model> {
  const db = await getDBConnection()
  try {
    const model = await db.get<Model>("SELECT * FROM models WHERE id = ?", id)
    if (!model) {
      throw new Error(`Model with id ${id} not found`)
    }
    return model
  } finally {
    await db.close()
  }
}

