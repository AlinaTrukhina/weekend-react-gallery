-- database name: react_gallery

CREATE TABLE photos (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR (200) NOT NULL,
    "description" VARCHAR (500) NOT NULL,
    "likes" INT
);

INSERT INTO photos ("path", "description", "likes")
VALUES ('images/goat_small.jpg',
    'Photo of a goat taken at Glacier National Park.', 0),
    ('images/bwca001.jpg', 
    'Photo of the shore of Brule Lake in Boundary Waters Canoe Area',
    0),
    ('images/bwca002.jpg', 
    'Photo of sunrise on the shore of Brule Lake in Boundary Waters Canoe Area',
    0),
    ('images/bwca004.jpg', 
    'Foggy morning in Boundary Waters Canoe Area',
    0),
    ('images/Lake-profile-picture.jpg', 
    'Photo of the author kayaking on Cedar Lake',
    0),
    ('https://live.staticflickr.com/8173/8031293845_1694e2e48d_b.jpg',
    'My favorite bike',
    0)
    ;
