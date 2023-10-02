import { Navbar } from "./components/layout/navbar/Navbar";
import FetchingData from "./components/pages/fetchingData/FetchingData";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <FetchingData /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
