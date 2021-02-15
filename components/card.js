import React from 'react'
import {RichText} from 'prismic-reactjs'
import {cardStyles} from 'styles'

const Card = ({card}) => {
    return (
      <div className="card-container">
        <img className="photo" src={card.data.photo.url}/>
        <style jsx global>{cardStyles}</style>
      </div>
    );
}

export default Card
