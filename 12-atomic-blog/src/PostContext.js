import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

// WHEN TO OPTIMIZE CONTEXT
// it's actually very important to understand that you only need to optimize your context in case that three things are true at the same time.
// So first of all, the state in the context needs to change all the time.
// Second, the context has many consumers
// and third, and probably most importantly the app is actually slow and laggy.
// So only if all of these are true it is time to optimize context.

// 1) CREATE A CONTEXT
const PostContext = createContext();
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchQuery, searchedPosts]);
  return (
    // 2) PROVIDE VALUE TO CHILD COMPONENTS
    <PostContext.Provider value={value}>{children}</PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used ouside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
