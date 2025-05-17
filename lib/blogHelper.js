'use server';
import { eq } from 'drizzle-orm';
import { blogTable } from '../db/schema';
import { db } from './db';

function createSlug(title) {
  return title
    .toLowerCase() // Convert title to lowercase
    .trim() // Remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, '') // Remove any characters that aren't letters, numbers, spaces, or hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove consecutive hyphens
}

export async function insertBlog({
  title = '',
  metaDescription = '',
  blogCategory = '',
  image = '',
  tags = [],
  date = '',
  data = '',
  userImage = '',
  userName = '',
  isVisible = true,
}) {
  var slug = createSlug(title);
  const isSlugExist = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.slug, slug));
  if (isSlugExist.length > 0) {
    slug = `${slug}-${isSlugExist.length + 1}`;
  }
  const response = await db
    .insert(blogTable)
    .values({
      title,
      metaDescription,
      blogCategory,
      image,
      tags,
      date: JSON.stringify(date),
      data,
      userImage,
      userName,
      isVisible,
      slug,
    })
    .returning();

  console.log(response);

  return response;
}

export async function getAllBlogsMetaDeta() {
  const data = await db.select().from(blogTable);
  return data;
}

export async function getBlogBySlug(slug) {
  const data = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.slug, slug));
  return data;
}
