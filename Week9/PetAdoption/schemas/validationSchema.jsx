import { z } from "zod";

export const formSchema = z.object({
  adopterName: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  petType: z.string().trim().min(1, "Pet type is required"),
  breed: z.string().trim().min(3, "Breed must be at least 3 characters"),
});


export function validate(values){
  const result = formSchema.safeParse(values);

  if (result.success) {
    return {};
  }

  const newErrors = {};

  console.log(result.error.issues);
  for (const issue of result.error.issues) {
    const fieldName = issue.path[0];
    if (typeof fieldName === "string" && !newErrors[fieldName]) {
      newErrors[fieldName] = issue.message;
    }
  }

 return newErrors;
}