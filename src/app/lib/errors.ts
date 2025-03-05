import { z } from "zod";

export const errors = {
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  birthday: z
    .string()
    .min(1, { message: "Birthday is required!" }) // Ensure the field is not empty
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format!",
    }) // Validate the date
    .transform((val) => new Date(val)), // Transform to a Date object
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  photo:
    typeof window !== "undefined"
      ? z.instanceof(File, { message: "Photo is required!" }) // Validate as File only in the browser
      : z.any(), // Skip validation on the server
};
