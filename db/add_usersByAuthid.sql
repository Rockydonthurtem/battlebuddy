INSERT INTO users
    (name, authid, picture)
VALUES
    ($1, $2, $3);
SELECT *
FROM users
WHERE authid = $2;