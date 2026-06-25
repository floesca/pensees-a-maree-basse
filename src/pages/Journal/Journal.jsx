import { useParams } from "react-router-dom"
import posts from "../../data/posts"

function PostDetails() {
    const { id } = useParams()
    const post = posts.find((p) => p.id === parseInt(id))

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}

export default PostDetails

// un article = un article card
// mettre une gallerie avec toutes les articles cards 

// PostDetails ne s'affiche que quand on clique sur un lien sur la home page