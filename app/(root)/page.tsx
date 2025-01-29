import { auth } from "@/auth";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { START_QUERY_BY_ID } from "@/sanity/lib/query";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const Page = async({params}:{params:Promise<{id:string}>})=>{
    const id=(await params).id;
    const post=await client.fetch(START_QUERY_BY_ID,{id})
    if(!post)return notFound();
    const { title, view, image, author,  category,  description, _createdAt, pitch}=post
    return(
        
     <>
     <section className="pink_container !min-h-[230px]">
        <p className="tag">
            {formatDate(post?._createdAt)}
        </p>
            <h1 className="heading">{title}</h1>
            <p className="sub-heading max-w-5xl">
                {description}

            </p>
     </section>
     <section className="section_container">
       <Image width={600} height={600} src={image} alt="placeholder" className="w-full h-auto rounded-xl"/>

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
            <div className="flex-between gap-5">
                <Link href={`/user/${author?._id}`} className="flex gap-2 item-center mb-3">
                <Image src={author.image} alt="auto" width={64} height={64}  className="rounded-full drop-shadow-lg "></Image>
            <div>
                   <p className="text-20-medium">
                {author.name}
            </p> <p className="text-20-medium !item-black-300">
                @{author.username}
            </p>
            </div>
         
             </Link>
             <p className="category-tag">{category}</p>
           </div> 
           <h3 className="text-30-bold">DETAILS</h3>
           <p className="mb-5 mt-2 flex-between">
            {pitch}
           </p>
        </div>
       
        
     </section>
     </>
    )
}
export default Page
