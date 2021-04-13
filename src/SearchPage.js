import React from 'react';
import './SearchPage.css';
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage__info">
                <p>
                    62 stays . 26 august to 30
                    august . guest
                </p>
                <h1>
                    Stays nearby
                </h1>
                <Button
                   variant = "outlined"
                   >
                    Cancellation Flexibility
                </Button>
                <Button
                   variant = "outlined"
                   >
                    Type of place
                </Button>
                <Button
                   variant = "outlined"
                   >
                    Price
                </Button>
                <Button
                   variant = "outlined"
                   >
                    Rooms and beds
                </Button>
                <Button
                   variant = "outlined"
                   >
                    More filters
                </Button>
            </div>
            <SearchResult
                img = "https://a0.muscache.com/ic/pictures/11850408/f7b273ea_original.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"
                location = "private room in uttarakhand"
                title = "Spacious fully furnished"
                description = "amazing place"
                star = {4.73}
                price = "$30/night"
                total = "$117 total"

              />  
        </div>
    )
}

export default SearchPage;
