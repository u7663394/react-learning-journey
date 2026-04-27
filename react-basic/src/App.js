import "./MyApp.css";
import Header from "./components/Header";

const App = () => {
  const handelClick = () => {
    alert("App Component has been clicked");
  };
  return (
    <div className="app" onClick={handelClick}>
      App Component
      <Header></Header>
    </div>
  );
};

export default App;
