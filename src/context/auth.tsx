import * as React from "react"
import {store} from "@/store/configureStore";
import {Slot, useRouter, useSegments} from "expo-router";

const AuthContext = React.createContext<any>(null)

export const useAuth = () => {
    return React.useContext(AuthContext)
}

export const AuthProvider = ({children}: React.PropsWithChildren) => {
    const rootSegment = useSegments()[0];
    const router = useRouter();
    React.useEffect(() => {
        if (!store.getState().auth.token && rootSegment !== "(auth)") {
            router.replace("/(auth)/login")
        } else if (store.getState().auth.token && rootSegment !== "(app)") {
            router.replace("/")
        }
    }, [store.getState().auth.token, rootSegment])

    return (
        <AuthContext.Provider value={{
            authentified: store.getState().auth.token != null
        }}>
            <Slot/>
        </AuthContext.Provider>
    )
}
