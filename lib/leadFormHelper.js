'use server';
import { desc } from 'drizzle-orm';
import { leadFormsData } from '../db/schema';
import { db } from './db';

export async function submitLeadForm(data) {
  const response = await db.insert(leadFormsData).values(data).returning();
  return response;
}

export async function getLeadFormData() {
  const data = await db
    .select()
    .from(leadFormsData)
    .orderBy(desc(leadFormsData.createdAt));
  return data;
}
