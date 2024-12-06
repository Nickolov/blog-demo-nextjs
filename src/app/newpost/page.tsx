
import '@/components/components.css';

import { redirect } from 'next/navigation'

import { createNewPost } from '@/server/posts';


export default () => {

    async function processPost(data: FormData) {
        'use server';

        const result = await createNewPost(data.get('post_title') as string, data.get('post_body') as string);

        if(result) {
            console.log("redirecting to: ", result);
            redirect("/viewpost/"+result);
        }
    }


    return <>
        <div>
            <form action={processPost}>
                <label htmlFor="post-title">Post title</label>
                <input  id="post-title" className="input-txt-1" type="text" name="post_title" />
                <label htmlFor="post-body">Post body</label>
                <textarea id="post-body" className="input-txt-1" name="post_body"  />
                <button>Cancel</button>
                <button type='submit' style={{ background: "#0022FF", borderRadius: "16px", padding: "10px", color: "white", fontWeight: 600}}>
                    Publish
                </button>
            </form>
        </div>

    </>
}