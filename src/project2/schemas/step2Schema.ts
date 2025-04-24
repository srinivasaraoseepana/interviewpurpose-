import { z } from "zod";

export const step2Schema = z.object({
  income: z
    .number({ invalid_type_error: "Income must be a number" })
    .positive("Income must be greater than 0")
    .optional(),
  businessName: z.string().optional(),
});
