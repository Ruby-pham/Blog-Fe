import { Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMyContext } from "../Context/MyContext";
import headerImage from '../../images/header-background.jpg';
import '../../styles/header.scss';

export function Header() {
    const { nameLogin, nameRegister } = useMyContext();

    return (
        <Row className='header-container p-0 m-0'>
            <div className='header-image p-0 m-0'>
                <img className='image' src={headerImage} alt='header' />
            </div>
            <div className="header-info">
                <div className="header-info-image">
                    {nameRegister.image ?
                        <img className='image-info' src={nameRegister.image} alt='Profile' />
                        :
                        <img className='image-info'
                             src={'https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-1/292704709_377071744523342_2432279978892137047_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=JVof_D6OI0EQ7kNvgEqaZ36&_nc_ht=scontent.fosu2-1.fna&_nc_gid=A5hTyz64sWoC5qdIxglJVNU&oh=00_AYA8mnctCkucB7Jq4etFVi1eIUAEcAyt48SegGWe1UK7tw&oe=66E8DC0B'}
                             alt='Default Profile' />
                    }
                </div>
                <h3 className='name-info'>Welcome {nameLogin.username}</h3>
            </div>
            <hr className='line' />
            <div className='header-menu'>
                <Nav className='menu' variant="underline" defaultActiveKey="/">
                    <div className='menu-part1'>
                        <Nav.Item>
                            <Link className='link' to={'/'}>
                                <Nav.Link as="div">Home</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className='link' to={'/create-new-posts'}>
                                <Nav.Link as="div">Create-new-posts</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className='link' to={'/post-list'}>
                                <Nav.Link as="div">Posts-List</Nav.Link>
                            </Link>
                        </Nav.Item>
                    </div>
                    <div className='menu-part2'>
                        <Nav.Item>
                            <Link className='link' to={'/login'}>
                                <Nav.Link as="div">Login</Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className='link' to={'/'}>
                                <Nav.Link as="div">Logout</Nav.Link>
                            </Link>
                        </Nav.Item>

                    </div>
                </Nav>
            </div>
        </Row>
    );
}