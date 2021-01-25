import '../styles/index.css';
import Nav from '../components/Navbar';
import PropTypes from 'prop-types';

function App({ Component, pageProps }) {
    console.log(pageProps);
    return (
        <div>
            <Nav />
            <Component {...pageProps} />
        </div>
    );
}

App.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.object
};

export default App;
