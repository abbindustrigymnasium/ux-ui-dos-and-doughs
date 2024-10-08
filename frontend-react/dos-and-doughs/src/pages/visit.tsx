import VisitSearch from '../components/VisitSearch/VisitSearch'
import LocationsList from '../components/LocationsList/LocationsList'

import { Helmet, HelmetProvider } from 'react-helmet-async';

function Visit() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Do's & Doughs | Visit</title>
      </Helmet>
      <section id='visit'>
        <VisitSearch />
        <LocationsList />
      </section>
    </HelmetProvider>
  )
}

export default Visit
