import React from "react"
import styled from "styled-components"
import Checkbox from "../../common/Checkbox"
import Asteroid from "./Asteroid"

const Container = styled.div`
    padding-top: 26px;
`

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    @media (max-width: 650px) {
        flex-direction: column;
        align-items: start;
        margin-bottom: 0px;
    }
`

const Text = styled.div`
    font-size: 16px;
    line-height: 20px;
    margin-top: 3px;
    @media (max-width: 650px) {
        margin-top: 16px;
    }
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

const MainPage: React.FC<any> = () => {
    return (
        <Container>
            <Filter>
                <Checkbox value={false} label={"Показать только опасные"}/>
                <Text>
                    Расстояние <Link active>в километрах</Link>, <Link>в дистанциях от луны</Link>
                </Text>
            </Filter>
            <Asteroid />
            <Asteroid />
            <Asteroid />
        </Container>
    )
}

export default MainPage