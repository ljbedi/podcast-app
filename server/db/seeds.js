use podcast_db;
db.dropDatabase();

db.podcasts.insertMany([
  {
    "uuid": "f9ef95c3-061e-4162-b122-7077bf8985b0",
        "name": "Men Who Talk",
        "description": "A Man's Perspective. Join us as we share and discuss some of our biggest challenges but also our biggest WINS! Men don't talk enough so this is our opportunity. ",
        "genres": [
          "Self Improvement",
          "Education"
        ],
        "itunesInfo": {
          "uuid": "f9ef95c3-061e-4162-b122-7077bf8985b0",
          "baseArtworkUrlOf": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/e4/36/81/e4368170-5e77-b289-9b6f-9a436e301e40/mza_8886635448311323595.jpg/640x640bb.png"
        }
      }  
]);

