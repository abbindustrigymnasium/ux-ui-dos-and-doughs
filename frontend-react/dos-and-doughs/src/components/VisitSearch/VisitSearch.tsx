import './VisitSearch.css'

import { useState } from 'react'

import locations from '../../data/locations.json'

function renderResult(location : any) {
    if (!location) return <p>Select a location to see details.</p>;

    return (
        <>
            <div className='result-details'>
                <div>
                    <a href="mailto:info@dosanddoughs.com" style={{display: "block"}}>info@dosanddoughs.com</a>
                    <a href={"tel:"+ location.phone}>{location.phone}</a>
                </div>
                <hr />
                <div>
                    <p style={{fontSize: "1.2rem", marginBottom: "2em"}}>Open at:</p>
                    <h2 style={{marginBottom: "4em"}}>Monday - Friday<br />6:00 - 23:00</h2>
                    <p style={{maxWidth: "300px"}}>If something happens to our opening hours, we will post on our social media.</p>
                </div>
            </div>
            <div style={{width: "100%"}}>
                <p style={{fontSize: "1.2rem"}}>{location.address}<br />{location.country}</p>
                <div className='google-maps-container'>
                    <div style={{maxWidth: "100%", overflow: "hidden", color: "red", width: "100%", height: "100%"}}><div id="google-maps-canvas" style={{height: "100%", width: "100%", maxWidth: "100%"}}><iframe style={{height: "100%", width: "100%", border: "0"}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Stora+Gatan,+Västerås,+Sweden&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="embed-ded-maphtml" href="https://www.bootstrapskins.com/themes" id="grab-map-data">premium bootstrap themes</a></div>
                </div>
            </div>
        </>
    );
}

function VisitSearch() {
    const [searchItem, setSearchItem] = useState('')
    const [filteredLocations, setFilteredLocations] = useState(locations)
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);

        const filteredItems = locations.filter((location) =>
            location.city.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredLocations(filteredItems);
    };

    const handleLocationClick = (location: any) => {
        setSelectedLocation(location);

        setIsFocused(false);
    };

    return (
        <>
            <h1>Find us near you</h1>
            <div style={{position: 'relative'}}>
                <input className='visit-search-input' type="text" placeholder="Enter your city" value={searchItem} onChange={handleInputChange} onFocus={() => setIsFocused(true)} onBlur={() => setTimeout(() => setIsFocused(false), 200)} />
                <ul className={`result-list ${isFocused ? 'visible' : ''}`}>
                    {filteredLocations.length === 0
                        ? <p>No results found</p>
                        : (
                            [...new Set(filteredLocations.map(location => location.shorthand))]
                              .map((shorthand, index) => {
                                const location = filteredLocations.find(location => location.shorthand === shorthand);
                                return (
                                  <li key={index} onClick={() => handleLocationClick(location)}>
                                    {location?.city}, {shorthand}
                                  </li>
                                );
                              })
                          )
                    }
                </ul>
            </div>
            <div className='result-container'>
                <h2 style={{textAlign: "center"}}>Result</h2>
                <hr />
                <div className='result'>{renderResult(selectedLocation)}</div>
                <hr />
            </div>
        </>
    )
}

export default VisitSearch;