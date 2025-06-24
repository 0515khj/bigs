import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`

  ${reset}

  html, body, #root {
        height: 100%; 
        width: 100%;
        margin: 0;
        padding: 5px 10px 0;

        a{text-decoration:none; color:#333;}
    }

    * {
        box-sizing: border-box;
    
    }
        
        li { list-style:none }
        button { border:none; } 

          /* @media (max-width:480px) {
      
    } // 모바일
    
    @media (max-width:768px) {
      
    } // 태블릿

    @media (min-width:1024px) {
      
    } // 컴퓨터 */
`
export default GlobalStyle;