import { useState } from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import GameFull from "./components/GameFull";
import About from "./components/About";

function App() {
  const [menu, setMenu] = useState(0);
  function fecharJanela() {
    window.close();
  }
  function Menu1(opcao) {
    switch (opcao) {
      case "wait":
        return setMenu(0);

      case "single_play":
        return setMenu(1);

      case "multi_play":
        return setMenu(2);
      case "about":
        return setMenu(3);
      case "exit":
        return (fecharJanela() );
      default:
        break;
    }
  }
  return (
    <div className="App">
      {menu === 0 && <Menu teste={Menu1} />}
      {menu === 1 ? (
        <GameFull menu={menu} stateMenu={Menu1} />
      ) : (
        menu === 2 && <GameFull menu={menu} stateMenu={Menu1}/>
      )}
      {menu===3 && <About voltar={Menu1}/>}
    </div>
  );
}

export default App;
