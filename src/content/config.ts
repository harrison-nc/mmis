import { z, defineCollection } from "astro:content";

export const actionNameSchema = z.enum([
  "installation",
  "maintenance",
  "replacement",
  "recertification",
  "inspection",
  "customer_support",
  "received_meter"
]);

export const actionSchema = z.object({
  action: actionNameSchema,
  title: z.string(),
  url: z.string().url()
});

export const recordSchema = z.object({
  id: z.string(),
  title: z.string(),
  actions: z.array(actionSchema)
});

const recordCollection = defineCollection({
  type: 'data',
  schema: recordSchema
})

export const collections = {
  "records": recordCollection,
}
