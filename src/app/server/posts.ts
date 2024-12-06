
import db from './db';


interface Post {
    id: string,
    body: string,
    title: string,
    creation_date: string
}


const createNewPost = async (postBody: string, postTitle: string) : Promise<boolean|string> =>  {

    try {
        
        const result = await db<Post[]>`INSERT INTO Posts VALUES(${postBody}, ${postTitle}, gen_random_uuid(), CURRENT_TIMESTAMP) RETURNING id`;

        return result[0].id;
    } catch(e) {
        console.error("[posts.ts::createNewPost] error with ", e);
    }
    return false;
}

const listLatestPosts = async () : Promise<Post[]|boolean> => {

    try {

        const result = await db<Post[]>`SELECT title, id FROM Posts ORDER BY creation_date DESC`;

        console.log("results: ", result);

        return result;
    } catch (e) {
        console.error("[posts.ts::listLatestPosts] failed with ", e);
    }
    return false;
}

const getPostById = async (id: string) : Promise<Post|boolean> => {

    try {

        const result = await db<Post[]>`SELECT creation_date, body, title FROM Posts WHERE id = ${id}`;

        return result?.[0];
    } catch (e) {
        console.error("[posts.ts::getPostById] failed with ", e);
    }
    
    return false;
} 

export { createNewPost, listLatestPosts, getPostById }