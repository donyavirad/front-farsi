import { supabase } from "./db/supabase"

export default async function sitemap() {
    const BaseURL = "https://front-farsi.vercel.app"

    const posts = await supabase.from("weblog").select("id,updated_at")
    //console.log(posts); 
    const postsMap = posts?.data.map((item) => { 
        const time = new Date(item.updated_at)
        return {
            url: `${BaseURL}/blog/${item.id}`,
            lastModified: time,
        }
    })
    return [
      {
        url: BaseURL,
        lastModified: new Date(),
      },
      {
        url: `${BaseURL}/blog`,
        lastModified: new Date(),
      },
      {
        url: `${BaseURL}/about-me`,
        lastModified: new Date(),
      },
      ...postsMap
    ]
  }