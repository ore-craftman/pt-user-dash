import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/rubik";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

const colors = {
  primary: {
    500: "#782DF3",
  },
  gold: "#FFC107",
};

const fonts = {
  heading: `'Rubik Variable', sans-serif`,
  body: `'Rubik Variable', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
