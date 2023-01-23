import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h2>Page not found</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta exercitationem magni neque, non odit pariatur. At quos ipsum unde quibusdam dolore minus reiciendis eum. Suscipit, quidem. Ut, quam voluptate?</p>

        <p>Go to the <Link to='/'>Homepage</Link>.</p>
    </div>
  )
}
