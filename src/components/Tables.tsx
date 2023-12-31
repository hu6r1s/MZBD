import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { styled } from "styled-components";

interface TablesProps {
  button?: boolean;
  search?: boolean;
  small?: boolean;
  menu?: string;
}

const Tables: React.FC<TablesProps> = ({
  button,
  search,
  small,
  menu
}) => {
  const tmp = [
    { no: 1, title: "test1", date: "2023.10.17." },
    { no: 2, title: "test2", date: "2023.10.17." },
    { no: 3, title: "test3", date: "2023.10.17." },
    { no: 4, title: "test4", date: "2023.10.17." },
    { no: 5, title: "test5", date: "2023.10.17." },
    { no: 6, title: "test6", date: "2023.10.17." },
  ];

  const renderMenuComponent = (menu?: string) => {
    switch (menu) {
      case "포인트/쿠폰내역":
        return (
          <div>
            <PointCoopon>
              <PointTitle>
                포인트
                <PointContent>3000P</PointContent>
              </PointTitle>
              <CooponTitle>
                쿠폰
                <PointContent>2장</PointContent>
              </CooponTitle>
            </PointCoopon>
            <StyledTable small={small}>
              <TableHead>
                <TableRow>
                  <TableHeadCell>내역</TableHeadCell>
                  <TableHeadCell>내용</TableHeadCell>
                  <TableHeadCell>날짜</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tmp.map((notice) => (
                  <TableRow key={notice.no}>
                    <TableBodyCell style={{
                      color: "#7D7D7D",
                      width: "100px"
                    }}>{notice.no}
                    </TableBodyCell>
                    <TableBodyCell>{notice.title}</TableBodyCell>
                    <TableBodyCell style={{
                      color: "#7D7D7D",
                      width: "100px"
                    }}>{notice.date}</TableBodyCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
            <PaginationContainer>
              <KeyboardArrowLeftIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
              1
              <KeyboardArrowRightIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
            </PaginationContainer>
          </div>
        );
      case "문의내역 조회":
        return (
          <div>
            <StyledTable small={small}>
              <TableHead>
                <TableRow>
                  <TableHeadCell>NO</TableHeadCell>
                  <TableHeadCell>제목</TableHeadCell>
                  <TableHeadCell>작성일</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tmp.map((notice) => (
                  <TableRow key={notice.no}>
                    <TableBodyCell style={{
                      color: "#7D7D7D",
                      width: "100px"
                    }}>{notice.no}
                    </TableBodyCell>
                    <TableBodyCell>{notice.title}</TableBodyCell>
                    <TableBodyCell style={{
                      color: "#7D7D7D",
                      width: "100px"
                    }}>{notice.date}</TableBodyCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
            <WritingButton>글 쓰기</WritingButton>
            <PaginationContainer>
              <KeyboardArrowLeftIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
              1
              <KeyboardArrowRightIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
            </PaginationContainer>
            <SearchContainer>
              <SearchInput type="text" />
              <SearchButton>검색</SearchButton>
            </SearchContainer>
          </div>
        );
      case "주문내역 조회":
        return (
          <div>
            <StyledTable small={small}>
              <TableHead>
                <TableRow>
                  <TableHeadCell>NO</TableHeadCell>
                  <TableHeadCell>주문명</TableHeadCell>
                  <TableHeadCell>상호명</TableHeadCell>
                  <TableHeadCell>주문날짜</TableHeadCell>
                  <TableHeadCell>상태</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tmp.map((notice) => (
                  <TableRow key={notice.no}>
                    <TableBodyCell style={{
                      color: "#7D7D7D",
                      width: "100px"
                    }}>{notice.no}
                    </TableBodyCell>
                    <TableBodyCell>{notice.title}</TableBodyCell>
                    <TableBodyCell style={{
                      color: "#7D7D7D",
                      width: "100px"
                    }}>{notice.date}</TableBodyCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
            <PaginationContainer>
              <KeyboardArrowLeftIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
              1
              <KeyboardArrowRightIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
            </PaginationContainer>
          </div>
        );
    }
  };
  return (
    <div>
      {renderMenuComponent(menu)}
      {/* {menu === "포인트/쿠폰내역" && (
        <PointCoopon>
          <PointTitle>
            포인트
            <PointContent>3000P</PointContent>
          </PointTitle>
          <CooponTitle>
            쿠폰
            <PointContent>2장</PointContent>
          </CooponTitle>
        </PointCoopon>
      )}
      <StyledTable small={small}>
        <TableHead>
          <TableRow>
            <TableHeadCell>NO</TableHeadCell>
            <TableHeadCell>제목</TableHeadCell>
            <TableHeadCell>작성일</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tmp.map((notice) => (
            <TableRow key={notice.no}>
              <TableBodyCell style={{
                color: "#7D7D7D",
                width: "100px"
              }}>{notice.no}
              </TableBodyCell>
              <TableBodyCell>{notice.title}</TableBodyCell>
              <TableBodyCell style={{
                color: "#7D7D7D",
                width: "100px"
              }}>{notice.date}</TableBodyCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
      {button && (
        <WritingButton>글 쓰기</WritingButton>
      )}
      <PaginationContainer>
        <KeyboardArrowLeftIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
        1
        <KeyboardArrowRightIcon style={{ cursor: "pointer", color: "#4A4A4A" }} />
      </PaginationContainer>
      {search && (
        <SearchContainer>
          <SearchInput type="text" />
          <SearchButton>검색</SearchButton>
        </SearchContainer>
      )} */}
    </div>
  );
};

const StyledTable = styled(Table) <{ small?: boolean }>`
  width: ${({ small }) => small ? "700px" : "1060px"} !important;
  margin-bottom: 30px;
  margin: 0 auto;
  border-top: 1px #FF679D solid;
`;

const TableHeadCell = styled(TableCell)`
  && {
    font-family: 'Noto Sans KR';
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 6px 16px;
  }
`;

const TableBodyCell = styled(TableCell)`
  && {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #4A4A4A;
    padding: 11px 16px;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const WritingButton = styled.button`
  width: 57px;
  height: 20px;
  border: 1px #7D7D7D solid;
  background-color: #7D7D7D;
  cursor: pointer;
  margin-top: 9.61px;
  float: right;
  
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
  line-height: 17.38px;
  letter-spacing: -0.2em;
  text-align: center;
  color: #FFFFFF;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  width: 400px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #7D7D7D;
  color: #FFFFFF;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: center;
`;

const PointCoopon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 393px;
  height: 28px;
  margin-bottom: 22px;
`;

const PointTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  width: 157px;
`;

const CooponTitle = styled(PointTitle)`
  width: 137px;
`;

const PointContent = styled.span`
  font-weight: 400;
  width: 70px;
`;
export default Tables;