import React, { Component } from "react";
import CatPicture from "./CatPicture"
import LikeDislikeButtons from "./LikeDislikeButtons"

export default class Voting extends Component {
  constructor(props) {
    super(props);
    this.state = { dataIsReturned: false };
  }

  fetchNewData() {
     fetch("http://localhost:4000/api/cat")
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data, dataIsReturned: true });
      });
  }

  componentDidMount() {
    this.fetchNewData();
  }

  like(event){
    this.forceUpdate(this.fetchNewData);
   const  data = {image_id: event.target.id, value: true, sub_id: "demo-dd18da"} 
    fetch("https://api.thecatapi.com/v1/votes/" , {
      method: 'POST', 
      mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  
  }

  dislike(event){
    this.forceUpdate(this.fetchNewData);
    const  data = {image_id: event.target.id, value: false, sub_id: "demo-dd18da"} 
    fetch("https://api.thecatapi.com/v1/votes/" , {
      method: 'POST', 
      mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
   
  }


  render() {
    let state =this.state;
    const thiss = this;
    const like = this.like.bind(thiss)
    const dislike = this.dislike.bind(thiss)
    return (
      <>
        {state.dataIsReturned ? <>
        <LikeDislikeButtons like={like} dislike={dislike} id={state.data.cat.id}/>
        <CatPicture data={state.data} /></>
        : 
          <h1> Loading </h1>
        }
      </>
    );
  }
}
