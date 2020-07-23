import React, {useState} from 'react';
import styled from "styled-components"
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { faForward, faBackward} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import famHouseImg from "../Images/famhouse.png"
import famHouseImg2 from "../Images/famhouse2.png"
import erpImg from "../Images/portfolio2.png"
import openWindow from "../Api/Common/windowOpen"

const Wrap = styled.div`
padding-top: 50px;
div {
    display: flex;
    justify-content: space-between;
}
`

const Frame = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 0px;
    -webkit-animation: Frame 2s; /* Safari, Chrome and Opera > 12.1 */
-moz-animation: Frame 2s; /* Firefox < 16 */
 -ms-animation: Frame 2s; /* Internet Explorer */
  -o-animation: Frame 2s; /* Opera < 12.1 */
     animation: Frame 2s;
     
@keyframes Frame {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`

const FramImage = styled.div`
    width: 800px;
    height: 500px;
    border: 1px solid black;
    margin-right: 50px;
`

const FrameDescription = styled.div`
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
    padding-left:1.5em;text-indent:-1.5em;
}
`

const Line = styled.div`
width: 250px;
border-top: 1px solid gray;
margin: 5px 0px;
padding-bottom: 20px;
`
const ViewButton = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  cursor:pointer;
  margin-top: 15px;
`

const List = [{
    img: famHouseImg,
    name: "FamHouse",
    dec: "쉐어하우스 업체 고객 홈페이지 제작",
    feat: ["고객 회원 가입 및 지점 견학 신청", "구글 맵, 주소 기반 검색", "채널톡 연동"],
    tech: ["React", "nodeJs", "Firebase"],    
    url: "http://famhouse.net",
    git: "https://github.com/SonYoungsung/FamHouse-Homepage"
}   ,
{
    img: famHouseImg2,
    name: "FamHouse Admin",
    dec: "쉐어하우스 업체 매출 및 공실 관리 홈페이지 제작",
    feat: ["고객 회원 가입 및 지점 견학 신청", "구글 맵, 주소 기반 검색", "채널톡 연동"],
    tech: ["HTML5", "CSS3", "Java Script", "Firebase", "nodeJs"],    
    url: "http://famhouse.net",
    git: "",
    info: "ADMIN 페이지라 보안상 공개가 불가능합니다."
}
    ,
    {
        img: erpImg,
        name: "수산업체 매출관리시스템",
        dec: "하남 수산 시장 업체용 매출 관리 시스템",
        feat: ["거래처 매출 관리", "카카오톡 자동 전송", "영수증 자동 인쇄"],
        tech: ["React", "Type Script", "Graphql", "Prisma", "nodeJs"],    
        url: "http://famhouse.net",
        git: "https://github.com/SonYoungsung/erp_fishing_back",
        info: "현재 제작 중입니다."
    }
]

const Portfolio: React.FC = () => {

    const [view, setView] = useState(0)
    const item  = List[view]

    return(
        <Wrap>
            <div>
                {item !== undefined ? ( <Frame >
                  <FramImage style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                  }}>
                  </FramImage>
                  
                  <FrameDescription>
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
                        <FontAwesomeIcon icon={faGithub} size="4x" style={{paddingTop: "20px", cursor: "pointer"}} onClick={()=>openWindow(item.git)}></FontAwesomeIcon>
                      </FrameDescription>          
              </Frame>) : <div>404 ERROR</div>}
              </div>
                
                <div>
                <ViewButton onClick={()=>{view !== 0 ? alert(item.info) : openWindow(item.url)}}>Link to Homepage</ViewButton>
                {view+1 === List.length ? 
                (<FontAwesomeIcon className="nextBtn" icon={faBackward} size="4x" style={{paddingTop: "20px", cursor: "pointer"}} onClick={() => setView(view-1)}></FontAwesomeIcon>)
                     : view === 0 ? (
                        <FontAwesomeIcon className="nextBtn" icon={faForward} size="4x" style={{paddingTop: "20px", cursor: "pointer"}} onClick={() => setView(view+1)}></FontAwesomeIcon>
                        ) : 
                            (
                            <div>
                            <FontAwesomeIcon className="nextBtn" icon={faBackward} size="4x" style={{paddingTop: "20px", cursor: "pointer"}} onClick={() => setView(view-1)}></FontAwesomeIcon>
                            <FontAwesomeIcon className="nextBtn" icon={faForward} size="4x" style={{paddingTop: "20px", cursor: "pointer"}} onClick={() => setView(view+1)}></FontAwesomeIcon>
                            </div>
                            )
                        
                }
                
                </div>
        </Wrap>
        )
}

export default Portfolio;