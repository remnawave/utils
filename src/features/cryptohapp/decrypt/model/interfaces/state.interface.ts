export interface IDecryptKey {
    content: string
    id: string
    name: string
}

export interface IState {
    keys: IDecryptKey[]
    selectedKeyId: null | string
}
