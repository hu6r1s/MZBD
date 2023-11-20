import MyPageContent from "@components/MyPageContent";
import SubMenu from "@components/SubMenu";
import { useState } from "react";
import { styled } from "styled-components";

const MyPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("회원정보");

  const handleSelectMenu = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div style={{
      width: "1060px",
      margin: "0 auto",
    }}>
      <MyPageTitle>
        마이페이지
      </MyPageTitle>
      <MyPageContainer>
        <SubMenu onSelectedMenu={handleSelectMenu} />
        <ContentWrapper>
          <ContentTitle>
            {selectedMenu}
          </ContentTitle>
          <MyPageContent selectedMenu={selectedMenu} />
        </ContentWrapper>
      </MyPageContainer>
    </div>
  );
};

const MyPageTitle = styled.h2`
  padding-top: 60px;
  font-family: Noto Sans KR;
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.2em;
  text-align: center;
`;

const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 94px;
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const ContentTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  color: #4A4A4A;
  margin-bottom: 26.29px;
`;

export default MyPage;