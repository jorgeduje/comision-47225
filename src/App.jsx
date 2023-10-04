import CounterContainer from "./components/common/counter/CounterContainer";
import CustomModal from "./components/common/modal/CustomModal";
import { FetchDos } from "./components/fetching/FetchDos";
import { FetchUno } from "./components/fetching/FetchUno";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      {/* <FetchDos /> */}
      {/* <FetchUno /> */}

      <CustomModal> 
        <CounterContainer />
      </CustomModal>

      <CustomModal>
        <ItemListContainer />
      </CustomModal>
   
    </>
  );
}

export default App;
