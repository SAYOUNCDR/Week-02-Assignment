import CatWidget from "./Components/CatWidget";
import GithubUserSearch from "./Components/GithubUserSearch";
import ProductDashBoard from "./Components/ProductDashBoard";


function App() {

  return (
    <div className="min-h-screen max-w-3xl mx-auto flex items-center flex-col">
      <CatWidget />
      <GithubUserSearch />
      <ProductDashBoard />
    </div>
  );
}

export default App
