import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Button from "../../common/Button"
import { RootState } from "../../store/reducers/rootReducer"
import Asteroid from "../main_page/Asteroid"


const Container = styled.div`
    padding-top: 26px;
    text-align: center;
`

const Header = styled.h1`
    font-size: 36px;
    line-height: 48px;
    @media (max-width: 650px) {
        font-size: 24px;
    }
`

const Link = styled.a`
    font-size: 16px;
    font-weight: 'normal';
    line-height: 50px;
    cursor:pointer;
    &:hover {
        text-decoration: 'underline';
        color: #000000;
    }
`


const DestroyPage: React.FC<any> = () => {
    const history = useHistory()

    const meteors = useSelector((state: RootState) => state.destroy.list)


    return (
        <Container>
            <Header>Список на уничтожение</Header>
            {meteors.map((meteor) => <Asteroid 
                                        key={meteor.id}
                                        id={meteor.id}
                                        name={meteor.name}
                                        diameter={meteor.estimated_diameter.meters.estimated_diameter_min}
                                        close_approach_data={meteor.close_approach_data}
                                        distanceKm={true}
                                        meteor={meteor}
                                        destroy={true}/>)}
            {meteors.length === 0 && <Link onClick={() => history.push('/')}>Добавить астероиды</Link>}
            <div style={{marginTop: '20px'}}/>
            <Button>Заказ бригады им. Брюса Уилиса</Button>
        </Container>
    )
}

export default DestroyPage