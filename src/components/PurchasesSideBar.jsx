import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCartThunk, purchasesCartThunk, updateRateThunk } from '../store/slices/cart.slice'

const PurchasesSideBar = ({ show, handleClose }) => {

  const dispatch = useDispatch()
  const purchases = useSelector(state => state.purchases)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const decrementRate = products => {

    if (products.rate > 1) {

      dispatch(updateRateThunk(products.id, products.rate - 1))
    }

  }

  const incrementRate = products=>{

    dispatch(updateRateThunk(products.id, products.rate + 1))

  }

  return (
    <div>
      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h6>Productos en el carrito</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {
              purchases?.map(item => (
                <li key={item?.id}>
                  <p>{item.products?.title}</p>
                  <img src={item.products.images?.[0].url} alt='' className='img-fluid' />
                  <br />
                  <button
                    disabled={item.rate===1}
                    onClick={() => decrementRate(item)}
                  >
                    -
                  </button>
                  {item.rate}
                  <button
                    onClick={()=>incrementRate(item)}
                  >
                    +
                  </button>

                </li>
              ))
            }
            Hola pizukito
          </ul>
          <Button onClick={()=> dispatch(purchasesCartThunk)}>
            Comprar
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default PurchasesSideBar