import { useState } from "react";

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    return (
        <button
        className={`px-4 py-2 rounded-lg font-semibold ${liked ? "bg-red-500 text-red-500" : "bg-gray-300 text-white"}`}
        onClick={() => setLiked(!liked)}
        >
        {liked ? "Liked" : "Like"}
        </button>
    );
};

export default LikeButton;
