import {RouteProps} from "react-router-dom";
import {createContext, useContext, useState} from "react";


interface AuthContextTypes {
	user: string | null;
	signin: Function;
	signout: Function;
}

const AuthContext = createContext<AuthContextTypes | null>(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}: RouteProps) => {
	const [user, setUser] = useState<null | string>(localStorage.getItem('user'));

	const signin = (newUser: string, callback: Function) => {
		setUser(newUser)
		localStorage.setItem("user", JSON.stringify(newUser))
		callback()
	}

	const signout = (callback: Function) => {
		setUser(null)
		localStorage.removeItem("user")
		callback()
	}
	const value = {
		user,
		signin,
		signout,
	}
	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)
}

