import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import { DataProvider } from "./context";

function App() {
  return (
    <DataProvider>
      <header>
        <Menu />
      </header>
      <Main />
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </DataProvider>
  );
}

export default App;
