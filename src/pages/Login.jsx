
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit } = useForm()

  const submit = data => {

    console.log(data)

  }

  return (
    <div className="py-5 my-5 d-flex justify-content-center align-center">
      <Form
        onSubmit={handleSubmit(submit)}
        className='p-5'
        style={{ border: "1px solid black" }}
      >
        <h1 className='text-center'>INICIA SESIÓN</h1>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register('email')}
          />
        </Form.Group>
        <Form.Group
          s={Row}
          className="mb-3"
          ontrolId="formHorizontalPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <button >Sign in</button>
        </Form.Group>
      </Form>
    </div>
  )
}
export default Login