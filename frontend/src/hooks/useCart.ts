import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    
    // useContext (React): Lexon vlerën e Context-it nga Provider-i
// më i afërt që ndodhet sipër komponentit në strukturën e React.
    const context = useContext(CartContext);

    // throw new Error() (JavaScript): Ndërpret ekzekutimin e funksionit
// dhe sinjalizon një gabim me mesazhin që përcaktojmë.
    if (!context) {
        throw new Error('Wrong message')
    }
    return context;
}