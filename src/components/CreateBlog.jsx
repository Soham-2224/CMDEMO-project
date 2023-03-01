import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import axios from "axios";

const CreateBlog = ({ setIsChanged }) => {
    const [blogToSend, setBlogToSend] = useState({
        title: "",
        text: "",
    });
    const [loading, setLoading] = useState(false);

    const userDetails = useSelector(selectUser);

    let objToSend = {
        user: userDetails?.id,
        title: blogToSend.title,
        text: blogToSend.text,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .post("https://cmdemo-backend.onrender.com/post", objToSend)
            .then((response) => {
                alert(response.data.message);
                setBlogToSend({
                    title: "",
                    text: "",
                });
                setIsChanged(true);
            })
            .catch((err) => {
                alert(err.response.data.message);
                console.log(err);
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="min-h-[200px] w-full grid place-content-center relative bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-900 px-20 py-10 min-w-[1200px]"
            >
                <div className="mb-6 ">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Title
                    </label>
                    <input
                        value={blogToSend.title}
                        onChange={(e) => setBlogToSend({ ...blogToSend, title: e.target.value })}
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Blog title"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="blogtext"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Blog text
                    </label>
                    <textarea
                        value={blogToSend.text}
                        onChange={(e) => setBlogToSend({ ...blogToSend, text: e.target.value })}
                        type="text"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[200px] h-[200px] max-h-[200px]"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-accent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-accent dark:hover:bg-accent/90 dark:focus:ring-blue-800"
                >
                    {loading ? " Posting... " : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default CreateBlog;
