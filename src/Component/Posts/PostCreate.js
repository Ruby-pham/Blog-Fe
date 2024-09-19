import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useMyContext} from "../Context/MyContext";
import UploadImageContent from '../UploadImageContent';
import {MdPublic} from "react-icons/md";
import {RiGitRepositoryPrivateFill} from "react-icons/ri";
import "../../styles/createNewPosts.scss"

function PostCreate() {
    const {nameLogin, imageContent} = useMyContext();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('public'); // Mặc định là công khai
    const navigate = useNavigate();

    const handleEditorChange = (event, editor) => {
        setContent(editor.getData()); // Cập nhật nội dung khi có thay đổi
    };

    const handleImageUpload = (url) => {
        const newContent = content + `<img src="${url}" alt="Uploaded Image" />`;
        setContent(newContent);
    };

    const submit = () => {
        axios.post("http://localhost:3000/posts", {
            title,
            content,
            username: nameLogin.username,
            status,
            type: 'text'
        }).then(() => {
            alert("Added successfully");
            navigate("/");
        }).catch(err => {
            console.error("Error adding post:", err);
        });
    };

    return (
        <div className='create-new-posts-container'>
            <div className='create-new-posts-content'>
                <h1>Create New Posts</h1>
                <input
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={handleEditorChange}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button className='btn-send-content btn btn-primary' onClick={submit}>Send</button>
                <UploadImageContent onImageUpload={handleImageUpload}/> {/* Gọi component upload hình ảnh */}
            </div>
        </div>

    );
}

export default PostCreate;