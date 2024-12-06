
import db from './db';


interface user {
    username: String,
    userpass: String
};

const createUser = async (username: string, userpass: string) : Promise<Boolean> => {

    try {

        const result = await db<user[]>`INSERT INTO Users VALUES (${username}, ${userpass})`;

        return true;
    } catch(e) {
        console.error("[users.ts::createUser] failed with ", e);
    }
    return false;
}

