import {Routes, Route, Navigate} from "react-router-dom"
import Main from "../components/Main"

export default function Content(){
    return(
        <div>
            <Routes >
                <Route path="/" element={<Navigate replace to="home" />} />
                <Route path="/" element={<Main/>} />
            </Routes>
        </div>
    )
}