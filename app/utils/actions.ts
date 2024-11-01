"use server";
import { currentUser, getAuth , auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import db from './db'

const renderError = (error: unknown): { message: string } => {
  
    return {
      message: error instanceof Error ? error.message : "An error occured",
    };
  };




export const fetchAllPosts = async ({search = ''} : {search : string}) => {
    
    const allPosts = await db.post.findMany({
        where: {
            OR: [
                {title: {contains: search , mode: 'insensitive'}},
                {content: {contains: search , mode: 'insensitive'}},               
            ]
        },
        include: {
            category: true,
        },
       
        orderBy: {
            createdAt: "desc"
        }
        
    })
    return allPosts;

   
}
