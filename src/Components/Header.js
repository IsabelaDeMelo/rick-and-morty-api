import React, { Component } from 'react';
import Icon from "../Imgs/rickAndMortyIcon.png";
import {Title, Header, HeaderContainer, Navegation, List } from "./StyledComponent/StyledComp";

export class Header_ extends Component {
    render() {
        return (
            <div>
                <Header>
                    <HeaderContainer>
                        <Navegation>
                            <img src={Icon} alt="Icon" />
                            <List>
                                <li><a>Docs</a></li>
                                <li><a>About</a></li>
                                <li><button>SUPPORT US</button></li>
                            </List>
                        </Navegation>
                        <Title>Rick and Morty Characters</Title>
                    </HeaderContainer>
                </Header>
            </div>
        )
    }
}

export default Header_
