import { boolean, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const blogTable = pgTable('blog', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title').notNull(),
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
