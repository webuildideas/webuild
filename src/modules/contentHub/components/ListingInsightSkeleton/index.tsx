// Packages
import React from 'react'

// Styles
import './style.css'

const ListingInsightSkeleton = () => {
  return (
    <div className="ListingInsightSkeleton">
      <div className="ListingInsightSkeleton-img" />
      <div className="ListingInsightSkeleton-content">
        <div className="ListingInsightSkeleton-header">
          <div className="first" />
          <div className="second" />
          <div className="third" />
        </div>
        <div className="ListingInsightSkeleton-copy first" />
        <div className="ListingInsightSkeleton-copy second" />
        <div className="ListingInsightSkeleton-copy third" />
      </div>
    </div>
  )
}

export default ListingInsightSkeleton
