import { BASE_URL } from "../../../shared/configApi/baseUrl"
import { Test } from "../model/types"

export async function fetchTests(): Promise<Test[]> {
  const response = await fetch(`${BASE_URL}/tests`)
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }
  return response.json()
}

export async function fetchTestById(id: number): Promise<Test> {
  const response = await fetch(`${BASE_URL}/tests/${id}`)
  return response.json()
}
