import React,{ PropTypes } from 'react'

import { Home } from '../home.jsx'
import { PersonalCenter } from '../personal-center.jsx'
import { PlaceOrder } from '../place-order.jsx'
import { Waiting } from '../waiting.jsx'
import { Washing } from '../washing.jsx'


const ComponentsIndex = {
  'home': <Home />,
  'personal-center': <PersonalCenter />,
'place-order': <PlaceOrder />,
'waiting': <Waiting />,
'Washing': <Washing />

}

export { ComponentsIndex }
