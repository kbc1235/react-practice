
import styled from "styled-components";


const PotoBox = styled.div`
  display: flex;
  width: 100%;
  border:1px solid #222;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
`

const ImgBox = styled.div`
  width:150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
`

const ContentBox = styled.div`
  width:calc(100% - 50px);

`



const Item = ({id, thumbnailUrl, title, url}) => {
  return (
    <PotoBox>
      <ImgBox><img src={thumbnailUrl} alt={title} /></ImgBox>
      <ContentBox>{title}</ContentBox>
    </PotoBox>
  )
};

export default Item;
