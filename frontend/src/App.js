import { Typography, styled, Box } from "@mui/material";
import "./App.css";
import SideNavbar from "./components/SideNavbar";
import Content from "./components/Content";

const BoxStyle = styled(Box)({
  marginLeft: "250px",
  padding: "48px 50px",
  width: '100%'
});
const Header = styled(Typography)({
  fontSize: "36px",
  fontWeight: 600,
});
function App() {
  
  return (
    <div className="App">
      <SideNavbar />
      <BoxStyle>
        <Header>
          Dashboard <span>&#8250;</span> Bitcoin
        </Header>
        <Content />
      </BoxStyle>
    </div>
  );
}

export default App;
