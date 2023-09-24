import type { Action, ActionName } from "../types";
import { getCollection } from "astro:content";

const collection = await getCollection("records");
const actions = collection.flatMap((r) => r.data.actions);
const actionByName = new Map<ActionName, Action[]>();

for (let action of actions) {
  const name = action.action;
  if (actionByName.has(name)) {
    actionByName.get(name)?.push(action);
  } else {
    actionByName.set(name, [action]);
  }
}

export const actionNames = new Set<ActionName>(actions.flatMap(a => a.action));
export const groupedActions = [...actionByName];