import styled from "styled-components";
import moon from "../../public/moon.png";

const Header = () => {
  return (
    <HeaderContainer>
      <p className="title">Where in the world?</p>
      <div className="selectMode">
        <img className="moon" src={moon} alt="moon icon" />
        <p className="dark">Dark mode</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .title {
    font-size: 15px;
    font-weight: bold;
  }

  .selectMode {
    display: flex;
    width: 84px;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .moon {
      width: 12px;
      height: 12px;
    }

    .dark {
      font-size: 13px;
    }
  }
`;
