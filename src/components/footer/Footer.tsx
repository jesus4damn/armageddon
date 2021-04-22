import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    padding: 0 51px;
    padding-top: 40px;
    padding-bottom: 46px;
    text-align: center;
`;

const Text = styled.div`
    font-size: 16px;
    line-height: 24px;
`;


const Footer: React.FC<any> = () => {
    return (
        <Container>
            <Text>2021 © Все права и планета защищены</Text>
        </Container>
    )
}

export default Footer