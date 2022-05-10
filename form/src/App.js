import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Sthephany",
          email: "sthe@gmail.com",
          bio: "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
