import { z } from 'zod';

export const ZContactUser = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' }),
  number: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' }),
});
