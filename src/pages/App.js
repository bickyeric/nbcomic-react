import React from 'react'
import queryString from 'query-string'

const link = "https://backend-bot.000webhostapp.com/index.php/comic/read/userid/";

class App extends React.Component {

  constructor() {
    super()


    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    this.handleGetData()
  }

  handleGetData = () => {
    const parsed = queryString.parse(window.location.search)
    console.log(link+parsed.comic+"/"+parsed.episode)

    fetch(link+parsed.comic+"/"+parsed.episode)
    .then(res => res.json())
    .then(res => this.setState({images: res.episode.page}))
  }

  render() {
    if (this.state.images.length < 1){
      return <div/>
    }
    return(
      <div>
        {this.state.images.map((p, index) => (
          <center><img src={p} alt={p}></img></center>
        ))}
      </div>
    )
  }
}

export default App