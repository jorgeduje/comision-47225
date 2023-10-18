import CounterContainer from "../../common/counter/CounterContainer"

export const ItemDetail = ( {productSelected, onAdd, initial} ) => {
  return (
    <div>
        {/* aca todo el detalle */}
            <h2>{productSelected.title}</h2>
            <img src={productSelected.img} alt="" />
            {
              initial && <h5>Ya tienes { initial } en el carrito</h5>
            }
            
        {/* Aca el contador */}
        <CounterContainer stock={productSelected.stock} onAdd={onAdd} initial={initial} />
    </div>
  )
}
