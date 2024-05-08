import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './page/Home'
import BoardList from './page/BoardList'
import Board from './page/Board'
import Layout from './page/Layout'
import FileNotFound from './page/FileNotFound'
import About from './page/About'

const Main= ()=>{
    return (
        <BrowserRouter>

            <Routes>

            

                <Route element={<Layout></Layout>}>

                    <Route index element={ <Home></Home> }></Route>

                    <Route path='/board' element={ <BoardList/> }>
                        <Route path=':no' element={<Board/>}></Route>
                    </Route>

                    <Route path='/about' element={<About></About>}></Route>

                </Route>

                <Route path='*' element={<FileNotFound/>}></Route>

                
                {/* <Route path='/boardlist' element={ <BoardList></BoardList> }></Route>
                <Route path='/board/:no' element={ <Board></Board> }></Route> */}

                

            </Routes>

        </BrowserRouter>
    )
}

export default Main