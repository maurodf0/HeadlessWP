interface WpPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    'wp:featuredmedia': Array<{
      source_url: string;
    }>;
    author: Array<{
      name: string;
      avatar_urls: { [key: string]: string };
    }>;
    'wp:term': Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

const API_URL:string = "https://wp.maurodefalco.it/wp-json/wp/v2/"

export const UseWP = () => {

    const getPostBySlug = async (slug: string) => {
    const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`)
    if (!res.ok) throw new Error("Errore nel recupero del post")
    const data = await res.json()
    return data[0]
  }

  const getCategories
  const getPages
  
  return {
  getPostBySlug,
    getCategories,
    getPages
  }
}