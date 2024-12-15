import Database from 'better-sqlite3'
import { join } from 'path'
import { schema } from './schema'

const db = new Database(join(process.cwd(), 'data.db'))

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL')

// Initialize database schema
db.exec(schema)

export { db }