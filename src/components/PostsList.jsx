import { useContext } from 'react';
import PostsContext from '../contexts/PostsContext';
import Card from './Card'

export default function PostsList() {

    const posts = useContext(PostsContext);

    return (
        <div className='container'>
            {
                posts &&
                posts.map((post) => (
                    <Card key={post.id} id={post.id} title={post.title} content={post.content} image={post.image || '../img/placeholder.jpg'} tags={post.tags} />
                ))}
        </div>
    )
}