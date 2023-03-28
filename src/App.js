import React, { Component } from 'react';
import axios from "axios";
import Icon from "./Imgs/rickAndMortyIcon.png"
import styled from "styled-components";
import Loading from './Components/LoadAnimation/Loading';
// import Title from "./Components/StyledComp.js";
// import HeaderContainer from "./Components/StyledComp.js";
// import Header from "./Components/StyledComp.js";
// import Navegation from "./Components/StyledComp.js";
// import List from "./Components/StyledComp.js";
// import Principal from "./Components/StyledComp.js";
// import Body from "./Components/StyledComp.js";
// import Card from "./Components/StyledComp.js";
// import CardInfo from "./Components/StyledComp.js";
// import NameStatus from "./Components/StyledComp.js";
// import Location from "./Components/StyledComp.js";

const Title = styled.h1`
color: #202329;
font-size: 5.3em;
font-weight: 900;
text-align: center;
`

const HeaderContainer = styled.div`
background: rgba(255, 255, 255, 0.860);
height: 50vh;
`

const Header = styled.section`
width: 100%;
height: 50vh;
background-image: url(https://rickandmortyapi.com/api/character/avatar/19.jpeg);
background-repeat: no-repeat;
background-size: 35%;
background-position: top center;
`

const Navegation = styled.nav`
display: flex;
justify-content: space-between;

img {
  width: 5%;
  height: 6%;
  margin-top: .5em;
  margin-left: .5em;
}
`

const List = styled.ul`
display: flex;
justify-content: right;
list-style: none;
gap: 1.5em;
font-weight: bold;
font-size: 1.2em;
padding-right: 2em;

li > a {
  color: #202329;
  border: none;
  background-color: transparent;
  font-size: 1em;
  font-weight: bold;
}

li > button {
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #FF9800;
  border-radius: 0.5em;
  padding: 0.7em;
}

li > button: hover {
  background-color: #FF9800;
  color: white;
  cursor: pointer;
}

li > a:hover {
  color: #FF9800;
  cursor: pointer;
}
`

const Principal = styled.section`
padding-left: 4vw;
background-color: #202329;
`

const Body = styled.section`
background-color: #202329;
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
padding-top: 10vh;
padding-bottom: 10vh;
`

const Card = styled.div`
background-color: #3C3E44;
width: 45vw;
height: 36vh;
color: white;
display: flex;
margin-left: 1vw;
margin-top: 5vh;
border-radius: .5em;
box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.150);

img {
width: 17vw;
height: 36vh;
border-radius: .5em 0 0 .5em;
}
`

const CardInfo = styled.div`
height: 30vh;
margin-left: 0.7em;
line-height: 5px;
display: flex;
flex-direction: column;
justify-content: space-evenly;

p {
color: #988F81;
 font-weight: bold;
}
`

const NameStatus = styled.div`
h2 {
width: 28vw;
font-size: 1.8em;
font-weight: bold;
}

h2: hover {
  color: #FF9800;
  cursor: pointer;
}

p {
color: white;
}
`

const Location = styled.div`
margin-bottom: 1em;

span:hover {
  color: #FF9800;
  cursor: pointer;
}
`

const Episode = styled.div`
  span:hover {
    color: #FF9800;
    cursor: pointer;
}
`


const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
})

class App extends Component {

  state = {
    characters: [],
    loading: true
  }

  LoadAnimation = () => {
    setInterval(() => {
      this.setState({loading: false});
    }, 2000);
  };

  HandleApi = async () => {
    const response = await Api.get()

    const items = response.data.results.map((item) => {
      return {
        ...item
      }
    })

    this.setState({
      characters: items
    })
  }

  componentDidMount() {
    this.HandleApi()
    document.title = "Rick and Morty Characters"
    this.LoadAnimation()
  }

  render() {
    return (
      <>
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

        {this.state.loading ? (<Loading />) : (
        <Principal>
          <Body>
            {this.state.characters.map((item) => (
              <Card>
                <img src={item.image} alt={item.name} />
                <CardInfo>
                  <NameStatus>
                    <h2>{item.name}</h2>
                    <p>{item.status} - {item.species}</p>
                  </NameStatus>
                  <Location>
                    <p>Last known location:</p>
                    <span>{item.origin.name}</span>
                  </Location>
                  <Episode>
                    <p>First seen in:</p>
                    <span>-Episode name-</span>
                  </Episode>
                </CardInfo>
              </Card>
            ))}
          </Body>
        </Principal> )}
      </>
    )
  }
}

export default App
