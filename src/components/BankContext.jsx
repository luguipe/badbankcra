import {
    createContext,
    useContext,
    useState
} from 'react';

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser: null,
        users:[
            {
                username: 'luizperez', name:'Luiz', email: 'luiz@test.com', password: 'qwertqwert', balance: 100,
            },
            {
                username: 'luciamaria', name:'Lucia', password: 'asdfasdf', balance: 100,
            }
        ]
    });

    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username
        });
    }

    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user]
        });
    }

    return(
        <BankContext.Provider value={{ 
            bank, 
            setLoggedInUser, 
            addUser,
         }}>
            {children}
        </BankContext.Provider>
    );
}

export default BankContext;