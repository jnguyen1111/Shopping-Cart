import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart( {isOpen}: ShoppingCartProps /*StopppingPoint*/ ) {
  const { closeCart } = useShoppingCart()
  return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
  </Offcanvas>
}