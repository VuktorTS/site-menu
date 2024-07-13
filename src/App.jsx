import Menu from "./components/Menu/Menu";

const menuItems = [
  { id: 1, title: "Home", href: "/", icon: "home" },
  { id: 2, title: "Services", href: "/services", icon: "services" },
  { id: 3, title: "Pricing", href: "/pricing", icon: "pricing" },
  { id: 4, title: "Blog", href: "/blog", icon: "blog" },
];

function App() {
  return (
    <>
      <header>
        <Menu menuItems={menuItems} />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="//reactquickly.dev">React Quickly 2E</a>
      </footer>
    </>
  );
}

export default App;
