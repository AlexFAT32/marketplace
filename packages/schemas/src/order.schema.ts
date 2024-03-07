import { z } from 'zod';

import dbSchema from './db.schema';

export const orderSchema = dbSchema.extend({
  productId: z.string(),
  payStatus: z.string(),
  userId: z.string(),

}).strict();
