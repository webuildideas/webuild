// Packages
import React from 'react'

// Styles
import './styles/ArchiveNotice.css'

const ArchiveNotice = () => {
  return (
    <aside aria-label="webuild status" className="ArchiveNotice">
      <div className="ArchiveNotice-inner">
        <p className="ArchiveNotice-kicker">2015-2025</p>
        <p className="ArchiveNotice-copy">
          After 10+ years of building products, brands, and ideas with ambitious
          teams around the world, webuild officially closed in mid 2025. This
          site remains online as an archive of that chapter, with deep gratitude
          for the clients, teammates, partners, and supporters who made it
          possible.
        </p>
      </div>
    </aside>
  )
}

export default ArchiveNotice
