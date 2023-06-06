import { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { filterCategoryTunk } from "../store/slices/products.slice"
import axios from "axios"
import ListGroup from "react-bootstrap/ListGroup"

const ProductDetail = () => {

  const { id } = useParams()

  const [products, setProducts] = useState({})
  const [rate, setRate] = useState(1)

  const dispatch = useDispatch()

  const allProducts = useSelector(state => state.products)
  const productsfilters = allProducts.filter(products => products.id !== Number(id))

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
      <h1>{products.name}</h1>
      <p>{products.date}</p>

      <button onClick={() => decrement()}>-</button>
      <span>{rate}</span>
      <button onClick={() => setRate(rate + 1)}>+</button>

      <button className="primary ms-3">Agregar al carrito</button>
      
      <Row className="pt-3">
        <Col lg={9}>
          {/*Descripcion del producto */}
          <img src={products.image} alt="" className="img-fluid" />
          <small className="mb-3 d-block"> {products.description} </small>
          {
            products.body?.map(p => (
              <p key={p.id}>{p.description}</p>
            ))
          }
        </Col>
        <Col lg={3}>
          <h3>Productos Relacionados</h3>
          <ListGroup>
            {
              productsfilters.map(products => (
                <ListGroup.Item key={products.id}>{products.headline}</ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col>
      </Row>

    </div>
  )
}
export default ProductDetail