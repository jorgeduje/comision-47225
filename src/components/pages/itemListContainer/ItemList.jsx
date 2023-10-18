import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section style={{display: "flex", justifyContent:"space-evenly", paddingTop: "20px"}}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
      })}
    </section>
  );
};

export default ItemList;
