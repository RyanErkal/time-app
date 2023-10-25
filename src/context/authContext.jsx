import { auth } from '../api/firebase';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    currentUser: null
});

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    /* const navigate = useNavigate(); */

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
    });

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}
