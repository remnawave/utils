import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { create } from 'zustand'

import type { IActions, IState } from './interfaces'

const generateId = () => {
    const salt = Math.random().toString(36).substring(2, 8)
    return `${Date.now()}-${salt}`
}

export const useDecryptKeysStore = create<IActions & IState>()(
    persist(
        devtools(
            (set) => ({
                keys: [],
                selectedKeyId: null,
                actions: {
                    addKey: (key) => {
                        const newKey = { ...key, id: generateId() }
                        set((state) => ({
                            keys: [...state.keys, newKey],
                            selectedKeyId: newKey.id
                        }))
                    },
                    deleteKey: (id) => {
                        set((state) => ({
                            keys: state.keys.filter((k) => k.id !== id),
                            selectedKeyId: state.selectedKeyId === id ? null : state.selectedKeyId
                        }))
                    },
                    selectKey: (id) => {
                        set({ selectedKeyId: id })
                    },
                    updateKey: (id, updates) => {
                        set((state) => ({
                            keys: state.keys.map((k) => (k.id === id ? { ...k, ...updates } : k))
                        }))
                    }
                }
            }),
            { anonymousActionType: 'decryptKeysStore', name: 'decryptKeysStore' }
        ),
        {
            name: 'decryptKeysStore',
            partialize: (state) => ({
                keys: state.keys,
                selectedKeyId: state.selectedKeyId
            }),
            storage: createJSONStorage(() => localStorage),
            version: 1
        }
    )
)

export const useDecryptKeys = () => useDecryptKeysStore((state) => state.keys)
export const useSelectedKeyId = () => useDecryptKeysStore((state) => state.selectedKeyId)
export const useSelectedKey = () =>
    useDecryptKeysStore((state) => state.keys.find((k) => k.id === state.selectedKeyId) ?? null)
export const useDecryptKeysActions = () => useDecryptKeysStore((state) => state.actions)
