import type { z } from "astro:content";
import type { actionSchema, actionNameSchema, recordSchema } from "./content/config";

export type Action = Readonly<z.infer<typeof actionSchema>>;
export type ActionName = Readonly<z.infer<typeof actionNameSchema>>;
export type Record = Readonly<z.infer<typeof recordSchema>>;
