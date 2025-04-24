import * as z from "zod";

export const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  userType: z.enum(["salaried", "self-employed"]),
});
