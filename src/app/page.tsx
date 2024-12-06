import Image from "next/image";


import React from "react";
import { listLatestPosts, createNewPost  } from "@/server/posts";

import './home.css';

import Link from 'next/link'

// home page
export default async function Index() {

  
  
  const posts = await listLatestPosts();
  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {posts?.map((o: any) => {
          return <Link href={"/viewpost/" + o.id} style={{ background: "#E2E2E2", borderRadius: "24px", minWidth: "800px", minHeight: "150px"}}>
            
            <div className="card-cont">
              <div className="card-item-1">
                <span style={{fontWeight: 900, fontSize: "32px", color: "#3D3D3D"}}>{o.title}</span>
              </div>
              <div className="card-item-2"></div>
              <div className="card-item-3">
                <span style={{fontWeight: 600}}>Keep Reading {">"}</span>
              </div>
            </div>
          </Link>
        })}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Blog app
      </footer>
    </div>
  );
}
