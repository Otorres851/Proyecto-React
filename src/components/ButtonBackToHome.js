import React from'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => (
    <Link
      className='button is-link is-rounded'
      to='/'>
      Back to home screen
    </Link>
)