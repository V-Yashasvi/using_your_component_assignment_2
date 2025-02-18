/* eslint-disable react/prop-types */
import LikeButton from './LikeButton'

const PostCard = ({data}) => {
    return (
        <div>
            <img src={data.profileImage} alt={data.id} className='w-100 h-100'/>
            <h3>{data.username}</h3>
            <h2>{data.content}</h2>
            <p>{data.isLiked}</p>
            <LikeButton/>
        </div>
    )
}

export default PostCard
