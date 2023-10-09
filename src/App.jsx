import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={customTheme}> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
