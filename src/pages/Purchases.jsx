import axios from "axios"
import getConfig from '../utils/getConfig'
import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import { setIsLoading } from '../store/slices/isloading.slice'
import { useDispatch } from "react-redux"

const Purchases = () => {

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(setIsLoading(true))

    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig())
      .then(resp => { console.log(resp)
        setProducts(resp.data)})
      .catch(error => console.error(error))
      .finally(() => dispatch(setIsLoading(false)))

  }, [])

  return (
    <div>
      <h1>Purchases</h1>
      {
        products?.map(item => (

          <ListGroup.Item key={item?.id}>
            <p>{item.product?.title}</p>
            <img
              src={item.product?.images[0].url}
              alt=""
              style={{ width: 200 }}
              className="me-3"
            />
          </ListGroup.Item>
        ))
      }
    </div>
  )
}
export default Purchases