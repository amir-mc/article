import { client } from "@/sanity/lib/client";
import { START_QUERY_BY_ID } from "@/sanity/lib/query";
import { notFound } from "next/navigation";

const Page = async({params}:{params:Promise<{id:string}>})=>{
    const id=(await params).id;
    const post=await client.fetch(START_QUERY_BY_ID,{id})
    if(!post)return notFound();
    return(
        
        <h1>
            {post.title }
        </h1>
    )
}
export default Page
