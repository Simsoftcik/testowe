import { createContext } from "react";

type isLoggedInType = {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const isLoggedInContext = createContext<isLoggedInType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});