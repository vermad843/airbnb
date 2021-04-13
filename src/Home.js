import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className = "home">
           <Banner/>
           <div className = "home__section">
               <Card
                  src = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                  title = "wolverine"
                  description = "Cards are there to see"
                  price = "$350/night"
                 />
               <Card
                  src = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                  title = "wolverine"
                  description = "Cards are there to see"
                  price = "$350/night"
                 />
                <Card
                  src = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                  title = "wolverine"
                  description = "Cards are there to see"
                  price = "$350/night"
                 />
           </div>
           <div className = "home__section">
           <Card
                  src = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                  title = "wolverine"
                  description = "Cards are there to see"
                  price = "$350/night"
                 />
               <Card
                  src = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                  title = "wolverine"
                  description = "Cards are there to see"
                  price = "$350/night"
                 />
                <Card
                  src = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                  title = "wolverine"
                  description = "Cards are there to see"
                  price = "$350/night"
                 />
           </div>
        </div>
    )
}

export default Home;
