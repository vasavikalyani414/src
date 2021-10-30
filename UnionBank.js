import React from 'react'
import AndraBank from './AndraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'vasavi kalyani',
        lastName:'jangam'
    }
    return (
        <div>
            <AndraBank info={data} />
            <CorporationBank info={data}/>
        </div>
    )
}
