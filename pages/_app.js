import '../styles/globals.css';
import '../styles/custom.scss';
import Layout from "../components/Layout"
const App = ({ Component, pageProps, router }) => {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
export default App