import { Link } from "react-router-dom"

const Home= ()=>{
    return (
        <div>
            <h1>Home</h1>
            <p>This is Home page</p>

            <Link to='/board' replace={true}>BOARD LIST</Link>

            <hr></hr>

            <Link to={'/about?title=sam&msg=nice to meet you#5'} state={{id:'aa', age:20}}>GO ABOUT</Link>
            
            <br></br>
            <br></br>

            <Link to={{
                pathname:'/about',
                state:{
                    id:'bb',
                    age:23
                },
                search:"?title=robin&msg=have a good day"
            }}>
                ABOUT with to object!!
            </Link>
        </div>
    )
}

export default Home