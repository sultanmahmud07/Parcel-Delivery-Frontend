import { IMeta } from "."

export interface IParcel {
  _id: string
  sender: string
  receiver: string
  type: string
  weight: number
  address: string
  deliveryDate: string
  statusLogs: []
  trackingId: number
  fee: number
  note: string
  isBlocked: boolean
  status: string
  createdAt: string
  updatedAt: string
}

export interface IParcelResponse {
  meta: IMeta
  data: IParcel[];
}