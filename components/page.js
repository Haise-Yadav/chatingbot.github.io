import Navbar from "./navbar";


export default function Page({children}){
    return(
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}
