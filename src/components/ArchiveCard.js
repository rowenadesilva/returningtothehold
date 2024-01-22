import React from 'react'

export default function ArchiveCard(props) {
    console.log(props.show)
  return (
     <div className='archiveCard' style={{display: props.show}}>ArchiveCard</div>
  )
}
