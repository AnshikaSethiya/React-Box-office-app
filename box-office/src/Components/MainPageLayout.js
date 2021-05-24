import React, { Children } from 'react'
import Navs from "./Navs"
import Title from './Title'

const MainPageLayout = ({Children}) => {
    return (
        <div>
        <Title title="Box Office"
            subtitle="Are You Looking For a Movie or an Actor?"
        />
            <Navs />

            {Children}
        </div>
    )
}

export default MainPageLayout
