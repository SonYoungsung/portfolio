import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
${reset};
url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');
* {
    box-sizing: border-box;  
}
body {
    color: black;
}
`;
