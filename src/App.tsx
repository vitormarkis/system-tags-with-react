import Header from "./components/Header";
import Main from "./components/Main";
import AssetsProvider from "./contexts/assets";
import FilteredAssetsProvider from "./contexts/filteredAssets";
import SearchValueProvider from "./contexts/searchValue";

import { GradientLunar, GradientSpacial, Layout } from "./styles";

function App() {
  return (
    <Layout>
      <FilteredAssetsProvider>
        <AssetsProvider>
          <SearchValueProvider>
            <GradientLunar />
            <GradientSpacial />
            <Header />
            <Main />
            {/* <Footer /> */}
          </SearchValueProvider>
        </AssetsProvider>
      </FilteredAssetsProvider>
    </Layout>
  );
}

export default App;
