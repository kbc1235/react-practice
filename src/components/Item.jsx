import styled from "styled-components";

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 100%;
  padding: 1em;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s ease-in-out;
  transform: translateY(100%);
  opacity: 0;
  background: rgba(0,0,0,0.8);
  color:#fff;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PotoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding:1em;
  gap: 0.8em;
  overflow: hidden;
  border: 1px solid #222;
  &:hover{
    &>${ContentBox}{
      transform: translateY(0);
      opacity: 1;
    }
    
  }
`;




const Item = ({thumbnailUrl, title}) => {
  return (
    <PotoBox>
      <ImgBox>
        <img src={thumbnailUrl} alt={title} />
      </ImgBox>
      <ContentBox>{title}</ContentBox>
    </PotoBox>
  );
};

export default Item;
