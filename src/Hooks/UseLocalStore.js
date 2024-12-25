import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue , setStoredValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }catch{
            return initialValue;
        }
    });
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    },[storedValue]);
    return [storedValue, setStoredValue];
};
export default useLocalStorage;
