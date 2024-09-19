import {Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../../styles/_login.scss"
import Card from 'react-bootstrap/Card';
import {useMyContext} from "../Context/MyContext";
import UploadImageAvatar from "../UploadImageAvatar";

export function Login() {
    let navigate = useNavigate();
    let{setNameLogin}= useMyContext();
    return (
        <>
            <div className='body-register-login d-flex justify-content-center m-0 p-0'>
                <Card style={{width: '35rem'}}>
                    <Card.Body>
                        <Card.Title>Sign in</Card.Title>
                        <Card.Text>
                            <Formik
                                initialValues={{
                                    username: '',
                                    password: '',
                                }}
                                onSubmit={values => {
                                    axios.post('http://localhost:3000/login', values).then((res) => {
                                        console.log(values)
                                        alert('login success');
                                        navigate('/');
                                        setNameLogin(res.data.data);
                                        console.log(setNameLogin)
                                        console.log('check login',res)
                                    }).catch(e => {
                                        alert('Invalid username or password');
                                    })
                                }}>
                                <Form>
                                    <label className='username'>Username : </label>
                                    <Field name={'username'} type="text"/><br/>
                                    <label className='password'>Password : </label>
                                    <Field name={'password'} type="password"/><br/>
                                    <button className='btn-login mt-2' type='submit'>Continue</button>
                                </Form>
                            </Formik>
                            <UploadImageAvatar/>

                            <div>
                                <hr/>
                                new to Account?
                                <Link to={'/register'}>
                                    <button className='btn-register mt-2'>Register</button>
                                </Link>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}