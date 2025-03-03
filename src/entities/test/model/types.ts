export enum TestType {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT",
}

export enum TestStatus {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

export interface TestResponse {
  id: number
  name: string
  type: TestType
  status: TestStatus
  siteId: number
}

export interface Site {
  id: number
  url: string
}

export interface Test extends TestResponse {
  site: Site | null
}
