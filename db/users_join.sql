Select u.name, s.title, s.body, s.map_id, u.user_id
from story s
    inner join users u on s.user_id = u.user_id
