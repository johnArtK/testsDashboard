import { BASE_URL } from "../../../shared/configApi/baseUrl"
import { Site } from "../model/types"

export async function fetchSites(): Promise<Site[]> {
  const response = await fetch(`${BASE_URL}/sites.json`)
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`)
  }
  return response.json()
}
