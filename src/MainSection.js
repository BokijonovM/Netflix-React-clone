import Section from './components/Section'
import TvShows from './components/TvShows'

import React from 'react'

function MainSection() {
    return (
        <div>
            <TvShows />

            <Section heading="Harry Potter" title="Harry Potter"/>
            <Section heading="Marvel" title="Marvel"/>
            <Section heading="Lord of the Rings" title="Lord of the Rings"/>
            <Section heading="Horror" title="Horror"/>
        </div>
    )
}

export default MainSection
