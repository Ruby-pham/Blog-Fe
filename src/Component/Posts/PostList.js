import axios from "axios";
import { useEffect, useState } from "react";

function PostList() {
    let [postList, setPostList] = useState([]);
    const getPostList = () => {
        axios.get("http://localhost:3000/posts").then((res) => {
            let data = res.data;
            setPostList(data);
            console.log('check post 1',data)
        }).catch(error=>{
            console.log(error)
        })
    }
    useEffect(() => {
        getPostList();
    }, []);


    const remove = (id) => {
        let isConfirm = window.confirm("Are you sure?");
        if (isConfirm) {
            axios.delete(`http://localhost:3000/posts/${id}`).then((res) => {
                alert("Deleted");
                getPostList();
            }).catch(error => console.error("Error deleting post:", error));
        }
    }

    return (
        <>
            <h1>Posts List</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>title</td>
                    <td>content</td>
                    <td>username</td>
                    <td>status</td>
                    <td>type</td>
                    <td>CreateAt</td>
                    <td colSpan={2}>Action</td>
                </tr>
                {
                    postList.map((post) => (
                        <>
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td dangerouslySetInnerHTML={{__html: post.content}}></td>
                                <td>{post.username}</td>
                                <td>{post.status}</td>
                                <td>{post.type}</td>
                                <td>{post.createAt}</td>
                                <td>
                                    <button onClick={() => {
                                        remove(post.id)
                                    }}>Delete
                                    </button>
                                </td>
                                <td>Update</td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    );
}

export default PostList;