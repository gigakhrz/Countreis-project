import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #f2f2f2;
`;
