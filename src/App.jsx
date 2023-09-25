import { ThemeProvider } from "@emotion/react";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import MaterialUi from "./components/pages/materialUi/MaterialUi";
import { customTheme } from "./themeConfig";
import PruebaResponsive from "./components/pages/pruebaResponsive/PruebaResponsive";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
        <MaterialUi />
        {/* <ItemListContainer /> */}
        {/* <PruebaResponsive /> */}
        
    </ThemeProvider>
  );
}

export default App;
