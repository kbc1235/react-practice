import styled from "styled-components";

const PageNationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  width: min(100% - 110px, 800px);
  margin-inline: auto;
`;
const Button = styled.button.attrs({
  type: "button",
})`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  background: #fff;
  color: #222;
  &:hover {
    background: #222;
    color: #fff;
  }
  &[aria-current="page"] {
    background: #222;
    color: #fff;
  }
`;



/*
차후 참고 하여 다시 만들어보기 

let count = Math.floor(totalData / 10);
let allPagination = [];
const range = (arrSize, start) => {
  const fillingArr = [...Array(arrSize).key()].map(key => {
    if(key + start > count) return;
    return key + start;
  });
  return fillingArr;
};

for (let idx = 1, otherCount = 0; idx < count; idx +=10, otherCount++){
  allPagination[otherCount] = range(10, idx);
}


*/

const PageNation = ({ total, limit, page, setPage }) => {
  const pageNums = Math.ceil(total / limit);

  return (
    <PageNationWrap>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(pageNums)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === pageNums}>
        &gt;
      </Button>
    </PageNationWrap>
  );
};

export default PageNation;
