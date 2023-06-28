import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
