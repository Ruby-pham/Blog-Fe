import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";
import { useMyContext } from "./Context/MyContext";
import { FcPlus } from "react-icons/fc";
import "../styles/upload-image.scss";

export default function UploadImageContent({ onImageUpload }) {
    const { setImageContent } = useMyContext();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const uploadFile = () => {
        if (!imageUpload) return;
        const imageRef = ref(storage, `upload-files/images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
                setImageContent(prev => ({ ...prev, image: url }));
                onImageUpload(url); // Gọi hàm để chèn URL hình ảnh vào CKEditor
            }).catch(error => console.error('Lỗi khi lấy URL hình ảnh:', error));
        }).catch(error => console.error('Lỗi khi tải lên file:', error));
    };

    return (
        <div className='upload'>
            <label className='label-upload' htmlFor='labelUpload'><FcPlus /> Choose image</label>
            <input
                type="file"
                hidden
                id='labelUpload'
                onChange={(e) => setImageUpload(e.target.files[0])}
            />
            <br />
            <button className='button-upload btn bg-secondary mb-2' onClick={uploadFile}>Upload</button>
            <br />
            <div className='preview-image'>
                {imageUrl ? (
                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '150px', maxHeight: '150px' }} />
                ) : (
                    <span>Preview Image</span>
                )}
            </div>
        </div>
    );
}