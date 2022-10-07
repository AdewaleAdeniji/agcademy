import config from "../configs";
console.log(process.env);

export async function gql(query, variables = {}) {
  const data = await fetch(config.HASHNODE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  return data;
}
export const GET_USER_ARTICLES = `
query GetUserArticles($page: Int!) {
    user(username: ${config.HASHNODE_USERNAME}) {
      publication {
        posts(page: $page) {
          title
          brief
          slug
          dateAdded
          contentMarkdown
          coverImage
        }
      }
    }
  }
`;
const buildBlogId = (b, page) => {
  const firstWord = b.title.split(" ")[0];
  const date = b.dateAdded.substr(8, 5);
  return (b.id = (firstWord + "_" + date + "_" + page).toLowerCase());
};
const getBlogFromId = (str) => {
  const id = str.split("_");
  if(id.length !== 3) return false;
  return {
    firstWord: id[0],
    date_substr: id[1],
    page: id[2],
    id: str,
  };
};
export const getBlogs = async ({ page, setLoading, blogs }) => {
  const response = await gql(GET_USER_ARTICLES, { page: page });
  const result = await response.json();
  const fetchedBlogs = result.data.user.publication.posts;
  setLoading(false);
  fetchedBlogs.map((b) => {
    return (b.id = buildBlogId(b, page));
  });
  if(!blogs){
    blogs = []
  }
  return [ ...blogs, ...fetchedBlogs];
};
export const blogCache = {
  getBlogs: function(props) {

    const { page, blogs, setLoading } = props;
    if (localStorage.getItem(`blogs-${page}`)) {
      var { blogs: bloglist } = JSON.parse(localStorage.getItem(`blogs-${page}`) || {});
      const isPageCached = bloglist.length > 0;
      if (isPageCached) {
        setLoading(false);
        const fullBlogs = [ ...blogs, ...bloglist];
        fullBlogs.map((b)=> b.cached = true);
        backgroundCacheUpdate(page);
        return fullBlogs;
      }
      backgroundCacheUpdate(page);
      return getBlogs(props);
    }
    backgroundCacheUpdate(page);
    return getBlogs(props);
  },
  saveBlogs: function({ blogs, page }) {
    localStorage.setItem(
        `blogs-${page}`,
      JSON.stringify({
        blogs: blogs || [],
        page: page,
      })
    );
  },
  getBlog: async function({ id, setLoading }) {
    const blogDetails = getBlogFromId(id);
    if(!blogDetails){
        setLoading(false);
        return {
            status: false
        }
    }
    if(localStorage.getItem(`blogs-${blogDetails.page}`)){
        const { blogs } = JSON.parse(localStorage.getItem(`blogs-${blogDetails.page}`));
        setLoading(false);
        return findBlog(blogDetails, blogs);
    }
    else {
        return await getSingleBlog(blogDetails, setLoading);
    }
  },
};
const findBlog = (blogdetails, blogs) =>  {
    const blog = blogs.filter((b)=> b.id === blogdetails.id);
    return { status: true, ...blog[0]};
}
const getSingleBlog = async (blog, setLoading) => {
    const { page } =  blog;
    const blogs = await getBlogs({
        page: parseInt(page),
        blogs: [],
        setLoading: setLoading
    });
    backgroundCacheUpdate(parseInt(page));
    return await findBlog(blog, blogs);
}
export const backgroundCacheUpdate = async (calledPage) => {
    const blogs = await getBlogs({
        page: calledPage,
        blogs: [],
        setLoading: ()=>{}
    });
    blogCache.saveBlogs({ blogs, page: calledPage});
};
