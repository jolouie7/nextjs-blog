import "../styles/global.css"; // Only import global.css in this file

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}