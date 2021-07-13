// Этот файл - "обёртка" над всем приложением. Находится над всеми страницами

// import "../styles/global.css"

// export default function MyApp({ Component, pagerProps }) {
//   return <div>
//     <Component {...pagerProps} />
//   </div>
// }
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
