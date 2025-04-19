import { BASE_URL } from "../../../shared/configApi/baseUrl"
import { Test } from "../model/types"

export async function fetchTests(): Promise<Test[]> {
  const response = await fetch(`${BASE_URL}/tests.json`)
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }
  return response.json()
}

//API нет, поэтому по Id не работает(((
export async function fetchTestById(id: number): Promise<Test> {
  const response = await fetch(`${BASE_URL}/tests/${id}`)
  return response.json()
}
