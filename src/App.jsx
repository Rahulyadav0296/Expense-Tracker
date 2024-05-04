import "./App.css";
import AddNewTransaction from "./component/AddNewTransaction";
import Balance from "./component/Balance";
import Header from "./component/Header";
import History from "./component/History";
import IncomeExpense from "./component/IncomeExpense";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
