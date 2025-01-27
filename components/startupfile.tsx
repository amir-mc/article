 
import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";



import { Startup,Author } from "@/sanity/types";

export type Startupcard=Omit<Startup,"author">&{author?:Author}
const Sturtup=({post}:{post:Startupcard})=>{
const {_createdAt,view,image,author,description,_id,category,title}=post
    return(
        <>
        <li className="startup-card group">
            <div className="flex-between">
                <p className="stratup_card_date"> 
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                <EyeIcon className="size-6 "></EyeIcon>
                <span>{view}</span>
            </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                <Link href={`/users/${author?._id}`}>
                <p className="text-16-medium line-clamp-1">
                    {author?.name}
                </p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                    <h3 className="text-26-semibold line-clamp-1">
                        {title}
                    </h3>
                    </Link>

                </div>
                <Link href={`/users/${author?._id}`}>
                <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full"></Image>
                </Link>

            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">
                {description}
                </p>
                <Image width={200} height={200} src={image} alt="placeholder" className="startup-card_img"/>
             </Link>
                <div className="flex-between gap-3 mt-5">
                        <Link href={`/?query=${category?.toLowerCase()}`}>
                        <p className="text-16-medium">{category}</p>
                          </Link>

                        <Button className="startup-card_btn" asChild >
                                    <Link href={`/startup/${_id}`}>
                                details
                                </Link>
                        </Button>

                  
                </div>
        </li>
        </>
    )
}
export default Sturtup
