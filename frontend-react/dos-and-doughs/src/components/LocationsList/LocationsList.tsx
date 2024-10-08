import './LocationsList.css'

import locations from '../../data/locations.json'

function LocationsList() {
  return (
    <div className='locations-list'>
      <h2>Want to know all the places we are at?</h2>
      <div>
        <p style={{ textAlign: 'center' }}>Here is the list...</p>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>{location.address}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LocationsList
