import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import ListGroup from "react-bootstrap/ListGroup"



import axios from "axios"



import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { filterCategoryTunk } from "../store/slices/products.slice"

const ProductDetail = () => {

  const { id } = useParams()

  const [products, setProducts] = useState({})
  const [rate, setRate] = useState(1)

  const dispatch = useDispatch()

  const allProducts = useSelector(state => state.products)

  const productsFilterd = allProducts.filter(products => products.id !== Number(id))

  useEffect(() => {

    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
      .then(resp => {
        console.log(resp.data)
        setProducts(resp.data)
        dispatch(filterCategoryTunk(resp.data.category.id))
      })
  }, [])

  const decrement = () => {

    if (rate > 1) {
      setRate(rate - 1)
    }

  }

  return (

    <div className="pt-5">
      <h1>{products.title}</h1>
      <p>{products.price}</p>

      <Button
        onClick={() => decrement()}
      >
        -
      </Button>

      <span>
        {rate}
      </span>

      <Button
        onClick={() => setRate(rate + 1)}
      >
        +
      </Button>

      <Button
        className="primary ms-3"
      >
        Agregar al carrito
      </Button>

      <Row className="pt-3">

        <Col lg={9}>

          <img
            src={products.images}
            alt=""
            className="img-fluid" />
          <small className="mb-3 d-block"> {products.description} </small>
          {/*
            products.body?.map(p => (
              <p key={p.id}>{p.description}</p>
            ))
            */}
        </Col>
        <Col lg={3}>
          <h3>Productos Relacionados</h3>
          <ListGroup>
            {
              productsFilterd.map(products => (
                <ListGroup.Item
                  key={products.id}>
                  {products.title}

                </ListGroup.Item>
              ))
              }
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}
export default ProductDetail