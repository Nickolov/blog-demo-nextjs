
CREATE TABLE Users(username TEXT PRIMARY KEY, userpass TEXT);

CREATE TABLE Posts(body TEXT, title TEXT, id UUID PRIMARY KEY, creation_date TIMESTAMP);

-- usage: 
-- INSERT INTO Posts VALUES ('Welcome to a new world!', 'some random title', gen_random_uuid(), CURRENT_TIMESTAMP);
