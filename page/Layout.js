import { Outlet } from "react-router-dom"

const Layout= ()=>{
    return (
        <div>
            <header style={{backgroundColor:'silver', padding:16, fontSize:24}}>
                MY REACT BOARD
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default Layout