import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

import "../styles/index.scss";

function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

App.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object,
};

export default App;
