import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import "../../styles/home.scss"
import CkEditor from "../Posts/CkEditor";

export function Home(){
    return(
        <Container fluid className='home-container p-0 m-0'>
            <Header/>
            <Outlet/>
            {/*<CkEditor/>*/}
        </Container>
    )
}