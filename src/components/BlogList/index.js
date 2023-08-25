// Write your JS code here

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="ul-container">
      {blogList.map(each => (
        <BlogItem key={each.id} blogDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
