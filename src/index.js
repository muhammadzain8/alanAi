import React from 'react'
import reactDom from 'react-dom'

import './index.css'

import App from './App'
import { render } from '@testing-library/react'

reactDom.render(<App />,document.getElementById('root'))