import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsThunk } from '../store/slices/products.slice'
import { useEffect } from 'react'

const Home = () => {

  const dispatch = useDispatch()

  const productsList = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])

  return (
    <div>
      <Row>
        <Col md={4} lg={3} xl xxl>
          Filtrados
        </Col>
        <Col md={8} lg={9}>
          <h1>PRODUCTOS</h1>
          <Row xs={1} md={2} lg={3}>

            {
              productsList.map(products => (
                <Col className='mb-3' key={products.id}>
                  <Card className='w-100'>
                    <Card.Img
                      variant="top"
                      src={products.images}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{products.title}</Card.Title>
                      <Card.Text>{products.description}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

              ))

            }

          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Home