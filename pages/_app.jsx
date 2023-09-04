  import UserProvider from "@/context/userContext";
  import { ChakraProvider } from "@chakra-ui/react";
  import { Toaster } from "react-hot-toast";
  import theme from "@/helpers/themes/theme";
  import "swiper/css";
  import "../styles/globals.css";

  function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Component {...pageProps} />
          <Toaster position="top-center" reverseOrder={false} toastOptions={{style:{fontSize:14,},}}/>
        </UserProvider>
      </ChakraProvider>
    );
  }

  export default MyApp;
