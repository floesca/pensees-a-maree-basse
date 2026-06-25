import "./home.css"
import { Link } from "react-router-dom"
import posts from "../../data/posts"

function Home() {

return (
    <main>
      <div className="hero-banner">
        <div className="hero-title">
          <h1>Pensées à marée basse</h1>

          <h2>
            Journal d'une vie en transformation, entre mer, plantes et pensées lentes.
          </h2>
        </div>
      </div>

      <div className="latest-posts">
        <h3>Derniers fragments</h3>
          {posts.map((post) => (
          <div key={post.id} className="post-preview">
          <h4><Link to={`/journal/${post.id}`}>{post.title}</Link></h4>
          <p>{post.excerpt}</p>
        </div>
      ))}
      </div>
    </main>
    )
}

export default Home