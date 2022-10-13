import { Document } from "../deps.ts"

export interface User {
  _id?: Document
  id?: number
  name: string
  birthDate: Date
}