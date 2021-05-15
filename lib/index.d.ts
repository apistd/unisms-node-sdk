import Uni, { UniConfig, UniResponse } from 'uni-sdk';
declare type KVMap = {
    [key: string]: string | number;
};
export declare type SendByTemplateParams = {
    to: string | string[];
    signature: string;
    templateId: string;
    templateData?: KVMap;
};
export declare type SendByContentParams = {
    to: string | string[];
    signature: string;
    content: string;
    templateData?: KVMap;
};
export declare type SendParams = SendByTemplateParams | SendByContentParams;
export interface Message {
    id: string;
    to: string;
    regionCode: string;
    countryCode: string;
    messageCount: number;
    messageLength: number;
    status: 'sent' | 'failed';
    upstream: string;
    price: string;
}
export interface SendResponse extends UniResponse {
    data: {
        recipients: number;
        messageCount: number;
        totalAmount: string;
        payAmount: string;
        virtualAmount: string;
        messages: Message[];
    };
}
export default class UniSMS {
    client: Uni;
    constructor(config: UniConfig);
    send(params: SendParams): Promise<SendResponse>;
}
export {};
