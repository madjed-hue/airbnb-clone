import { Button } from '@material-ui/core';
import React from 'react'
import '../components/SearchPage.css';
import SearchResult from '../components/SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays . 26 August to 30 August . 2 August</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img = "https://a0.muscache.com/im/pictures/9c995556-6064-4310-a63e-88dcc3236c95.jpg"
                location="Bordj El kiffan , Algeria"
                title = "F2 lux Jaccuzzi sauna bord de mer"
                description = "For couples request to deliver family required, 3 guests · 1 bedroom · 1 bath"
                star={4.7}
                price="$60/ night"
                total = "$120/ night"
            />
            <SearchResult
                img = "https://a0.muscache.com/im/pictures/3ce40aa3-8ab1-4f1f-b09f-e4386ae6c8b4.jpg"
                location="Hydra, Alger, Algeria"
                title = "Moderne et confort, totalement équipé à Hydra"
                description = "Velvet atmosphere, charming apartment in a fully equipped family residence, on the ground floor of a secure residence, located in the upscale Hydra district 5 minutes walk "
                star={4.9}
                price="$67/ nigh"
                total = "$130/ night"
            />
            <SearchResult
                img = "https://a0.muscache.com/im/pictures/0ddb4249-f9d1-485d-9a9a-7a6b6c82e501.jpg"
                location="Hydra, Wilaya d'Alger, Algeria"
                title = "Quiet, carefully designed & furnished apartment"
                description = "A Modern furnished apartment; in a quiet area, but very close to the busy street of Sidi Yahia.80m2 apartment, in the First floor, with two bedrooms, and one living room"
                star={4.86}
                price="$53/ night"
                total = "$100/ night"
            />
            <SearchResult
                img = "https://a0.muscache.com/im/pictures/e245c7c1-182d-49db-bc04-9a4a906f58fb.jpg"
                location="Chéraga, Wilaya d'Alger, Algeria"
                title = "Confort hôtelier dans une prestigieuse résidence"
                description = "4 guests · 2 bedrooms · 6 beds · 1 bath F2 + mezzanine located at the prestigious al jazy de cheraga residence, refurbished, decorated with care and professionalism."
                star={4.86}
                price="$48/ night"
                total = "$90/ night"
            />
        </div>
    )
}

export default SearchPage
