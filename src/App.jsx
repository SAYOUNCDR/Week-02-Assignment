import CatWidget from "./Components/CatWidget";
import GithubUserSearch from "./Components/GithubUserSearch";
import ProductDashBoard from "./Components/ProductDashBoard";
import Page from "./Week03/PS01/Page";
import CharacterWarning from "./Week03/PS02/CharacterWarning";
import TempratureChange from "./Week03/PS03/TempratureChange";


function App() {

  return (
    <div className="min-h-screen max-w-3xl mx-auto flex items-center flex-col">
      <h1 className="text-center text-md font-bold">Week 3 Problem Set</h1>
      <Page />

      <CharacterWarning />

      <TempratureChange />


      <h1 className="text-center text-md font-bold">Week 2 Problem Set</h1>
      <CatWidget />
      <GithubUserSearch />
      <ProductDashBoard />

    </div>
  );
}

export default App
