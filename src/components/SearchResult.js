import React, { useState } from 'react'
import '../components/SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';



function SearchResult({img,location, title, description,star, price, total}) {
    const [buttons, setButtons] = useState(true)

    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <div className="searchResult__heart">
                <Button style={{color:'red'}} onClick={()=> {setButtons(!buttons)}}>
                    {buttons ? <FavoriteBorderIcon /> : <FavoriteIcon/>}
                </Button>
            </div>
            
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star"/>
                        <p><strong>{star}</strong> </p>
                    </div>
                    <div className="searchResult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
