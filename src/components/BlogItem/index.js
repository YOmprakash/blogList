// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-item">
      <div className="text-container">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>

      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
