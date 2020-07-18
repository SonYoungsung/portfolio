import * as React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  background: #171717;
  height: 100vh;
  z-index: 4
`

const Tri = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  left: 150px;
  border-top:460px solid transparent;
  border-bottom:465px solid transparent;
  border-left: 600px solid  #9E9E9E;
  z-index: 0
`

const TriBlock = styled.div`
position: absolute;
background: #9E9E9E;
width:150px;
height: 100vh;
z-index: 3
`

const BackGround = styled.div`
  position: relative;
  background: linear-gradient(#E7E7E7, #F4F4F4);
  height: 80vh;
  width: 70%;
  top: 100px;
  left: 300px;
  z-index: 1
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 50px;
  opacity: 0.97

`
const Top = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row-reverse;
ul {
  list-style:none;
  display: flex;
  flex-direction: row;
  li {
    margin-left: 25px;
  }
}
`

const Middle = styled.div`
padding-top: 120px;
width: 100%;
height: 500px;
display: flex;
flex-direction: row
align-items: center;
justify-content: center;
div {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  li {
    list-style:none;
    padding: 10px 0px;
  }
}
`

const Bottom = styled.div`
display: flex;
flex-direction: row
`

const NameCard = styled.div`
  display: flex
`

const Main: React.FC = () => {
  
   return(
     <Wrapper>
       <TriBlock></TriBlock>
       <Tri></Tri>
<BackGround>
  <Top>
    <ul>
    <li>
    Menu
    </li>
    <li>
      Menu
    </li>
    <li>
      Menu
    </li>
    </ul>
  </Top>
  <Middle>
    <div>
      <li>research</li>
      <li>document</li>
      <li>research</li>
      <li>research</li>
    </div>
  </Middle>
  <Bottom></Bottom>
</BackGround>
       </Wrapper>)
  }

export default Main