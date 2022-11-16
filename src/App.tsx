import React, { FC, createContext } from "react"; // FC is Functional Component.
import "./App.css";
import { Person } from "./components/Person";
import { HairColor } from "./Enums";

interface AppContextInterface {
  name: string;
  age: 15;
  country: string;
}

const AppContext = createContext<any>(null); // Instead of <any> we can use <AppContextInterface | null>

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Abdulaziz",
    age: 15,
    country: "Uzbekistan",
  };
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Abdulaziz"
          age={15}
          email="abdulaziztoxtayev8@gmail.com"
          hairColor={HairColor.Pink}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
