//components
import PrimaryLayout from "@/layouts/PrimaryLayout";

//styles
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}
