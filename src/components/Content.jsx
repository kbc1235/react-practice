import { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Item from './Item';


const Constes = styled.div`
  width:min(100% - 110px, 800px);
  background: #fff;
  color:#222;
`

const ViewPotos = styled.select`
  
`
const PotoWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: calc(100 - 80px);
`;


const Content = () =>{ 

  const [photo, setPhoto] = useState([]);
  const [limit, setLimit] = useState(10);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
      .then(res=>res.json())
      .then(json=> setPhoto(json))
  }, []);
  

  

  return(
    <Constes>
        <ViewPotos value={limit} onChange={({ target: { value } })=>setLimit(parseInt(value))}>
          <option value='10' selected>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
        </ViewPotos>
        <PotoWrap>
          {
            photo.slice(0,limit).map((data)=>{
             return <Item id={data.id} thumbnailUrl={data.thumbnailUrl} title={data.title} url={data.url} key={data.title}/>
            })
          }
        </PotoWrap>
    </Constes>
  )
}

export default Content;