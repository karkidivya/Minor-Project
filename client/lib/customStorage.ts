// customStorage.ts
'use client'


const createNoopStorage = () => {
    return {
        getItem(_key: any){
            return "" as any;
        },
        setItem(_key: any, value: any){
            return "" as any;
        },
        removeItem(_key: any){
            return "" as any;
        }
    }
}

const storage = typeof window !== 'undefined'
? localStorage
: createNoopStorage();

export default storage;