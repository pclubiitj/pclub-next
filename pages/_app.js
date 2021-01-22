import "../styles/index.css";
import Nav from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
