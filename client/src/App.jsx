import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import ErrorModal from "./Components/Modal/Error";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <Box>
      <Header />
      <Routing />
      <ErrorModal />
    </Box>
  );
}

export default App;
