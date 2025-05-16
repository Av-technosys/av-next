'use server';
import { blogTable } from '../db/schema';
import { db } from './db';

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
    })
    .returning();

  console.log(response);

  return response;
}
