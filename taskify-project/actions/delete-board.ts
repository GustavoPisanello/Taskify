"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteBoard(id: string){
        await db.board.delete({
            where: {
              id  
            }
        });
    
        
  revalidatePath("/organization/org_2plXGQU1gLpVXfvr8WK22q8eBSb");
};

