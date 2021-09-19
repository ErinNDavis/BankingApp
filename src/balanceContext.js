import { createContext, useState } from "react";

export const balanceContext = createContext();

const balanceContextProvider = (props) => {
    const [show, setShow] =useState(true);
    const [amount, setAmount] = useState('');
    const [formChanged, setFormChanged] = useState(false);
    const balanceType = props.balanceType;

    return (
        <balanceContextProvider value={{show, setShow, amount, setAmount, formChanged, setFormChanged, balanceType}}>
            {props.children}
        </balanceContextProvider>
    )
}

export default balanceContextProvider;