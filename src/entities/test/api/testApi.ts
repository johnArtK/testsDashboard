import { baseUrl } from "../../../shared/configApi/baseUrl"
import { Test } from "../model/types"

export async function fetchTests(): Promise<Test[]> {
  const response = await fetch(`${baseUrl}/tests`)
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }
  return response.json()
}

export async function fetchTestById(id: number): Promise<Test> {
  const response = await fetch(`${baseUrl}/tests/${id}`)
  return response.json()
}
