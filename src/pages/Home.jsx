import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsThunk, filterCategoryTunk, filterHeadlineThunk } from '../store/slices/products.slice'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Home = () => {

  const dispatch = useDispatch()

  const productsList = useSelector(state => state.products)

  const [categories, setCategories] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    dispatch(getProductsThunk())

    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories/`)
      .then(resp => setCategories(resp.data))
      .catch(error => console.error(error))

  }, [])

  return (
    <div>

      <Row className='pt-5'>
        <Col md={4} lg={3} xl xxl>
          <ListGroup className='w-100'>
            {
              categories.map(category => (
                <ListGroup.Item
                  key={category.id}
                  onClick={() => dispatch(filterCategoryTunk())}
                >
                  {category.name}
                </ListGroup.Item>
              ))
            }

          </ListGroup>
        </Col>
        <Col md={8} lg={9}>
          <h1>PRODUCTOS</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Busqueda por nombre"
              aria-label="Busqueda por nombre"
              aria-describedby="basic-addon2"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={() => dispatch(filterHeadlineThunk(searchValue))}
            >
              Buscar
            </Button>
          </InputGroup>

          <Row xs={1} md={2} lg={3}>

            {
              productsList.map(products => (
                <Col className='mb-3' key={products.id}>
                  <Card className='w-100'>
                    <Card.Img
                      variant="top"
                      src={products.images[0].url}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title>{products.title}</Card.Title>
                      <Card.Text>{products.price}</Card.Text>
                      <Card.Text>{products.brand}</Card.Text>
                      <Button
                        variant="primary"
                        as={Link}
                        to={`/products/${products.id}`}
                      >
                        Detalle
                      </Button>
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