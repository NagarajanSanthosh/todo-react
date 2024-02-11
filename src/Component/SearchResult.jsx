import React from 'react'

export const SearchResult = ({results}) => {
  return (
    <div>
        {results.map(result => {
            <div> <ul> <li>{result.text}</li></ul> </div>
        })}
    </div>
    )
}
