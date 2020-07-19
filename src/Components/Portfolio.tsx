import React, {useState} from 'react';
import styled from "styled-components"
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { faForward} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import famHouseImg from "../Images/famhouse.png"

const Wrap = styled.div`
padding-top: 50px;
div {
    display: flex;
    justify-content: flex-end;
}
`

const Frame = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 0px;
`

const Frame_Image = styled.div`
    width: 800px;
    height: 500px;
  border: 1px solid black;
  margin-right: 50px;
`

const Frame_Description = styled.div`
display: flex;
flex-direction: column;
h5 {
    font-size: 30px;
    font-weight: 800;
}
h4 {
    font-size: 20px;
    font-weight: 800;
    padding-top: 20px;
}
li {
    padding-top: 10px;
}
`

const Line = styled.div`
width: 250px;
border-top: 1px solid gray;
margin: 5px 0px;
padding-bottom: 20px;
`

const List = [{
    img: famHouseImg,
    name: "FamHouse",
    dec: "쉐어하우스 업체 고객 홈페이지 및 관리자 홈페이지 제작",
    feat: ["고객 회원 가입 및 견학 신청", "채널톡 연동"],
    tech: ["React", "nodeJs", "Firebase"],    
}
    ,
]

const Portfolio: React.FC = () => {

    const [view, setView] = useState(0)
    const item = List[view]

    return(
        <Wrap>
                {item !== undefined ? ( <Frame >
                  <Frame_Image style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                  }}>
                  </Frame_Image>
                  
                  <Frame_Description>
                          <h5>{item.name}</h5>
                          <Line></Line>
                          <h4>Discription</h4>
                          <li>
                              {item.dec}
                          </li>
                          <h4>Main Features</h4>
                        {item.feat.map(text => (<li>{text}</li>))}
                        <h4>Tech</h4>
                        {item.tech.map(text => (<li>{text}</li>))}
                        <h4>Git Repository</h4>
                        <FontAwesomeIcon icon={faGithub} size="4x" style={{paddingTop: "20px"}}></FontAwesomeIcon>
                      </Frame_Description>          
              </Frame>) : <div>404 ERROR</div>}
              
                
                <div>
                  <FontAwesomeIcon className="nextBtn" icon={faForward} size="4x" style={{paddingTop: "20px"}} onClick={() => setView(view+1)}></FontAwesomeIcon>
                </div>
        </Wrap>
        )
}

export default Portfolio;