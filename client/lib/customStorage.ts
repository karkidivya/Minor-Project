// customStorage.ts
'use client'


const createNoopStorage = () => {
    return {
        getItem(_key: any){
            return ;
        },
        setItem(_key: any, value: any){
            return ;
        },
        removeItem(_key: any){
            return;
        }
    }
}

const storage = typeof window !== 'undefined'
? localStorage
: createNoopStorage();

export default storage;