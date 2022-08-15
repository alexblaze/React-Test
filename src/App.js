import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </div>
  );
};

export default App;
