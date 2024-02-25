import StoreProvider from "../StoreProvider";

export default function SignupLayout({children, }: {children: React.ReactNode}){
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}