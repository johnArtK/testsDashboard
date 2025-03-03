import { Test } from "../test/model/types"

export type SortOrder = "asc" | "desc"

export function sortTestsByType(
  tests: Test[],
  sortOrder: SortOrder = "asc",
): Test[] {
  return [...tests].sort((a, b) =>
    sortOrder === "asc"
      ? a.type.localeCompare(b.type, undefined, { sensitivity: "base" })
      : b.type.localeCompare(a.type, undefined, { sensitivity: "base" }),
  )
}
