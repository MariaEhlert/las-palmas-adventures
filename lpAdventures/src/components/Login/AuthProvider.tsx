import { createContext, useContext, useEffect, useState } from "react";

//interface with the logindata needed for login
interface iContext {
    loginData: {
        name: string;
        password: string;
    },
    //sets loginData
    setLoginData: React.Dispatch<string>
}

//variable where we createContext gets the interface and it allows an object with any datatype 
const AuthContext = createContext<iContext>({} as any)

//variable with an React Function Component - property of children
const AuthProvider:React.FC = ({children}) => {
    
    //calls state hook to logindata
    const [ loginData, setLoginData] = useState<any>();
    
    //calls useEffect hook to get and set localstorage
    useEffect(() => {
        const local_token:string | null = localStorage.getItem('token');
        if(local_token){
            setLoginData(JSON.parse(local_token))
            
            
        }
        //Dependency array with children - this renders if any changes
    }, [children])
    
    return(

        //here we say that AuthContext.Provider wraps around children (which in index.tsx is app)
        <AuthContext.Provider value={{loginData, setLoginData}}>
            {children}
        </AuthContext.Provider>
    )
}

//Declare costom hook with AuthContext
const useAuth = () => useContext(AuthContext)


//exporting functions
export { AuthProvider, AuthContext, useAuth }