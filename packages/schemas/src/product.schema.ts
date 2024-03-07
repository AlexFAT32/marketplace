import { z } from 'zod';

import dbSchema from './db.schema';

export const productSchema = dbSchema.extend({
  title: z.string(),
  imageUrl: z.string().nullable().optional(),
  price: z.number(),
}).strict();
