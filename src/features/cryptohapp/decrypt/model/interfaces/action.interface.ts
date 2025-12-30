import type { IDecryptKey } from './state.interface'

export interface IActions {
    actions: {
        addKey: (key: Omit<IDecryptKey, 'id'>) => void
        deleteKey: (id: string) => void
        selectKey: (id: null | string) => void
        updateKey: (id: string, key: Partial<Omit<IDecryptKey, 'id'>>) => void
    }
}
