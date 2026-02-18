import CatWidget from "./Components/CatWidget";
import GithubUserSearch from "./Components/GithubUserSearch";
import ProductDashBoard from "./Components/ProductDashBoard";
import Task from "./TaskManager-Axios/Task";
import Page from "./Week03/PS01/Page";
import CharacterWarning from "./Week03/PS02/CharacterWarning";
import TempratureChange from "./Week03/PS03/TempratureChange";
import MessageHistory from "./Week03/PS04/MessageHistory";


function App() {

  return (
    <div className="min-h-screen max-w-3xl mx-auto flex items-center flex-col">
      <h1 className="text-center text-md font-bold mt-20">Axios Task API</h1>
      <Task />
      <h1 className="text-center text-md font-bold">Week 3 Problem Set</h1>

      <Page />

      <CharacterWarning />

      <TempratureChange />

      <MessageHistory />

      <h1 className="text-center text-md font-bold">Week 2 Problem Set</h1>
      <CatWidget />
      <GithubUserSearch />
      <ProductDashBoard />
    </div>
  );
}

export default App
