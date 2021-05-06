import React from 'react';
import Banner from './Banner';
import '../components/Home.css';
import Card from '../components/Card';
function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/b08ac169-c202-4f10-aaa0-d58803952ca1.jpg?im_w=1200"
                    title="Online Experience"
                    description="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/5078e3ac-7233-4da3-b60f-a34a01b09e8b.jpg?im_w=1200"
                    title="Unique Stays"
                    description="Millions of Airbnb Hosts connect curious people to an endlessly interesting world. Guests can discover the perfect place to stay for every getaway and explore ..."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-45447985/original/96af9a20-c49c-4b2d-9438-432f06619d70.jpeg?im_w=1200"
                    title="Entire Homes"
                    description="Airbnb, Inc operates an online marketplace for lodging, primarily homestays for vacation rentals "
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/b08ac169-c202-4f10-aaa0-d58803952ca1.jpg?im_w=1200"
                    title="Entire guesthouse hosted by Mandy"
                    description="550sf over-garage studio apartment with King-sized bed and kitchenette. Free off-street onsite parking. Lots of restaurants and shops within walking distance"
                    price="$70/night"

                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/5139166a-88c7-4257-883d-05cafaf223d9.jpg?im_w=1200"
                    title="Private room in house hosted by Annette"
                    description="This private room is located on the first floor of our house,directly opposite the bathroom. is a good bed,a desk by the window with a wide view of street,"
                    price="$28/night"

                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-49233041/original/fddcb3c8-a9ad-43fa-9994-15b05a474f26.jpeg?im_w=1200"
                    title="Entire apartment hosted by Laura - Interhome Group"
                    description="'Azzurra (PFS158)', 2-room apartment 40 m2 on 2nd floor. Beautiful and cosy furnishings: 1 double bedroom with 1 french bed (160 cm). Exit to the balcony."
                    price="$11/night"

                />
            </div>
        </div>
    )
}

export default Home;
