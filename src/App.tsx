import Header from './components/Header';
import Main from './components/Main';
import AssetsProvider from './contexts/assets';
import FilteredAssetsProvider from './contexts/filteredAssets';
import SearchValueProvider from './contexts/searchValue';

import { Layout } from './styles';

function App() {
  return (
    <Layout>
      <FilteredAssetsProvider>
        <AssetsProvider>
          <SearchValueProvider>
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
