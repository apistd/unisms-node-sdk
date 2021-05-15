import Uni, { UniConfig, UniResponse } from 'uni-sdk'

type KVMap = { [key: string]: string | number }

export type SendByTemplateParams = {
  to: string | string[]
  signature: string
  templateId: string
  templateData?: KVMap
}

export type SendByContentParams = {
  to: string | string[]
  signature: string
  content: string
  templateData?: KVMap
}

export type SendParams = SendByTemplateParams | SendByContentParams

export interface Message {
  id: string
  to: string
  regionCode: string
  countryCode: string
  messageCount: number
  messageLength: number
  status: 'sent' | 'failed'
  upstream: string
  price: string
}

export interface SendResponse extends UniResponse {
  data: {
    recipients: number
    messageCount: number
    totalAmount: string
    payAmount: string
    virtualAmount: string
    messages: Message[]
  }
}

export default class UniSMS {
  client: Uni

  constructor(config: UniConfig) {
    this.client = new Uni(config)
  }

  send(params: SendParams): Promise<SendResponse> {
    return this.client.request('sms.message.send', params)
  }
}
