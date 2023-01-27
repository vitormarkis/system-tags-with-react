import Header from './components/Header';
import Main from './components/Main';
import AssetsProvider from './contexts/assets';
import FilteredAssetsProvider from './contexts/filteredAssets';
import SearchValueProvider from './contexts/inputValue';

import { Layout } from './styles';

function App() {
  return (
    <Layout>
      <AssetsProvider>
        <FilteredAssetsProvider>
          <SearchValueProvider>
            <Header />
            <Main />
            {/* <Footer /> */}
          </SearchValueProvider>
        </FilteredAssetsProvider>
      </AssetsProvider>
    </Layout>
  );
}

export default App;
