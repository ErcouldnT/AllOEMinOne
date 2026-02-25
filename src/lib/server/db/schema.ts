import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// ─── Products ───────────────────────────────────────────────
export const products = sqliteTable('products', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	url: text('url').notNull().unique(),
	img: text('img'),
	source: text('source').notNull(),
	prices: text('prices', { mode: 'json' }).notNull().$type<{ price: string; date: string }[]>(),
	createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
	updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Searches ───────────────────────────────────────────────
export const searches = sqliteTable('searches', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	product: text('product').notNull().unique(),
	count: integer('count').notNull().default(1),
	createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
	updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Build Products (JSON inside builds) ────────────────────
export interface BuildProduct {
	title: string;
	price: string;
	url: string;
	img?: string;
	source: string;
	amount: number;
}

export interface BuildComment {
	owner: string;
	comment: string;
	date: string;
}

// ─── Builds ─────────────────────────────────────────────────
export const builds = sqliteTable('builds', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	desc: text('desc'),
	owner: text('owner').notNull(),
	pw: text('pw'),
	locked: integer('locked', { mode: 'boolean' }).notNull().default(false),
	build: text('build', { mode: 'json' }).notNull().$type<BuildProduct[]>(),
	upvote: integer('upvote').notNull().default(0),
	downvote: integer('downvote').notNull().default(0),
	comments: text('comments', { mode: 'json' }).$type<BuildComment[]>().default([]),
	views: integer('views').notNull().default(0),
	createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString()),
	updatedAt: text('updated_at').notNull().$defaultFn(() => new Date().toISOString()),
});

// ─── Types ──────────────────────────────────────────────────
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
export type Search = typeof searches.$inferSelect;
export type NewSearch = typeof searches.$inferInsert;
export type Build = typeof builds.$inferSelect;
export type NewBuild = typeof builds.$inferInsert;
