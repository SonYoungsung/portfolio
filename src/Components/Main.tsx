import React, {useState} from 'react';
import styled from "styled-components"
import { faGithub, faMedium, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Portfolio from "./Portfolio"

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
  border-top:490px solid transparent;
  border-bottom:487px solid transparent;
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
    cursor:pointer;

  }
}
div: nth-child(2) {
  width: 100%;
}
div: nth-child(3) {
  border-left: 1px solid black;
  border-top: 1px solid gray;
  width: 50px;
  height: 50px;
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
flex-direction: row;
`

const NameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  p {
    margin: 5px 0px;
  }
  p: nth-child(1) {
    font-size: 15px;
    font-weight: 400;
  }
  p: nth-child(2) {
    font-size: 30px;
    font-weight: 800;
  }
  p: nth-child(3) {
    line-height: 1.3em
  }
`

const ViewButton = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  cursor:pointer;
  margin-top: 15px;
`

const Icons = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    list-style:none;
    margin-left: 20px;
    cursor:pointer;
  }
`

const linkGithub = (args: string) => {
  window.open(
    args
  );
}

const Main: React.FC = () => {

  const [comp, setComp] = useState("Main")
  
   return(
    <Wrapper>
    <TriBlock></TriBlock>
    <Tri></Tri>
<BackGround>
<Top>
 <ul>
 <li onClick={() => setComp("Main")}>
 Main
 </li>
 <li onClick={() => setComp("Portpolio")}>
 Porfolio
 </li>
 <li onClick={() => setComp("About")}>
   About
 </li>
 <li onClick={() => setComp("Contact")}>
   Contact
 </li>
 </ul>
 <div></div>
 <div></div>
</Top>
   {comp === "Main" ?( <div><Middle>
    <div>
      <li>Creative</li>
      <li>kreativan</li>
       <li>creatiu</li>
       <li>luova</li>
     </div>
 </Middle>
   <Bottom>
     <NameCard>
       <p>Youngsung Son</p>
       <p>Web Developer</p>
       <p>포트 폴리오 안내를 위한 사이트입니다.<br></br>방문을 환영합니다 :)</p>
      <ViewButton onClick={() => setComp("Portpolio")}>View my projects</ViewButton>
     </NameCard>
     <Icons>
       <ul>
       <li onClick={() => linkGithub("https://github.com/SonYoungsung?tab=repositories")}>
     <FontAwesomeIcon icon={faGithub} size="3x"></FontAwesomeIcon>
     </li>
     <li onClick={() => linkGithub("https://medium.com/@sysgigigi")}>
     <FontAwesomeIcon icon={faMedium} size="3x"></FontAwesomeIcon>
     </li>
     <li onClick={() => linkGithub("https://medium.com/@sysgigigi")}>
     <FontAwesomeIcon icon={faInstagram} size="3x"></FontAwesomeIcon> 
     </li>
     <li onClick={() => linkGithub("https://medium.com/@sysgigigi")}>
     <FontAwesomeIcon icon={faFacebook} size="3x"></FontAwesomeIcon> 
     </li>
     </ul>
   </Icons>
   </Bottom></div>) : comp === "Portpolio" ? <Portfolio></Portfolio> : null}
</BackGround>
</Wrapper>
  
  )
  }

export default Main