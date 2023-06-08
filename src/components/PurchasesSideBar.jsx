import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCartThunk, purchasesCartThunk, updateRateThunk } from '../store/slices/cart.slice'

const PurchasesSideBar = ({ show, handleClose }) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  const decrementRate = products => {

    if (products.quantity > 1) {

      dispatch(updateRateThunk(products.id, products.quantity - 1))
    }

  }

  const incrementRate = products => {

    dispatch(updateRateThunk(products.id, products.quantity + 1))

  }

  return (
    <div>
      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h6>Products in the cart</h6>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {
              cart?.map(item => (
                <li key={item?.id}>
                  <p>{item.product?.title}</p>
                  <img
                    src={item.product.images?.[0].url}
                    alt=''
                    className='img-fluid'
                  />
                  <br />
                  <Button
                    disabled={item.rate === 1}
                    onClick={() => decrementRate(item)}
                  >
                    -
                  </Button>
                  {item.quantity}
                  <Button
                    onClick={() => incrementRate(item)}
                  >
                    +
                  </Button>

                </li>
              ))
            }
          </ul>
          <Button onClick={() => dispatch(purchasesCartThunk())}>
            Buy
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default PurchasesSideBar