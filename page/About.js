import { useLocation, useSearchParams } from "react-router-dom"

const About= ()=>{

    const query= useLocation()

    const [searchParams, setSerchParams]= useSearchParams()

    const title= searchParams.get('title')
    const message= searchParams.get('msg')

    const clickChange=()=>{
        setSerchParams({ title, msg: 'good react router'})
    }

    return (
        <div>
            <h1>ABOUT PAGE</h1>

            <p> {query.pathname} </p>
            <p> {query.search} </p>
            <p> {query.hash} </p>
            
            <p> {query.state.id}</p>
            <p> {query.state.age}</p>

            <p> {query.key} </p>

            <h4> title : {searchParams.get('title')}</h4>
            <h4> message : {searchParams.get('msg')}</h4>

            <button onClick={clickChange}>change message</button>
        </div>
    )
}

export default About