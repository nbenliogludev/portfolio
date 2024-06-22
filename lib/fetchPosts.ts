import useSWR from 'swr';

const API_URL = '/api/posts/';

type PostProps = {
  id: string;
  slug: string;
  title: string;
  likes: number;
  views: number;
  pubDate: string;
  description: string;
};

type PostsPayload = {
  items: PostProps[];
};

async function getPosts(): Promise<PostsPayload> {
  const res = await await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nbenliogludev"
  );
  return res.json();
}

export const getDbPosts = () => {
  const { data, error } = useSWR(API_URL, getPosts);
  return {
    dbPosts: data?.items,
    isLoading: !error && !data,
    isError: error
  };
};

export const getDevtoPosts = async () => {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nbenliogludev');

  if (res.status < 200 || res.status >= 300) {
    throw new Error(`Error fetching... Status code: ${res.status}, ${res.statusText}`);
  }
  const dev_posts = await res.json();
  return dev_posts.items;
};



// export const getDevtoPosts = async () => {
//   const params = { username: process.env.DEVTO_USERNAME, per_page: 1000 };
//   const headers = { "api-key": process.env.DEVTO_APIKEY };

//   const { data }: AxiosResponse = await axios.get(
//     `${DEVTO_APIURL}/articles/me`,
//     {
//       params,
//       headers
//     }
//   );
//   return data;
// };
