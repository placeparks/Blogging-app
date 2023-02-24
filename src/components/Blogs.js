import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Blogs({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
 
<div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h2> {post.title}</h2>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h5 className="author">@{post.author.name}</h5>
          </div>
        );
      })}
</div>
  );
    }

export default Blogs;