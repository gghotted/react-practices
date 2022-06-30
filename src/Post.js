import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function List(props) {
    const [posts, setPosts] = useState(null);
    const fetchPosts = async () => {
        const res = await axios.get('/post/');
        setPosts(res.data);
    }

    useEffect(() => {
        fetchPosts();
    }, [props.refreshSignal])

    if (!posts) return <div>데이터 없음</div>
    return <div>
        {posts.map((post) => (
            <div>
                {`${post.created} ${post.id} ${post.content}`}
            </div>
        ))}
    </div>
}

function Post() {
    const [refreshSignal, setRefreshSignal] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await axios.post('/post/', {
            title: data.get('title'),
            content: data.get('content'),
        });
        setRefreshSignal(prev => (!prev));
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit}>
            <TextField
                required
                id="title"
                label="title"
                name="title"
            />
            <TextField
                required
                id="content"
                label="content"
                name="content"
            />
            <Button type="submit" variant="contained" color='success'>저장</Button>
            <List refreshSignal={refreshSignal}></List>
        </Box>
    )
}

export default Post;