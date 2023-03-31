import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="container mx-auto w-11/12 md:w-3/4">
      <Header></Header>
      <Main></Main>
      <Blog></Blog>
    </div>
  );
}

export default App;
