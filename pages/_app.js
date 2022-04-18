import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>2021 Ankita</footer>
    </div>
  );
}

export default MyApp;

