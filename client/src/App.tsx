import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { AppRouter } from "./routes/AppRouter";
import { TodoList } from "./page/TodoList";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TodoList />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
