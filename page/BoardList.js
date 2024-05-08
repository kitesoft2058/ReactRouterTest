import { Link, Outlet } from "react-router-dom"

const BoardList= ()=>{
    return (
        <div>

            <Outlet></Outlet>

            <h1>BOARD LIST</h1>

            <ul>
                <li>
                    <Link to='/board/1'>BOARD 1</Link>
                </li>
                <li>
                    <Link to='/board/2'>BOARD 2</Link>
                </li>
                <li>
                    <Link to='/board/3'>BOARD 3</Link>
                </li>
            </ul>

        </div>
    )
}

export default BoardList