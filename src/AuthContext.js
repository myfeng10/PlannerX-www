import React, {createContext,useContext,useState,useEffect} from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [user,setUser] = useState({ username: "" });

    useEffect(() => { 
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userInfo) => {
        fetch('http://127.0.0.1:5000/api/users/getUser')
        .then(response => response.json())
        .then(data => {
            setUser(data); 
            setIsLoggedIn(true); 
            localStorage.setItem('user', JSON.stringify(data)); 
            console.log("Logged in successfully");
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
    };

    const logout = ()=>{
        setIsLoggedIn(false);
        setUser({ username: "" });
        localStorage.removeItem('user');
        console.log("logged Out");
    };

    return (
         <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};
