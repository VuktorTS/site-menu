import { useDate } from "../../context";

function Main() {
  const { login, logout, isLoggedIn } = useDate();
  console.log("🚀 ~ Main ~ isLoggedIn:", isLoggedIn);
  return (
    <main>
      <h1>Welcome to this website</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <button onClick={login}>Log In</button>
      )}
    </main>
  );
}

export default Main;
