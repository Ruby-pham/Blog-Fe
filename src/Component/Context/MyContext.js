import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [nameRegister, setNameRegister] = useState({
        username: '',
        password: '',
        dob: '',
        image: '',
    });
    const [nameLogin, setNameLogin] = useState({
        username: '',
        password: '',
        image: '',
    });
    const [imageContent, setImageContent] = useState({
        image: '',
    });

    return (
        <MyContext.Provider value={{ nameLogin, setNameLogin, nameRegister, setNameRegister,imageContent,setImageContent }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);