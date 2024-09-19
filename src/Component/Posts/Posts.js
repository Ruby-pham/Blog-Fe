import "../../styles/posts.scss"
import {Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import {useMyContext} from "../Context/MyContext";

export function Posts() {
    const { nameLogin, nameRegister } = useMyContext();
    console.log('check namelogin at post',nameLogin)
    let [postList, setPostList] = useState([]);
    const getPostList = () => {
        axios.get("http://localhost:3000/posts").then((res) => {
            let data = res.data;
            setPostList(data);
            console.log('check post 1',data)
        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(() => {
        getPostList();
    }, []);


    return (
        <Container className='posts-container'>
            <Row className='posts-main'>
                <Col className='navbar bg-primary' sm={5}>navbar</Col>
                <Col className='content' sm={7}>
                    {postList.map((post,index)=>(
                        <Card className='cart-content m-1'>
                            <Card.Body>
                                <div className="title-content">
                                    <div className="image-title-content">
                                        {nameRegister.image ?
                                            <img className='image-title-content-size' src={nameRegister.image} alt='Profile' />
                                            :
                                            <img className='image-title-content-size'
                                                 src={'https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-1/292704709_377071744523342_2432279978892137047_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=JVof_D6OI0EQ7kNvgEqaZ36&_nc_ht=scontent.fosu2-1.fna&_nc_gid=A5hTyz64sWoC5qdIxglJVNU&oh=00_AYA8mnctCkucB7Jq4etFVi1eIUAEcAyt48SegGWe1UK7tw&oe=66E8DC0B'}
                                                 alt='Default Profile' />
                                        }
                                    </div>
                                    <div className='title-content-info'>
                                        <p className='m-0 p-0'>{post.username}</p>
                                        <p>{post.createAt} status: {post.status}</p>
                                    </div>
                                </div>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text dangerouslySetInnerHTML={{__html: post.content}}/>
                            </Card.Body>
                            {/*<Card.Img variant="top"*/}
                            {/*          src="https://external.fosu2-2.fna.fbcdn.net/emg1/v/t13/3973769824971445305?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FFgwgQ-ItlG4%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=06_Q399oKdmD0JE7y2JG-gNkTE4enju2Sxt-qRCotM60hyADL0&oe=66ED495D&_nc_sid=139b9a"/>*/}
                            <div className='footer-content'>
                                <span>Like</span>
                                <span>Dislike</span>
                            </div>
                        </Card>
                    ))}

                </Col>
            </Row>
        </Container>
    )
}