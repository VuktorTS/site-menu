import { createContext, useContext, useState } from "react";

const menuLinks = [
  { id: 1, title: "Home", href: "/", icon: "home" },
  { id: 2, title: "Services", href: "/services", icon: "services" },
  { id: 3, title: "Pricing", href: "/pricing", icon: "pricing" },
  { id: 4, title: "Blog", href: "/blog", icon: "blog" },
];

const PROFILE = { id: 5, title: "Profile", href: "/profile", icon: "profile" };

const DataContext = createContext({
  links: [],
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const DataProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  const links = menuLinks.concat(isLoggedIn ? PROFILE : []);

  const value = { login, logout, links, isLoggedIn };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDate = () => useContext(DataContext);
