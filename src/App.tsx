import Header from './components/Header';
import Main from './components/Main';
import AssetsProvider from './contexts/assets';

import { Layout } from './styles';

function App() {
  return (
    <Layout>
      <AssetsProvider>
        <Header />
        <Main />
        {/* <Footer /> */}
      </AssetsProvider>
    </Layout>
  );
}

export default App;
