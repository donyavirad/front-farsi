import { supabase } from '@/app/db/supabase'
import React from 'react'
const fetchData = async () => {
    const response = await supabase.from("weblog").select().limit(3)
    return response
}
const LastArticleSidbar = async () => {
    const data = (await fetchData()).data
    console.log(data);
  return (
    <div>
        <div>
            <span>آخرین مقالات</span>
        </div>
        <div>
            {data.map((item) => (
                <div key={item.id} className='flex items-center'>
                    <img className='h-14 w-14 object-cover' src={item.imageArticle.link} alt={item.imageArticle.alt}/>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LastArticleSidbar