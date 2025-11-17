import {
  boolean,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';

export const blogTable = pgTable('blog', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title').notNull(),
  metaTitle: varchar('metaTitle'),
  metaDescription: varchar('meta_description').notNull(),
  blogCategory: varchar('blog_category').notNull(),
  image: varchar('image').notNull(),
  tags: varchar('tags').array(),
  date: varchar('date').notNull(),
  data: varchar('data').notNull(),
  userImage: varchar('user_image'),
  userName: varchar('user_name'),
  slug: varchar('slug'),
  isVisible: boolean('is_visible').notNull().default(true),
});

export const blogForm = pgTable('blogForm', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name'),
  email: varchar('email'),
  message: varchar('message'),
  number: varchar('number'),
  slug: varchar('slug'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const leadFormsData = pgTable('formsData', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name'),
  email: varchar('email'),
  message: varchar('message'),
  number: varchar('number'),
  slug: varchar('slug'),
  createdAt: timestamp('created_at').defaultNow(),
});
