import { getDBConnection } from "../db"
import categories from "../../data/categories.json"

async function seedCategories() {
    const db = await getDBConnection()

    await db.exec(`
        CREATE TABLE IF NOT EXISTS categories (
            slug TEXT PRIMARY KEY,
            name TEXT NOT NULL
        );
    `)


const insertCategoryStmt = await db.prepare(`
        INSERT OR REPLACE INTO categories (
            slug,
            name
        ) VALUES (?, ?);
    `)

for (const category of categories) {
    await insertCategoryStmt.run(
        category.slug,
        category.displayName
    )
}

await insertCategoryStmt.finalize()
await db.close()

console.log('Categories table seeded')

}

seedCategories().catch((error) => {
    console.error('Error seeding categories table:', error)
})