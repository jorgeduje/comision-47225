import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items, crearNuevo, deleteProduct, modificar }) => {
  return (
    <>
      <div>
        <button onClick={crearNuevo}>Crear</button>
      </div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return (
            <ProductCard
              key={item.id}
              modificar={modificar}
              item={item}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </section>
    </>
  );
};

export default ItemList;
