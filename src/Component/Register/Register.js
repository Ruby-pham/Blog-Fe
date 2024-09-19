import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { useMyContext } from "../Context/MyContext";
import UploadImageAvatar from "../UploadImageAvatar";

export function Register() {
    let navigate = useNavigate();
    let { setNameRegister } = useMyContext();

    return (
        <div className='body-register-login d-flex justify-content-center m-0 p-0'>
            <Card style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Title>Create account</Card.Title>
                    <Card.Text>
                        <Formik
                            initialValues={{
                                username: '',
                                password: '',
                                dob: '',
                                image:'',
                            }}
                            onSubmit={(values, { setSubmitting, setErrors }) => {
                                axios.post('http://localhost:3000/register', values)
                                    .then((res) => {
                                        alert('Register success');
                                        setNameRegister(res.data.user);
                                        navigate('/login');
                                    })
                                    .catch((error) => {
                                        // Xử lý lỗi từ backend
                                        if (error.response && error.response.status === 400) {
                                            setErrors({ username: error.response.data.message });
                                        }
                                    })
                                    .finally(() => {
                                        setSubmitting(false);
                                    });
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <label className='username'>Username : </label>
                                    <Field name={'username'} type="text" />
                                    {errors.username && touched.username ? (
                                        <div className="error">{errors.username}</div>
                                    ) : null}
                                    <br />
                                    <label className='password'>Password : </label>
                                    <Field name={'password'} type="password" />
                                    <br />
                                    <label className='dob'>Dob : </label>
                                    <Field name={'dob'} type="text" />
                                    <br />
                                    <button className='btn-login mt-2' type="submit">Continue</button>
                                </Form>
                            )}
                        </Formik>

                        <div>
                            <hr />
                            Already have an account?
                            <Link to={'/login'}>
                                <button className='btn-register mt-2'>Login</button>
                            </Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}