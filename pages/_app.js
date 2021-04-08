import PropTypes from "prop-types";
import Background from "../components/Background";
import Navbar from "../components/Navbar";

import "../styles/index.scss";

function App({ Component, pageProps }) {
	return (
		<>
			<head>
				<title>Programming Club</title>
			</head>
			<Navbar />
			<Component {...pageProps} />
			<Background />
		</>
	);
}

App.propTypes = {
	Component: PropTypes.any,
	pageProps: PropTypes.object,
};

export default App;
