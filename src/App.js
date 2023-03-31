import React, { Component } from 'react';
import axios from "axios";
import Header from "./Components/Header"
import Loading from './Components/LoadAnimation/Loading';
import {Main, Principal, Card, CardInfo, NameStatus, Location, Episode } from "./Components/StyledComponent/StyledComp";

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
        <Header />

        {this.state.loading ? (<Loading />) : (
        <Principal>
          <Main>
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
          </Main>
        </Principal> )}
      </>
    )
  }
}

export default App
