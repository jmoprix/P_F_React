import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'



//import axios from 'axios'



import { useForm } from 'react-hook-form'
//import { setIsLoading } from '../store/slices/isloading.slice'
//import { useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'


const Login = () => {

  const { register, handleSubmit } = useForm()

  //const dispatch = useDispatch()

  //const navigate = useNavigate()

  const submit = data => {

    console.log(data)

    {/*
    dispatch(setIsLoading(true))

    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
      .resp(resp => {
        //localStorage.setItem("nombrePropiedad", valorAsignadoAlaPropiedad)
        localStorage.setItem("token", resp.data.token)
        navigate("/")
      })
      .catch(error => {
        if (error.response.status === 401) {
          alert("Credenciales incorrectas")
        }
        console.log(error)
      })
      .finally(() => setIsLoading(false))
    */}
  }

  return (
    <div className="py-5 my-5 d-flex justify-content-center align-center">
      <Form
        onSubmit={handleSubmit(submit)}
        className='p-5'
        style={{ border: "1px solid black" }}
      >
        <h1 className='text-center'>INICIA SESIÓN</h1>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalEmail">
          <Form.Label>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register('email')}
            />
          </Col>
        </Form.Group>
        <Form.Group
          s={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register('password')}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type='submit'
            >
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}
export default Login