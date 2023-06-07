import  Offcanvas  from 'react-bootstrap/Offcanvas'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


const PurchasesSideBar = ({show, handleClose})=>{

    const dispatch = useDispatch()
    const purchases = useSelector(state=> state.purchases)

    return (
       <div>
       </div>
  )
}
export default PurchasesSideBar