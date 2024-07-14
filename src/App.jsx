import Menu from "./components/Menu/Menu";
import { menuLinks } from "./constants/menuLink";
import MenuLinksContext from "./context";

function App() {
  return (
    <MenuLinksContext.Provider value={menuLinks}>
      <header>
        <Menu />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </MenuLinksContext.Provider>
  );
}

export default App;
