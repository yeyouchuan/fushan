import '@/styles/globals.css'
import MainLayout from "layouts/main";

export default function App({ Component, pageProps }) {
  return (
      <MainLayout>
          <Component {...pageProps} />
      </MainLayout>
  )

}
