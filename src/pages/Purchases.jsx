import axios from "axios"
import getConfig from '../utils/getConfig'
import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import {setIsLoading} from '../store/slices/isloading.slice'
import { useDispatch } from "react-redux"

const Purchases = () => {

  const [purchases, setPurchases] = useState([])
  const dispatch=useDispatch()

  useEffect(() => {

    dispatch(setIsLoading(true))

    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig)
      .then(resp => setPurchases(resp.data))
      .catch(error => console.error(error))
      .finally(()=> dispatch(setIsLoading(false)))

  },[])

  return (
    <div>
      <h1>Purchases</h1>
      {
        purchases?.map(item=>(
          
          <ListGroup.Item key={item.id}>
          <img src={products.images[0].url} alt=""/> 
          </ListGroup.Item>


        ))
      }
    </div>
  )
}
export default Purchases