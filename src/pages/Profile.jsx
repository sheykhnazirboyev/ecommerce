import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const params = useParams();
  return (
    <div>
      This is a Profile page Your id is {params.userId}
    </div>
  )
}
