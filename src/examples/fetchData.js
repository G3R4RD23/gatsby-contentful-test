import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData)
  return (
    <div>
      <h2>Name : {data.site.info.person.name}</h2>
    </div>
  )
}

export default FetchData
