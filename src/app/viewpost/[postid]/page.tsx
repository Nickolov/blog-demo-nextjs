
import { getPostById } from '@/server/posts';



export default async ({params}: any) => {



    const post = await getPostById(params.postid);

    // router.query.postid


    return <>
        <div style={{ display: "flex", flexDirection: "column"}}>

            <div style={{fontWeight: 900}}>{post.title}</div>
            <div style={{fontWeight: 400, fontSize: "13px", color: "#3D3D3D"}}>{post.body}</div>
        </div>
    </>


}

