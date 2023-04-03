import { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";
import PageNation from "./PageNation";

const Wrap = styled.div`
  width: min(100- 110px, 1200);
`;
const HeadWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;
  padding: 0.5em;
`;

const FooterWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  min-height: 30px;
  padding: 0.5em;
`;
const Head = styled.div`
  font-size: 2em;
  font-weight: 700;
  
`
const ViewPotos = styled.select`
  margin-left: auto;
  width: 80px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #222;
  text-align: right;
  font-size: 1em;
`;

const Constes = styled.div`
  width: min(100% - 110px, 800px);
  max-height: calc(100% - 200px);
  position: fixed;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  background: #fff;
  color: #222;
`;

const PotoWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: calc(100 - 80px);
  gap: 0.5em;
  padding: 1em;
`;

const Loding = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size:5em;
  color: #fff;
`;

const Content = () => {
  const [photo, setPhoto] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  console.log(photo);
  useEffect(() => {
    setTimeout(() => {
      console.log("loding...");
      fetch("https://jsonplaceholder.typicode.com/photos/")
        .then((res) => res.json())
        .then((json) => setPhoto(json));
    }, 8000);
  }, []);
  console.log("a" + offset, "b" + offset + limit);
  return (
    <>
      {!photo && <Loding>로딩중..</Loding>}

      {photo && (
        <Wrap>
          <HeadWrap>
            <Head>리액트 연습 - 페이지네이션 만들어보기</Head>
            <ViewPotos
              value={limit}
              onChange={({ target: { value } }) => setLimit(parseInt(value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </ViewPotos>
          </HeadWrap>
          <Constes>
            <PotoWrap>
              {photo.slice(offset, offset + limit).map((data) => {
                return (
                  <Item
                    id={data.id}
                    thumbnailUrl={data.thumbnailUrl}
                    title={data.title}
                    url={data.url}
                    key={data.title}
                  />
                );
              })}
            </PotoWrap>
          </Constes>
          <FooterWrap>
            <PageNation
              total={100}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </FooterWrap>
        </Wrap>
      )}
    </>
  );
};

export default Content;
