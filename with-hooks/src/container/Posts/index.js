import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

import Spinner from '@/components/Spinner/Spinner';
import Pagination from '@/components/Pagination/Pagination';
import useFetch from '@/hooks/useFetch';
import { PostsContext } from '@/contexts/postsContext';

const Posts = () => {
  const [{ posts, totalCount, currentPage, pageSize }, dispatch] = useContext(
    PostsContext
  );
  const [postsLoading, getPosts] = useFetch();
  const [deleteLoading, deletePost] = useFetch();
  const pagePosts = posts.slice((currentPage - 1) * 10, currentPage * pageSize);

  const handleGetPosts = () => {
    getPosts('GET_POSTS', '/posts', { method: 'GET' });
  };

  const handleRemovePost = id => {
    deletePost('', `/posts/${id}`, { method: 'DELETE' });

    dispatch({
      type: 'DELETE_POST',
      payload: { id },
    });
  };

  return (
    <div className="ml-3">
      {(deleteLoading || postsLoading) && (
        <Spinner animation="border" role="status" />
      )}

      <h3 className="text-muted">Posts</h3>

      <Button variant="info" onClick={handleGetPosts}>
        Get Posts
      </Button>

      {posts?.length ? (
        <>
          <Pagination
            total={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            dispatch={dispatch}
          />

          <ul className="list-group mt-3">
            {pagePosts.map(item => (
              <li className="list-group-item" key={item.id}>
                <Button
                  variant="danger"
                  size="sm"
                  style={{ margin: '0 10px 10px 0' }}
                  onClick={() => handleRemovePost(item.id)}
                >
                  Remove
                </Button>

                {item.title}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Posts;
