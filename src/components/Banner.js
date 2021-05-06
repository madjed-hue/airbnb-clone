import React ,{useState} from 'react'
import '../components/Banner.css'
import {Button} from '@material-ui/core'
import Search from '../components/Search';
import { useHistory } from 'react-router';

function Banner() {
    const history =  useHistory();
    const [showSearch, setShowSearch] = useState(false)
    return (
        <div className="banner">
            <div className="banner__search">
            {showSearch && <Search/> }
                <Button className="banner__searchButton" variant="outlined" onClick={()=>{setShowSearch(!showSearch)}}>
                    {showSearch ? "Hide": "Search Date"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of Gateway to uncover the hidden gems neer you</h5>
                <Button variant="outlined" onClick={()=> history.push('/search')}>
                    Explore Nearby
                </Button>
            </div>
        </div>
    )
}

export default Banner
