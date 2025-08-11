export type Repo = {
  id: number
  name: string
  full_name: string
  description: string | null
  language: string | null
  owner: {
    login: string
  }
}
