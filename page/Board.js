import { useNavigate, useParams } from "react-router-dom"
import BoardList from "./BoardList"

const Board= ()=>{

    const params= useParams()

    const navigate= useNavigate()

    const goBack= ()=>{
        navigate(-1)
    }

    const goHome= ()=>{
        navigate('/',{replace:true, })
    }

    const goError= ()=>{
        navigate('/aaaaaa')
    }

    return (
        <div>
            <h3>BOARD #{params.no}</h3>

            <button onClick={goBack}>go back</button>
            <button onClick={goHome}>go home</button>

            <button onClick={goError}>error page</button>
        </div>
    )
}

export default Board