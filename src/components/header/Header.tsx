import React from "react"
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin-top:37px;
    padding-bottom:24px;
    border-bottom: 1px solid #000;
    @media (max-width: 650px) {
        flex-direction: column;
        align-items: start;
        padding-bottom:18px;
    }
`

const Left = styled.div`
    width: 400px;
    @media (max-width: 650px) {
        width: 100%;
    }
`

const Right = styled.div`
    text-align: right;
    padding-top: 14px;
    @media (max-width: 650px) {
        padding-top: 19px;
    }
`

const MainHeader = styled.h1`
    font-size: 36px;
    line-height: 48px;
    @media (max-width: 650px) {
        font-size: 24px;
    }
`

const Text = styled.p`
    font-size: 16px;
    line-height: 20px;
    margin-top: 8px;
`

const Link = styled.a<{marginRight?:number, active?: boolean}>`
    ${({active}) => active ? 'font-family: HelveticaBold' : ''};
    font-size: 16px;
    font-weight: ${({active}) => active ? 'bold' : 'normal'};
    line-height: 20px;
    margin-right: ${({marginRight}) => marginRight || 0}px;
    cursor:pointer;

    &:hover {
        text-decoration: ${({active}) => active ? 'none' : 'underline'};
        color: #000000;
    }
`


const Header: React.FC<any> = () => {
    return (
        <Container>
            <Left>
                <MainHeader>ARMAGGEDON V</MainHeader>
                <Text>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</Text>
            </Left>
            <Right>
                <Link marginRight={24} active>Астероиды</Link>
                <Link>Уничтожение</Link>
            </Right>
        </Container>
    )
}

export default Header