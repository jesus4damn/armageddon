import React from "react"
import styled from "styled-components"


const Container = styled.button`
    padding: 14px 16px;
    background: #186DD6;
    border:none;
    border-radius: 24px;
    font-size: 16px;
    line-height: 20px; 
    color: #FFFFFF;
    cursor:pointer;
`

const Button: React.FC<any> = ({children}:{children:React.ReactNode}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Button