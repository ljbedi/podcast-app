use podcast_db;
db.dropDatabase();

db.users.insertMany([
  {
    "_id": "64f9e83df031f764d901db2c",
    "name": "Bill",
    "subscribedPodcasts": [
  
    ]
  }
]);

db.podcasts.insertMany([
  {
    "podcastid": "350ea4fc-1d1f-4ba3-84e7-4d8f91843862",
    "name": "The Blindboy Podcast",
    "description": "Hosted by Blindboy, of the Rubberbandits. An eclectic podcast containing short fiction, interviews and comedy.<br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
    "genres": [
      "PODCASTSERIES_COMEDY",
      "PODCASTSERIES_ARTS",
      "PODCASTSERIES_SOCIETY_AND_CULTURE_PHILOSOPHY",
      "PODCASTSERIES_SOCIETY_AND_CULTURE"
    ],
    "itunesInfo": {
      "uuid": "350ea4fc-1d1f-4ba3-84e7-4d8f91843862",
      "baseArtworkUrlOf": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/30/76/04/3076048c-c7de-6978-f09f-570cd9155510/mza_6755848752936300066.jpg/640x640bb.png"
    }, 
    "episodes": [
      {
        "uuid": "037abf42-03e4-4bb8-8466-93a84dbb22b7",
        "name": "The Psychological impact of Poverty with Dr.Katriona O Sullivan",
        "description": "Dr. Katriona O Sullivan is a psychologist whose work centers around the impact of poverty on a person's development. She works towards improving access to education for marginalized people. Her memoir \"Poor\" charts her journey as a child who grew up in extreme poverty to eventually studying in Trinity college <br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/blindboy/e/64ee8ba80ead910011ab4a1b/media.mp3"
      },
      {
        "uuid": "0a409d93-18c8-48e9-aec1-7db3dc717517",
        "name": "The History of Brown Sauce and Door Handles",
        "description": "The History of Brown Sauce and Door Handles&nbsp;<br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/blindboy/e/64e555e7447d34001103f199/media.mp3"
      },
      {
        "uuid": "76913e04-0ba6-4ee9-8d59-701478ac75c9",
        "name": "The Mental Health of Adults who live with their Parents",
        "description": "A recent study found that 65% of Irish adults aged 25 to 35 live with their parents. I explore the impact of that on emotional wellbeing and identity <br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/blindboy/e/64dc144d22317600107879e3/media.mp3"
      },
      {
        "uuid": "ba801135-6f35-4784-91ba-8736b909d6f9",
        "name": "Mythology, Rewilding Forests and indigenous knowledge with Manchán Magan",
        "description": "Manchán Magan is a writer, documentary maker and folklorist. We speak about the relationship between Irish mythology and rewilding forests, as well as similarities between Irish Mythology and Aboriginal Australian Mythology <br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/blindboy/e/64d2dde647d894001176b8bb/media.mp3"
      },
      {
        "uuid": "550ba3b0-83e4-4ae8-8145-a2e3aff96d3e",
        "name": "Barbie and Mattel as Millennial Pavlovian Conditioning",
        "description": "How the deregulation of children's advertising in the 1980s conditioned millennials to have a positive emotional response to Mattel toys which temporarily soothes the anxiety of not feeling like a real adult. <br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/blindboy/e/64c997da1e273f00114c0cc8/media.mp3"
      }
    ]
  },  
  {
		"uuid": "0d191451-4acc-42ae-86f8-39eb3f6b5234",
		"name": "What's Upset You Now?",
		"description": "Seann Walsh and Paul McCaffrey moan for exactly 15 minutes about the things that infuriate everyone. What is wrong with everyone?!",
		"genres": [
			"PODCASTSERIES_COMEDY"
		],
    "itunesInfo": {
      "uuid": "0d191451-4acc-42ae-86f8-39eb3f6b5234",
      "baseArtworkUrlOf": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/49/50/56/495056c7-ca2c-0e0d-2cde-990509b163aa/mza_4807061494952023336.jpg/640x640bb.png"
    },
		"episodes": [
      {
        "uuid": "68bc04dc-819c-4760-84b9-d199e98563c7",
        "name": "S06 EP12: I Poured A Pint On Paul’s Head",
        "description": "<p>In this episode Seann Walsh and Paul Mccaffrey moan about their past Edinburgh festival experiences as they rejoice in the fact they are not doing the Fringe this August.</p><p><br></p><p>Be Sure to subscribe to our YouTube channel and WATCH this episode live in the studio</p><p>Youtube - https://www.youtube.com/channel/</p><p><br></p><p><br></p><p>And if you would like to hear the full 1 hour + episode head on over to https://www.patreon.com/wuyn where you can support the podcast and get access to full hour long episodes, New sections, Early access to ad free guest episodes, An opportunity to be on the podcast and much more!!</p><p><br></p><p>We have over 100 hours of extended episodes available exclusively to Patreon starting at just £3 a month so come and join the WUYN community</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://podcastchoices.com/adchoices\">podcastchoices.com/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/GLT9449598719.mp3?updated=1693255979"
      },
      {
        "uuid": "1d813702-b91b-4763-9357-a7c44af2dd0d",
        "name": "S06 EP11: Joe Bor",
        "description": "<p>S06E11 Joe Bor</p><p>In this episode Seann Walsh and Paul Mccaffrey are joined by Comedian &amp; Film maker Joe Bor to moan about Long films, Cinemas, Joe’s Mum’s massive cello &amp; summer holidays.</p><p><br></p><p>Please Subscribe, Rate &amp; Review</p><p><br></p><p>Make Sure To check out Joe’s new film The Oldest Comedy Club In Britain showing select theatres now.</p><p><br></p><p>Follow us on all our socials</p><p>Instagram - https://www.instagram.com/whatsupsetyounow/?hl=en Tik Tok - https://www.tiktok.com/@whatsupsetyounow</p><p>Youtube - https://www.youtube.com/channel/UCaxpHApCFQpOK_oUYm34jwg</p><p><br></p><p><br></p><p>And for those of you who said that 15 minutes was not enough head on over to www.patreon.com/wuyn where you can support the podcast and get access to full hour long episodes, New sections, Early access to ad free guest episodes, An opportunity to be on the podcast and much more!!”</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://podcastchoices.com/adchoices\">podcastchoices.com/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/GLT5325920178.mp3?updated=1693254783"
      },
      {
        "uuid": "01d60d0f-2e42-44e2-a125-7abb74109f5c",
        "name": "S06 E10: Bananas Are Not The Best When They’re Green",
        "description": "<p>In this episode Seann Walsh and Paul Mccaffrey moan about Paul’s festival gig in the rain and Seann’s social media nightmare</p><p><br></p><p>Be Sure to subscribe to our YouTube channel and WATCH this episode live in the studio</p><p>Youtube - https://www.youtube.com/channel/</p><p><br></p><p>And if you would like to hear the full 1 hour + episode head on over to https://www.patreon.com/wuyn where you can support the podcast and get access to full hour long episodes, New sections, Early access to ad free guest episodes, An opportunity to be on the podcast and much more!!</p><p><br></p><p>We have over 100 hours of extended episodes available exclusively to Patreon starting at just £3 a month so come and join the WUYN community.</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://podcastchoices.com/adchoices\">podcastchoices.com/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/GLT9399862997.mp3?updated=1692634692"
      },
      {
        "uuid": "04a90c0d-1214-41cc-ae6f-98a933b27580",
        "name": "S06 E09: Tom Speight",
        "description": "<p>S06E09 Tom Speight</p><p>In this episode Seann Walsh and Paul Mccaffrey are joined by Musician Tom Speight to moan about The word Latte, Being asked what you do, Voice notes &amp; The Merchants Of Banter.</p><p><br></p><p>Please Subscribe, Rate &amp; Review</p><p><br></p><p>Follow Tom on Instagram @tomspeightmusic or check out www.tomspeightmusic.com to get tickets to his shows and all music links.</p><p><br></p><p>Follow us on all our socials</p><p>Instagram - <a href=\"https://www.instagram.com/whatsupsetyounow/?hl=en\">HERE</a></p><p>Tik Tok - <a href=\"https://www.tiktok.com/@whatsupsetyounow\">HERE</a></p><p>Youtube - <a href=\"https://www.youtube.com/channel/UCaxpHApCFQpOK_oUYm34jwg\">HERE</a></p><p><br></p><p>And for those of you who said that 15 minutes was not enough head on over to www.patreon.com/wuyn where you can support the podcast and get access to full hour long episodes, New sections, Early access to ad free guest episodes, An opportunity to be on the podcast and much more!!</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://podcastchoices.com/adchoices\">podcastchoices.com/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/GLT8718832357.mp3?updated=1692634487"
      },
      {
        "uuid": "2c7dafab-c9d4-4a6e-91f6-f00745c3520e",
        "name": "S06 E08: I Got Runners Dick",
        "description": "<p>S06E08 - I Got Runners Dick</p><p><br></p><p>In this episode Seann Walsh and Paul Mccaffrey hear from YOU the listener and find out what’s irritating the British public this week.</p><p><br></p><p>Be Sure to subscribe to our YouTube channel and WATCH this episode live in the studio </p><p><br></p><p>Youtube - <a href=\"https://www.youtube.com/channel/\">https://www.youtube.com/channel/</a></p><p><br></p><p>And if you would like to hear the full 1 hour + episode head on over to <a href=\"https://www.patreon.com/wuyn\">https://www.patreon.com/wuyn</a> where you can support the podcast and get access to full hour long episodes, New sections, Early access to ad free guest episodes, An opportunity to be on the podcast and much more!! </p><p>We have over 100 hours of extended episodes available exclusively to Patreon starting at just £3 a month so come and join the WUYN community.</p><p><br></p><p><br></p><p>A 'Keep It Light Media' Production </p><p>Sales, advertising, and general enquiries: <strong>hello@keepitlightmedia.com</strong></p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://podcastchoices.com/adchoices\">podcastchoices.com/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/GLT7736417713.mp3?updated=1691412049"
      }
    ]
  },
  {
    "uuid": "d32fde1d-6932-440d-a184-551dc93824bc",
    "name": "Happy Place",
    "description": "Fearne Cotton talks to incredible people about life, love, loss, and everything in-between as she reveals what happiness means to them.<br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
    "genres": [
      "PODCASTSERIES_SOCIETY_AND_CULTURE_PERSONAL_JOURNALS",
      "PODCASTSERIES_SOCIETY_AND_CULTURE"
    ],
    "itunesInfo": {
      "uuid": "d32fde1d-6932-440d-a184-551dc93824bc",
      "baseArtworkUrlOf": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/a3/4a/cd/a34acd93-0d62-d887-912c-1fb2f56d9186/mza_11233568146127456141.jpg/640x640bb.png"
    },
    "episodes": [
      {
        "uuid": "2254a75e-0e12-4fa7-a0c9-0c11f3e301e6",
        "name": "Billy Porter",
        "description": "<p>Fabulousness and seriousness can co-exist. In fact performer Billy Porter is clear that it’s important that they do co-exist.&nbsp;</p><p>&nbsp;</p><p>In this chat with Fearne, Billy explains why he feels artists have an obligation to speak truth to power if they can, and together they explore why art in all its forms can be such a powerful medium for all of us when we feel we have something to say. Plus, he explains why his singing voice – his greatest gift – became his armour against an often cruel world.</p><p>&nbsp;</p><p>Billy’s single, Broke A Sweat, is out now.</p><br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/happy-place/e/64ef65637a1a380011944acf/media.mp3"
      },
      {
        "uuid": "bbdd99e0-d120-47df-9f43-a6732d2d952d",
        "name": "Ruby Wax",
        "description": "<p>Have you noticed yourself repeating negative patterns of behaviour throughout your life? Comedian and best-selling author Ruby Wax has become aware she was doing this in order to feel safe after a tumultuous childhood.</p><p>&nbsp;</p><p>In this chat with Fearne, Ruby acknowledges that her depression will most likely always come back, but working to understand it means she has the tools to cope a little better each time it does. They also talk about why it’s so important for mental health that we allow people to be multi-faceted humans.</p><p><strong>&nbsp;</strong></p><p>Ruby’s book, I’m Not As Well As I Thought I Was, is out now.</p><br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/happy-place/e/64a80f0245c3270011d0dd9d/media.mp3"
      },
      {
        "uuid": "79622c34-a2ea-48f4-a47b-90e1eed089c7",
        "name": "Tom and Giovanna Fletcher",
        "description": "<p>How many times have you looked at a couple and labelled them ‘goals’? Couple goals is a phrase Tom and Giovanna Fletcher are keen to steer clear of, because they acknowledge all relationships go through their highs and lows, and that’s ok.</p><p>&nbsp;</p><p>In this chat with Fearne, live from the Happy Place Festival in Chiswick, Tom and Gi explain how they manage family time alongside thriving creative careers, as well as why it’s so important to be aware of your own difficult behaviours in a relationship. Plus Fearne reveals how Tom played a big part in helping her speak about her own mental health.</p><br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/happy-place/e/64c3c1358ad4d400113c8606/media.mp3"
      },
      {
        "uuid": "19f90f4b-2f58-4692-b2b7-5a17d75746e6",
        "name": "Tan France",
        "description": "<p>If outward accomplishment is coupled with great internal distress, is that really success? It’s a question Tan France had to ask himself when his business was doing brilliantly, but his mental health wasn’t.</p><p>&nbsp;</p><p>In this chat, Fearne and Tan swap thoughts about the realities of having a new born baby, and why it’s so important to establish what marriage means to you before you get married. They also chat about the power of using clothes to express creativity and identity.</p><p>&nbsp;</p><p>You can watch Tan on all-new Say Yes To The Dress UK on Really from the 16th of August, and can catch up on Discovery+.</p><p>&nbsp;</p><p>This interview took place prior to the 2023 SAG-AFTRA strike.</p><p><strong>&nbsp;</strong></p><p>CONTENT WARNING: This episode contains frank conversation about suicidal ideation, so do take care while listening.</p><br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/happy-place/e/64c3c0f26624ec00117472e8/media.mp3"
      },
      {
        "uuid": "a395e6f3-fb88-4b9e-a0af-81358a4f85c6",
        "name": "Tom Grennan",
        "description": "<p>More exercise, more therapy, and less alcohol: these are some of the things artist Tom Grennan knows he needs in order to stay mentally well.</p><p>&nbsp;</p><p>In this chat with Fearne, live from the Happy Place Festival in Chiswick, Tom explains how he’s learnt to ‘flip’ negative thoughts to positive ones using small language changes. They also share how anxiety manifests for each of them – from crying to trouble sleeping. Plus, how has Tom’s mum affected the way he interacts with crowds at his gigs?</p><p>&nbsp;</p><p>Tom’s album, What Ifs and Maybes, is out now.</p><p><strong>&nbsp;</strong></p><br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/happy-place/e/64c3c0b2dc471e00117fdb2c/media.mp3"
      }
    ]
  },

  {
    "uuid": "1e4b9b44-c5a5-4776-a488-5ea295070fcb",
    "name": "Vibe Check",
    "description": "A podcast by 2 brown girls from the suburbs of Chicago",
    "genres": [
      "PODCASTSERIES_NEWS"
    ],
    "itunesInfo": {
      "uuid": "1e4b9b44-c5a5-4776-a488-5ea295070fcb",
      "baseArtworkUrlOf": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/2e/14/87/2e1487b2-fae1-51d0-004a-a55a3a45561d/mza_4547655494513877062.jpg/640x640bb.png"
    },
    "episodes": [
      {
        "uuid": "54f5fe22-0cec-4f8e-b72b-54bee40bf7d7",
        "name": "No Freedom 'Til We're Equal",
        "description": "",
        "audioUrl": "https://mcdn.podbean.com/mf/web/7809g4/Episode_4-BLM_a9yqv.mp3"
      },
      {
        "uuid": "b33331d7-b501-451c-93f9-f6ede0fdfcf1",
        "name": "We're Just Being Blunt",
        "description": "",
        "audioUrl": "https://mcdn.podbean.com/mf/web/7rrmeg/episode_3_edited_version_bfznk.mp3"
      },
      {
        "uuid": "7ddc425c-a9d2-46a9-8a38-f5ffc04a3973",
        "name": "#RacismIsAVirus",
        "description": "<p>In this episode, we discuss the unfortunate impacts of COVID-19 on Asian Americans.</p>\n",
        "audioUrl": "https://mcdn.podbean.com/mf/web/h5y4yb/Episode2Full.mp3"
      },
      {
        "uuid": "8b73fae3-dd70-4e2d-9678-195dad3695dd",
        "name": "COVID-19 ain't it, chief",
        "description": "<p>Episode 1: We discuss COVID-19 and its impact on us and our community.</p>\n",
        "audioUrl": "https://mcdn.podbean.com/mf/web/exvfbk/Episode_1.mp3"
      }
    ]
  },

  {
    "uuid": "675cbcee-a02d-42e1-9fb8-df81d4030431",
    "name": "Talk Art",
    "description": "Actor Russell Tovey and gallerist Robert Diament host Talk Art, a podcast dedicated to the world of art featuring exclusive interviews with leading artists, curators &amp; gallerists, and even occasionally their talented friends from other industries like acting, music and journalism. Listen in to explore the magic of art and why it connects us all in such fantastic ways.&nbsp;Follow the official Instagram @TalkArt for images of artworks discussed in each episode and to follow Russell and Robert's latest art adventures.<br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>",
    "genres": [
      "PODCASTSERIES_ARTS",
      "PODCASTSERIES_ARTS_VISUAL_ARTS"
    ],
    "itunesInfo": {
      "uuid": "675cbcee-a02d-42e1-9fb8-df81d4030431",
      "baseArtworkUrlOf": "https://is4-ssl.mzstatic.com/image/thumb/Podcasts126/v4/a8/a3/09/a8a309c7-6670-cdd3-85b8-e6c8504ccc77/mza_18440349357499617051.jpg/640x640bb.png"
    },
    "episodes": [
      {
        "uuid": "5f8dc406-ac33-4f04-9f53-ba2846a215a4",
        "name": "Oliver Hemsley (Live at TKE Studios, Margate)",
        "description": "<p>Talk Art Live with Oliver Hemsley!!! Season 17 FINALE!!! For our second interview with artist Oliver Hemsley, we meet within his debut exhibition at TKE Studios, Margate - the artist studio complex and gallery founded by Tracey Emin. ",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/talkart/e/64f0ef6419942d0012ee0419/media.mp3"
      },
      {
        "uuid": "cea610c1-4bd0-4e9a-91c5-d5a75db6a76f",
        "name": "Victoria Cantons",
        "description": "<p>We meet leading artist Victoria Cantons from her London studios!!! We discuss her autobiographical as well as confessional work. Cantons presents a record of trauma and healing, alongside a rigorous inquiry into the social constraints surrounding gender politics.",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/talkart/e/64e72b69b9d5330011a0eb15/media.mp3"
      },
      {
        "uuid": "71f03bc6-7840-41ce-ad1d-7ee45719d61d",
        "name": "Rene Matić",
        "description": "<p>We meet leading artist RENE MATIĆ to discuss current solo exhibition ‘A Girl For The Living Room’ at Martin Parr Foundation, Bristol. This episode includes a special moment with living legend, and focus of Rene’s new show, TRAVIS ALABANZA. ",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/talkart/e/64db5afc73cfc000115186b9/media.mp3"
      },
      {
        "uuid": "464b6b3f-d96c-4b5e-b551-c585afb19c88",
        "name": "Rana Begum",
        "description": "<p>We meet leading artist Rana Begum to discuss her new public art flag display on London's Piccadilly in collaboration with the Royal Academy of Arts and Art of London. We also explore her incredible current solo exhibition at The Box in Plymouth titled 'Dappled Light'.",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/talkart/e/64d4b28855d5860011f881f7/media.mp3"
      },
      {
        "uuid": "dc2197bf-a4af-4fce-8ea9-4228ee3ee0bc",
        "name": "David Remfry MBE",
        "description": "<p>We meet renowned British painter&nbsp;and artist David Remfry MBE RA RWS, to discuss curating/coordinating this year's RA Summer Exhibition, working with watercolour, more than 5 decades of art making, and what it was like to live in New York's iconic Hotel Chelsea for 20 years!!!",
        "audioUrl": "https://sphinx.acast.com/p/acast/s/talkart/e/64cc29a9da2e210011215480/media.mp3"
      }
    ]
  },

  {
    "uuid": "c5dc3a85-854a-4744-83d6-af70720a67d7",
    "name": "Behind the Bastards",
    "description": "There’s a reason the History Channel has produced hundreds of documentaries about Hitler but only a few about Dwight D. Eisenhower. Bad guys (and gals) are eternally fascinating. Behind the Bastards dives in past the Cliffs Notes of the worst humans in history and exposes the bizarre realities of their lives. Listeners will learn about the young adult novels that helped Hitler form his monstrous ideology, the founder of Blackwater’s insane quest to build his own Air Force, the bizarre lives of the sons and daughters of dictators and Saddam Hussein’s side career as a trashy romance novelist.",
    "genres": [
      "PODCASTSERIES_SOCIETY_AND_CULTURE",
      "PODCASTSERIES_HISTORY",
      "PODCASTSERIES_NEWS"
    ],
    "itunesInfo": {
      "uuid": "c5dc3a85-854a-4744-83d6-af70720a67d7",
      "baseArtworkUrlOf": "https://is5-ssl.mzstatic.com/image/thumb/Podcasts126/v4/64/7d/c5/647dc577-ba59-988a-35e6-e8dfc9370646/mza_13814725282686803098.jpeg/640x640bb.png"
    }, "episodes": [
      {
        "uuid": "d8df4259-f7e1-4a40-a904-d64fa23252f3",
        "name": "Part One: The 12 Tribes: The Worst Cult You've Never Heard Of",
        "description": "<p>Robert is joined by Alex Steed to discuss The 12 Tribes cult.</p>\n<p>(2 Part Series)</p><p>See <a href=\"https://omnystudio.com/listener\">omnystudio.com/listener</a> for privacy information.</p>",
        "audioUrl": "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/e5f91208-cc7e-4726-a312-ae280140ad11/dec6579e-ed38-4bdf-acc3-b070002dbeb3/audio.mp3?utm_source=Podcast&in_playlist=d64f756d-6d5e-4fae-b24f-ae280140ad36"
      },
      {
        "uuid": "6a82be08-426e-4d0a-934e-cf6c4b3646e9",
        "name": "It Could Happen Here Weekly 98",
        "description": "<p>All of this week's episodes of It Could Happen Here put together in one large file</p>\n<p>You can now listen to all Cool Zone Media shows, 100% ad-free through the Cooler Zone Media subscription, available exclusively on Apple Podcasts. So, open your Apple Podcasts app, search for “Cooler Zone Media” and subscribe today!</p>\n<p><a href=\"http://apple.co/coolerzone\">http://apple.co/coolerzone</a> </p><p>See <a href=\"https://omnystudio.com/listener\">omnystudio.com/listener</a> for privacy information.</p>",
        "audioUrl": "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/78d30acb-8463-4c40-a5ae-ae2d0145c9ff/8235416c-b0fd-47f6-96e7-b071001ceed7/audio.mp3?utm_source=Podcast&in_playlist=d64f756d-6d5e-4fae-b24f-ae280140ad36"
      },
      {
        "uuid": "88922ce5-60dd-4dd8-99ac-2210c1805ec1",
        "name": "Part Two: Behind the Swastika",
        "description": "<p>Robert is joined again by Chelsey Weber-Smith to continue to discuss the secret history of the Swastika.</p><p>See <a href=\"https://omnystudio.com/listener\">omnystudio.com/listener</a> for privacy information.</p>",
        "audioUrl": "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/e5f91208-cc7e-4726-a312-ae280140ad11/2e145345-7114-4d70-9e26-b06f0020b8d4/audio.mp3?utm_source=Podcast&in_playlist=d64f756d-6d5e-4fae-b24f-ae280140ad36"
      },
      {
        "uuid": "142e516a-eb3f-4bd8-8626-0b8ae0983c9f",
        "name": "Part One: Behind the Swastika",
        "description": "<p>Robert and Chelsey Weber-Smith discuss the surprisingly ancient history of the Swastika, and how it was a part of everyone before the Nazis stole it.</p>\n<p>(2 part series)</p><p>See <a href=\"https://omnystudio.com/listener\">omnystudio.com/listener</a> for privacy information.</p>",
        "audioUrl": "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/e5f91208-cc7e-4726-a312-ae280140ad11/de27df0a-c541-44cf-a121-b06d0061345f/audio.mp3?utm_source=Podcast&in_playlist=d64f756d-6d5e-4fae-b24f-ae280140ad36"
      },
      {
        "uuid": "b100dee1-9a07-404f-bbcc-01a461bd0c38",
        "name": "It Could Happen Here Weekly 97",
        "description": "<p>All of this week's episodes of It Could Happen Here put together in one large file</p>\n<p>You can now listen to all Cool Zone Media shows, 100% ad-free through the Cooler Zone Media subscription, available exclusively on Apple Podcasts. So, open your Apple Podcasts app, search for “Cooler Zone Media” and subscribe today!</p>\n<p><a href=\"http://apple.co/coolerzone\">http://apple.co/coolerzone</a> </p><p>See <a href=\"https://omnystudio.com/listener\">omnystudio.com/listener</a> for privacy information.</p>",
        "audioUrl": "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/78d30acb-8463-4c40-a5ae-ae2d0145c9ff/a9628606-4d2b-4369-970c-b068018a7781/audio.mp3?utm_source=Podcast&in_playlist=d64f756d-6d5e-4fae-b24f-ae280140ad36"
      }
    ]
  },

  {
    "uuid": "eb5ce9e2-aba4-4754-ad6a-b65926aea8f6",
    "name": "The Awardist",
    "description": "Turn on your TVs, it's EMMYS season!! Join me, EW's executive editor Gerrad Hall and other TV obsessed, opinionated EW staffers as we track the winding road to TV’s biggest night. We’ll keep track of all the gasp-worthy moments, break down unforgettable scenes in exclusive interviews with the stars themselves, and make our predictions for who will walk away with a coveted statuette. Will we pick right? Follow along with The Awardist Mondays starting April 10th, 2023 wherever you get your podcasts and be sure to check out ew.com/awardist for more Emmys content.",
    "genres": [
      "PODCASTSERIES_TV_AND_FILM",
      "PODCASTSERIES_ARTS_PERFORMING_ARTS",
      "PODCASTSERIES_ARTS"
    ],
    "itunesInfo": {
      "uuid": "eb5ce9e2-aba4-4754-ad6a-b65926aea8f6",
      "baseArtworkUrlOf": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6b/02/16/6b021630-b5e0-577f-8cf1-6468ec3165e7/mza_44527780397635753.jpeg/640x640bb.png"
    },
    "episodes": [
      {
        "uuid": "431f2e5d-8edb-46bf-89eb-5c9585a3e254",
        "name": "Inside best drama category, The Last of Us showrunner Craig Mazin",
        "description": "<p>The Last of Us showrunner Craig Mazin looks back on the hit first season of the HBO drama starring Pedro Pascal and Bella Ramsey — he also dives into some of the show's many Easter eggs and fills us in on where things stand with season 2. Plus, EW Editor in Chief Patrick Gomez and Sr. Editor Nick Romano break down the chances for The Last of Us and The White Lotus to beat frontrunner Succession.</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://megaphone.fm/adchoices\">megaphone.fm/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/MERE4703164239.mp3?updated=1693197721"
      },
      {
        "uuid": "db043834-5c8c-4388-9144-465bfb2811eb",
        "name": "Top Chef host Padma Lakshmi, and inside the reality categories",
        "description": "<p>Will RuPaul's Drag Race reclaim the reality competition crown or can Survivor or Top Chef win? We break down that category, as well as structured and unstructured reality, and reality/competition host, where our guest, Top Chef's Padma Lakshmi is nominated for her final season. She tells us about saying goodbye, the evolution of the show during her 19 seasons there, and her other nominated series, Taste the Nation.</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://megaphone.fm/adchoices\">megaphone.fm/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/MERE3780345131.mp3?updated=1692570490"
      },
      {
        "uuid": "bc807e80-258f-4939-be70-8b34c9caba7f",
        "name": "Drama, Limited Series Actor/Actress, plus Jessica Chastain",
        "description": "<p>'George &amp; Tammy' star Jessica Chastain (in an interview conducted prior to the start of the SAG-AFTA strike) explains her 10-year journey with the project and reveals the scenes that scared her the most and why she still gets emotional thinking about Tammy Wynette. Plus, Awardist host Gerrad Hall and EW critic Kristen Baldwin break down the drama and limited series lead actor and actress categories.</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://megaphone.fm/adchoices\">megaphone.fm/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/MERE2113112785.mp3?updated=1692048235"
      },
      {
        "uuid": "0f6e2fe7-d6f3-446b-9eb1-8f2ac55c730e",
        "name": "Dahmer star Niecy Nash-Betts, plus Limited Series and supporting categories",
        "description": "<p>Dahmer star Niecy Nash-Betts breaks down some of her pivotal and heartbreaking moments in the Netflix limited series (in an interview conducted prior to the start of the SAG-AFTRA strike) — plus she explains the leap she made into drama, why she was happy to film Dahmer and Reno 911 at the same time, and more. Plus, we break down the Limited/Anthology Series race, as well as the drama and limited supporting actor and actress categories.</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://megaphone.fm/adchoices\">megaphone.fm/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/MERE9938182382.mp3?updated=1691976671"
      },
      {
        "uuid": "26cb92cb-1be6-42fc-aa50-ad8e1ae6f052",
        "name": "Emmys postponed, Best Comedy Series predictions, Jury Duty showrunner Cody Heller",
        "description": "<p>Will Ted Lasso three-peat as best comedy series Emmy winner or will it be The Bear? Maybe something else, like surprise (and beloved) nominee Jury Duty? Awardist host Gerrad Hall, EW editor in chief Patrick Gomez, and Sr. TV Editor Samantha Highfill debated that category, as well as supporting comedy actor. Plus, Jury Duty showrunner Cody Heller reveals how they were really able to pull off the show's big ruse — and when they thought they had blown it. And we discuss the latest on the SAG-AFTRA and WGA strikes, including the now postponed 2023 Emmy Awards.</p><p> </p><p>Learn more about your ad choices. Visit <a href=\"https://megaphone.fm/adchoices\">megaphone.fm/adchoices</a></p>",
        "audioUrl": "https://traffic.megaphone.fm/MERE6438373535.mp3?updated=1690774840"
      }
    ]
  },

  {
    "uuid": "437b3e05-05e8-4723-aa4d-8933df7c9925",
    "name": "You're Wrong About",
    "description": "Sarah is a journalist obsessed with the past. Every week she reconsiders a person or event that's been miscast in the public imagination.",
    "genres": [
      "PODCASTSERIES_HISTORY",
      "PODCASTSERIES_TRUE_CRIME",
      "PODCASTSERIES_SOCIETY_AND_CULTURE"
    ],
    "itunesInfo": {
      "uuid": "437b3e05-05e8-4723-aa4d-8933df7c9925",
      "baseArtworkUrlOf": "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/53/e1/1e/53e11e12-2ca3-cbab-99fd-2612f0b3ea57/mza_4639382026422879476.jpg/640x640bb.png"
    },
    "episodes": [
      {
        "uuid": "bbc801a7-db5b-4ebb-9440-8566d499a7fa",
        "name": "The Most Normal Girl in Cleveland with Heather Radke",
        "description": "<p>This week, Heather Radke brings us a tale of pageants, eugenics, and butts.<br/><br/><b>You can find Heather</b><a href='http://www.heatherradke.com/'><b> online here.</b></a><b><br/><br/>You can see </b><a href='https://th-thumbnailer.cdn-si-edu.com/SVwzl8LGJyzqv5oGbKvYcpOlS6o=/800x0/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Norma-Normman-Anatomical-Museum-7.jpg'><b>Norma/Norman here</b></a><b>. <br/><br/>More on the </b><a href='https://tacomahistory.live/2018/07/19/better-babies/'><b>Better Babies Pageants</b></a><b>. </b></p><p><b>Support You&apos;re Wrong About:<br/><br/></b><a href='https://www.patreon.com/yourewrongabout'>Bonus Episodes on Patreon</a><br/><a href='https://www.teepublic.com/stores/youre-wrong-about'>Buy cute merch</a><br/><br/><b>Where else to find us:<br/><br/></b>Sarah&apos;s other show, <a href='https://www.podpage.com/you-are-good/'>You Are Good</a><br/>[YWA co-founder] Mike&apos;s other show, <a href='http://maintenancephase.com/'>Maintenance Phase</a><br/><br/><b>Links:<br/><br/></b>http://www.heatherradke.com/<br/>http://patreon.com/yourewrongabout<br/>https://www.teepublic.com/stores/youre-wrong-about<br/>https://www.paypal.com/paypalme/yourewrongaboutpod<br/>https://www.podpage.com/you-are-good<br/>http://maintenancephase.com</p><a rel=\"payment\" href=\"http://patreon.com/yourewrongabout\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1112270/13444596-the-most-normal-girl-in-cleveland-with-heather-radke.mp3"
      },
      {
        "uuid": "2016fa67-c3d6-4593-b931-0ec2c19a4371",
        "name": "The Cottingley Fairies with Chelsey Weber-Smith",
        "description": "<p>This week, Sarah tells her favorite kind of story to American Hysteria’s Chelsey Weber-Smith: one where two girls hoaxed the world without trying very hard.<br/><br/><b>You can find Chelsey + American Hysteria</b><a href='https://www.chelseywebersmith.com/'><b> online here.</b></a><b> <br/><br/></b><a href='https://carolynkendrick.bandcamp.com/track/lullaby'><b>Buy ‘Lullaby’ on Bandcamp here</b></a><b>. </b></p><p><b>Support You&apos;re Wrong About:<br/><br/></b><a href='https://www.patreon.com/yourewrongabout'>Bonus Episodes on Patreon</a><br/><a href='https://www.teepublic.com/stores/youre-wrong-about'>Buy cute merch</a><br/><br/><b>Where else to find us:<br/><br/></b>Sarah&apos;s other show, <a href='https://www.podpage.com/you-are-good/'>You Are Good</a><br/>[YWA co-founder] Mike&apos;s other show, <a href='http://maintenancephase.com/'>Maintenance Phase</a><br/><br/><b>Links:<br/><br/></b>https://www.chelseywebersmith.com/<br/>http://patreon.com/yourewrongabout<br/>https://www.teepublic.com/stores/youre-wrong-about<br/>https://www.paypal.com/paypalme/yourewrongaboutpod<br/>https://www.podpage.com/you-are-good<br/>http://maintenancephase.com</p><a rel=\"payment\" href=\"http://patreon.com/yourewrongabout\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1112270/13365138-the-cottingley-fairies-with-chelsey-weber-smith.mp3"
      },
      {
        "uuid": "5f491b03-b940-43de-99ee-44befc4697ec",
        "name": "Bonnie and Clyde (and Blanche and Buck) with Jamie Loftus",
        "description": "<p>“Why don’t something happen?” Bonnie Parker and Clyde Barrow died in 1934, but their legend gets bigger every year. This week, Jamie Loftus brings us back to reality with a tale of prison breaks, FBI malfeasance, love, guitars, and hot dog breakfasts.<br/><br/><b>You can find Jamie</b><a href='http://www.jamieloftus.xyz/'><b> online here.</b></a><b> </b></p><p><b>Support You&apos;re Wrong About:<br/><br/></b><a href='https://www.patreon.com/yourewrongabout'>Bonus Episodes on Patreon</a><br/><a href='https://www.teepublic.com/stores/youre-wrong-about'>Buy cute merch</a><br/><br/><b>Where else to find us:<br/><br/></b>Sarah&apos;s other show, <a href='https://www.podpage.com/you-are-good/'>You Are Good</a><br/>[YWA co-founder] Mike&apos;s other show, <a href='http://maintenancephase.com/'>Maintenance Phase</a><br/><br/><b>Links:<br/><br/></b>http://www.jamieloftus.xyz/<br/>http://patreon.com/yourewrongabout<br/>https://www.teepublic.com/stores/youre-wrong-about<br/>https://www.paypal.com/paypalme/yourewrongaboutpod<br/>https://www.podpage.com/you-are-good<br/>http://maintenancephase.com</p><a rel=\"payment\" href=\"http://patreon.com/yourewrongabout\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1112270/13237906-bonnie-and-clyde-and-blanche-and-buck-with-jamie-loftus.mp3"
      },
      {
        "uuid": "110e187c-4b3d-4358-a527-752093c29268",
        "name": "Fleetwood Mac's Rumours with Carolyn Kendrick",
        "description": "<p>This week, we bring you a re-release from our bonus vault as Sarah tells Carolyn Kendrick about the making of Fleetwood Mac’s Rumours. We learn about the worlds of songwriting and production, how the music business has changed since the 1970’s, and of course all the interpersonal relationships that make us love to love this band. <br/><br/>We will be back next week with a new episode. <br/><br/><b>You can find Carolyn</b><a href='https://juliekliegman.com/'><b> </b></a><a href='https://www.carolynkendrick.com/'><b>online here.</b></a><b> </b></p><p><b>Support You&apos;re Wrong About:<br/><br/></b><a href='https://www.patreon.com/yourewrongabout'>Bonus Episodes on Patreon</a><br/><a href='https://www.teepublic.com/stores/youre-wrong-about'>Buy cute merch</a><br/><br/><b>Where else to find us:<br/><br/></b>Sarah&apos;s other show, <a href='https://www.podpage.com/you-are-good/'>You Are Good</a><br/>[YWA co-founder] Mike&apos;s other show, <a href='http://maintenancephase.com/'>Maintenance Phase</a><br/><br/><b>Links:<br/><br/></b>https://www.carolynkendrick.com/<br/>http://patreon.com/yourewrongabout<br/>https://www.teepublic.com/stores/youre-wrong-about<br/>https://www.paypal.com/paypalme/yourewrongaboutpod<br/>https://www.podpage.com/you-are-good<br/>http://maintenancephase.com</p><p><br/></p><p><br/><br/><br/></p><a rel=\"payment\" href=\"http://patreon.com/yourewrongabout\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1112270/13204614-fleetwood-mac-s-rumours-with-carolyn-kendrick.mp3"
      },
      {
        "uuid": "928a7ee7-327c-4a1a-a309-752293f44b3a",
        "name": "Renée Richards with Julie Kliegman",
        "description": "<p>This week, Sports Illustrated’s Julie Kliegman volleys with Sarah about trans athlete Renée Richards’s fight for her right to play in the U.S. Open. They also dig into how the dialogue surrounding trans athletes has and hasn’t changed in the 40-plus years since. Plus, are tennis balls hollow? An investigation.<br/><br/><b>You can find </b><a href='https://juliekliegman.com/'><b>Julie online here</b></a><b>. </b></p><p><b>Support You&apos;re Wrong About:<br/><br/></b><a href='https://www.patreon.com/yourewrongabout'>Bonus Episodes on Patreon</a><br/><a href='https://www.teepublic.com/stores/youre-wrong-about'>Buy cute merch</a><br/><br/><b>Where else to find us:<br/><br/></b>Sarah&apos;s other show, <a href='https://www.podpage.com/you-are-good/'>You Are Good</a><br/>[YWA co-founder] Mike&apos;s other show, <a href='http://maintenancephase.com/'>Maintenance Phase</a><br/><br/><b>Links:<br/><br/></b>https://juliekliegman.com/<br/>http://patreon.com/yourewrongabout<br/>https://www.teepublic.com/stores/youre-wrong-about<br/>https://www.paypal.com/paypalme/yourewrongaboutpod<br/>https://www.podpage.com/you-are-good<br/>http://maintenancephase.com</p><p><a href='http://patreon.com/yourewrongabout'>Support the show</a></p><a rel=\"payment\" href=\"http://patreon.com/yourewrongabout\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1112270/13113483-renee-richards-with-julie-kliegman.mp3"
      }
    ]
  },

  {
		"uuid": "abccdd6c-092d-4cc8-bc24-9311e740e9ed",
		"name": "Some Laugh",
		"description": "Scottish comedians Marc Jennings, Stephen Buchanan and Stuart McPherson have some laugh - or at least some laughs - on a weekly basis, discussing topics big and small - while joined by guests from the world of comedy. Video versions of every episode are available on YouTube: https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA",
		"genres": [
			"PODCASTSERIES_COMEDY",
			"PODCASTSERIES_COMEDY_STANDUP",
			"PODCASTSERIES_COMEDY_INTERVIEWS"
		],
		"itunesInfo": {
			"uuid": "abccdd6c-092d-4cc8-bc24-9311e740e9ed",
			"baseArtworkUrlOf": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/55/14/32/55143257-f6d9-c036-67f4-b2669a552dc8/mza_17060295518685000662.jpg/640x640bb.png"
		}, 
    "episodes": [
      {
        "uuid": "b1de9e86-665d-4483-87ee-da798bc6ec22",
        "name": "Episode 68: Spoiling the Sixth Sense with Jack Docherty",
        "description": "<p>See Some Laugh Live In London Saturday 9th September.  Tickets here: <a href='https://www.kingsplace.co.uk/whats-on/words/some-laugh/'>https://www.kingsplace.co.uk/whats-on/words/some-laugh/</a><br/><br/>This week Stu and Marc are joined in Edinburgh by “Absolutely” and Scot Squad star Jack Docherty.  After a 25-year break from the Fringe, Jack compares the modern festival to the halcyon days of the 1980’s, discusses his time presenting both his own US-style chat show (interviewing the likes of David Bowie &amp; The Spice Girls) and the BAFTAs (where a risky opening joke had the star-studded audience turn on him immediately).  With a wrap sheet as long as your arm, the writer/actor/presenter/producer Docherty rhymes off plenty of great showbiz stories, chats writing on the likes of Spitting Image and Vic &amp; Bob, and how he’s found a return to performing, both at the Fringe and on BBC Scotland’s Scot Squad (alongside a certain Mr McPherson).<br/><br/>A video version of this podcast is available on YouTube, where you can subscribe for all future episodes: <a href='https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA'>https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA</a><br/><br/>We&apos;re now on Patreon!  Sign up for exclusive access for as little as £3 per month:<br/><a href='https://www.patreon.com/somelaugh'>https://www.patreon.com/somelaugh<br/></a><br/>You can follow Some Laugh on Instagram, Twitter and TikTok - and please remember to leave a 5 star review!</p><a rel=\"payment\" href=\"https://www.patreon.com/somelaugh\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1983176/13456350-episode-68-spoiling-the-sixth-sense-with-jack-docherty.mp3"
      },
      {
        "uuid": "c8dc843d-4240-4c45-b36d-983bea96d64c",
        "name": "Episode 67: Radical Honesty with Tamsyn Kelly",
        "description": "<p>See Some Laugh Live In London Saturday 9th September.  Tickets here: <a href='https://www.kingsplace.co.uk/whats-on/words/some-laugh/'>https://www.kingsplace.co.uk/whats-on/words/some-laugh/</a><br/><br/>This week the boays are joined by comedian Tamsyn Kelly.  Cornish and proud of it, Tamsyn discusses the merits of the South West county, the Cornish independent movement and why she believes confrontation gets a bad rap.  Plus, there’s chat of stealing, hecklers, jury duty, Mr Blobby - and a certain C. Macarthur-Boyd makes a cameo after wandering into the flat mid-recording.<br/><br/>A video version of this podcast is available on YouTube, where you can subscribe for all future episodes: <a href='https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA'>https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA</a><br/><br/>Tamsyn is performing her debut hour &quot;Crying in TK Maxx&quot; at the Edinburgh Fringe.  Tickets available here:  <a href='https://tickets.edfringe.com/whats-on/tamsyn-kelly-crying-in-tk-maxx'>https://tickets.edfringe.com/whats-on/tamsyn-kelly-crying-in-tk-maxx</a><br/><br/>We&apos;re now on Patreon!  Sign up for exclusive access for as little as £3 per month:<br/><a href='https://www.patreon.com/somelaugh'>https://www.patreon.com/somelaugh<br/></a><br/>Tickets for all three of the boays&apos; Edinburgh Fringe shows in August are ON SALE NOW!<br/>Marc (Extra Show 25th August 9PM): <a href='https://tickets.edfringe.com/whats-on/marc-jennings-away-from-here-1'>https://tickets.edfringe.com/whats-on/marc-jennings-away-from-here-1</a><br/>Stu: <a href='https://tickets.edfringe.com/whats-on/stuart-mcpherson-love-that-for-me'>https://tickets.edfringe.com/whats-on/stuart-mcpherson-love-that-for-me</a><br/>Steve: <a href='https://tickets.edfringe.com/whats-on/stephen-buchanan-charicature'>https://tickets.edfringe.com/whats-on/stephen-buchanan-charicature<br/></a><br/>You can follow Some Laugh on Instagram, Twitter and TikTok - and please remember to leave a 5 star review!</p><a rel=\"payment\" href=\"https://www.patreon.com/somelaugh\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1983176/13450369-episode-67-radical-honesty-with-tamsyn-kelly.mp3"
      },
      {
        "uuid": "d996ae18-ffb1-4af9-908a-a1b02940f189",
        "name": "Episode 66: The Great Blue with Tatty MacLeod",
        "description": "<p>The boays come to you from Monkey Barrel Studio in Edinburgh this week, where they&apos;re joined by comedian Tatty MacLeod.  A bilingual English-French comic, they discuss why Tatty has one of the most Scottish names possible, her claims to actual Scottish heritage and how a weekend at the Glasgow Glee Club gave her a crash course in Scottish-English relations.   Plus, Tatty describes her decision to switch a background in acting &amp; improv for stand-up, translating her viral online videos to the stage, and explains what she sees as the main difference between British and French culture.<br/><br/>A video version of this podcast is available on YouTube, where you can subscribe for all future episodes: <a href='https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA'>https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA</a><br/><br/>Tatty is performing her debut hour &quot;Fugue&quot; at the Edinburgh Fringe.  Her run is sold-out, but tickets for her extra show on 16th August (9PM) are available here: <a href='https://tickets.edfringe.com/whats-on/tatty-macleod-fugue-1'>https://tickets.edfringe.com/whats-on/tatty-macleod-fugue-1</a><br/><br/>We&apos;re now on Patreon!  Sign up for exclusive access for as little as £3 per month:<br/><a href='https://www.patreon.com/somelaugh'>https://www.patreon.com/somelaugh<br/></a><br/>Tickets for all three of the boays&apos; Edinburgh Fringe shows in August are ON SALE NOW!<br/>Marc (Extra Show 11th August 9PM): <a href='https://tickets.edfringe.com/whats-on/marc-jennings-away-from-here-1'>https://tickets.edfringe.com/whats-on/marc-jennings-away-from-here-1</a><br/>Stu: <a href='https://tickets.edfringe.com/whats-on/stuart-mcpherson-love-that-for-me'>https://tickets.edfringe.com/whats-on/stuart-mcpherson-love-that-for-me</a><br/>Steve: <a href='https://tickets.edfringe.com/whats-on/stephen-buchanan-charicature'>https://tickets.edfringe.com/whats-on/stephen-buchanan-charicature<br/></a><br/>You can follow Some Laugh on Instagram, Twitter and TikTok - and please remember to leave a 5 star review!<br/><br/></p><a rel=\"payment\" href=\"https://www.patreon.com/somelaugh\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1983176/13411240-episode-66-the-great-blue-with-tatty-macleod.mp3"
      },
      {
        "uuid": "a340abc0-99cb-48d8-8a8b-569b7b37fc25",
        "name": "Episode 65: Weed, Windows & Bleached Whale with Adam Flood",
        "description": "<p>See Some Laugh Live at the Edinburgh Fringe 15th &amp; 23rd August: <a href='https://tickets.edfringe.com/whats-on/some-laugh-live'>https://tickets.edfringe.com/whats-on/some-laugh-live</a><br/><br/>This week Steve and Marc are joined by comedian Adam Flood.   Adam recounts getting kicked out of school aged 13 for selling weed, performing stand-up out of a barbershop window, and his previous life in a once-promising indie landfill band <em>Bleached Whale</em>.  Plus, they discuss teenage nicknames,  extreme fire-safety demonstrations from school, and Adam&apos;s Edinburgh Fringe debut this year.<br/><br/>A video version of this podcast is available on YouTube, where you can subscribe for all future episodes: <a href='https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA'>https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA</a><br/><br/>You can see Adam perform his debut Edinburgh Fringe show &quot;Remoulded&quot; at The Hive until 27th August.  Tickets here: <a href='https://tickets.edfringe.com/whats-on/adam-flood-remoulded'>https://tickets.edfringe.com/whats-on/adam-flood-remoulded</a><br/><br/>We&apos;re now on Patreon!  Sign up for exclusive access for as little as £3 per month:<br/><a href='https://www.patreon.com/somelaugh'>https://www.patreon.com/somelaugh<br/></a><br/>Tickets for all three of the boays&apos; Edinburgh Fringe shows in August are ON SALE NOW!<br/>Marc (Extra Show 11th August 9PM): <a href='https://tickets.edfringe.com/whats-on/marc-jennings-away-from-here-1'>https://tickets.edfringe.com/whats-on/marc-jennings-away-from-here-1</a><br/>Stu: <a href='https://tickets.edfringe.com/whats-on/stuart-mcpherson-love-that-for-me'>https://tickets.edfringe.com/whats-on/stuart-mcpherson-love-that-for-me</a><br/>Steve: <a href='https://tickets.edfringe.com/whats-on/stephen-buchanan-charicature'>https://tickets.edfringe.com/whats-on/stephen-buchanan-charicature<br/></a><br/>You can follow Some Laugh on Instagram, Twitter and TikTok - and please remember to leave a 5 star review!<br/><br/></p><a rel=\"payment\" href=\"https://www.patreon.com/somelaugh\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1983176/13372311-episode-65-weed-windows-bleached-whale-with-adam-flood.mp3"
      },
      {
        "uuid": "2e99d155-9f7c-45d7-9539-016e0c0be6b2",
        "name": "Episode 64: Meeting with Mr Sanchez with Glenn Wool",
        "description": "<p>Marc and guest host Mark Nelson are joined by Canadian comedy legend Glenn Wool.  A veteran of the UK stand-up circuit, Glenn discusses the difference between doing stand-up in Britain vs North America, recounts the misunderstanding which preceded his meeting with a Hollywood production company, and reveals receiving a pre-show pep talk from a Champions League-winning former Barcelona manager.<br/><br/>A video version of this podcast is available on YouTube, where you can subscribe for all future episodes: https://www.youtube.com/channel/UCxeugCQL5zyVhd7pCEAi9GA<br/><br/>Glenn is performing his new show “The Tardigrades Picnic” at The Edinburgh Fringe from 4th-28th August.  Tickets here: <br/>https://tickets.edfringe.com/whats-on/glenn-wool-the-tardigrades-picnic<br/><br/>You can see Mark Nelson at the Edinburgh  Fringe with his show “Bits n Pieces” at 7:05PM every night at The Hive. <a href='https://tickets.edfringe.com/whats-on/mark-nelson-bits-pieces'>https://tickets.edfringe.com/whats-on/mark-nelson-bits-pieces</a><br/><br/>We&apos;re now on Patreon!  Sign up for exclusive access for as little as £3 per month:<br/>https://www.patreon.com/somelaugh<br/><br/>Tickets for all three of the boays&apos; Edinburgh Fringe shows in August and various work-in-progress shows are ON SALE NOW!<br/>Marc: www.marcjenningscomedy.com/gigs<br/>Stu: https://linktr.ee/StuartMcP<br/>Steve: https://linktr.ee/stephenbuchanan<br/><br/>You can follow Some Laugh on Instagram, Twitter and TikTok - and please remember to leave a 5 star review!</p><a rel=\"payment\" href=\"https://www.patreon.com/somelaugh\">Support the show</a>",
        "audioUrl": "https://www.buzzsprout.com/1983176/13331779-episode-64-meeting-with-mr-sanchez-with-glenn-wool.mp3"
      }
    ]
  },
  
  {
		"uuid": "23838ecc-84b9-4bca-99ff-ab45f993425d",
		"name": "Wheel of Misfortune",
		"description": "Alison Spittle, co-hosts Kerry Katona and Fern Brady and listeners share their funniest, most embarrassing stories - the bad stuff that makes you feel good.\n\nAll episodes available now! Featuring burning shame from a whole host of celebrity guests and comedians, and former co-host Fern Brady. \n\nProducer: Beth O'Dea\nArtwork: Sophie Rose Brampton\nSocial media: Harry Robinson\n\nCommissioning Assistant Producer: Adam Eland\nCommissioning Producer: Natasha Johansson\nCommissioning Executive: Dylan Haskins\n\nWheel of Misfortune is a BBC Audio Bristol Production for BBC Sounds.",
		"genres": [
			"PODCASTSERIES_SOCIETY_AND_CULTURE"
		],
		"itunesInfo": {
			"uuid": "23838ecc-84b9-4bca-99ff-ab45f993425d",
			"baseArtworkUrlOf": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/7a/ed/34/7aed34b2-7e06-1adf-2794-f3ae12c1d857/mza_15830267233306709962.jpg/640x640bb.png"
	},
  "episodes": [
      {
        "uuid": "8e24ed35-e2e4-49eb-bbc9-b99ba0df9caa",
        "name": "Aisle of Shame with Fern Brady",
        "description": "Alison, Kerry and Fern hear amazing stories from the audience on lots of weird and wonderful subjects\nProducer Beth O'Dea",
        "audioUrl": "http://open.live.bbc.co.uk/mediaselector/6/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p0ffcpm5.mp3"
      },
      {
        "uuid": "d4be4ad5-4f75-4b14-8508-f69d7737a6de",
        "name": "Drunk and Disorderly with Anna Vakili from Love Island",
        "description": "Alison, Kerry, Anna and podcast listeners tell staggering tales of alcoholic excess.\n\nFeel free to tell your tale on +44 7519 494 891 as a WhatsApp voice message.\n\nProducer: Beth O'Dea",
        "audioUrl": "http://open.live.bbc.co.uk/mediaselector/6/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p0fczs9r.mp3"
      },
      {
        "uuid": "6cd8f584-ce75-4947-97fd-b01b67e21963",
        "name": "Caught on Camera with Joe Baggs",
        "description": "Alison, Kerry, Joe and the audience confess embarrassments that were captured on video. Share your embarrassment with us on +44 7519 494 891 as a whatsapp voice note",
        "audioUrl": "http://open.live.bbc.co.uk/mediaselector/6/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p0fbm6lj.mp3"
      },
      {
        "uuid": "9ed06ce7-a160-4d01-bef8-9c019e4cc763",
        "name": "Massages Gone Wrong with Nikita Jasmine from MAFS",
        "description": "Alison, Kerry, Nikita and the audience on voice notes tell all about terrible treatments they've had. Contact us on 07519 494 891 (or +44 7519 494 891 from outside the UK) and record your embarrassing memory as a whatsapp voice message to take part",
        "audioUrl": "http://open.live.bbc.co.uk/mediaselector/6/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p0f96h5x.mp3"
      },
      {
        "uuid": "bbf313aa-0fc1-433c-bf31-a866ebfdda5b",
        "name": "Overseen and Overheard Horrors with Nicole O'Brien",
        "description": "Alison, Kerry, Nicole and listeners on things they've seen or heard that they REALLY shouldn't have. Go ahead and join us with a story by whatsapp voice message to +44 7519 494 891",
        "audioUrl": "http://open.live.bbc.co.uk/mediaselector/6/redir/version/2.0/mediaset/audio-nondrm-download/proto/http/vpid/p0f83cl3.mp3"
      }
    ]
  },

  {
	"uuid": "b6d3846d-3b40-4ecc-a189-9d595a3fec38",
	"name": "2 Bears, 1 Cave with Tom Segura & Bert Kreischer",
	"description": "Weekly, comedian best friends Tom Segura and Bert Kreischer get together in the bear cave at YMH Studios to do what bears do: make each other laugh.",
	"genres": [
		"PODCASTSERIES_COMEDY",
		"PODCASTSERIES_SOCIETY_AND_CULTURE"
	],
	"itunesInfo": {
		"uuid": "b6d3846d-3b40-4ecc-a189-9d595a3fec38",
		"baseArtworkUrlOf": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/0a/a9/0e/0aa90eb8-cda4-ca3e-1ba2-4905629cc969/mza_2346828209554045702.jpg/640x640bb.png"
	},
  "episodes": [
    {
      "uuid": "6a61240e-0bd4-469e-a8ef-c96746ac1344",
      "name": "Sober Bert | 2 Bears, 1 Cave Ep. 201",
      "description": "<p>SPONSORS:</p><p>- Go to <a href=\"https://Saatva.com/theshit\">https://Saatva.com/theshit</a> to get $200 off ANY mattress of your choice.</p><p>Welcome back to another episode of 2 Bears, 1 Cave. This week, Tom Segura and Bert Kreischer discuss their favorite radio shows and podcasts, Scientology, how Peru lost Machu Picchu, what it takes to be an ambassador, and much more! Plus, Bert went to Jazzfest, and saw some of his favorite artists perform, and found some new favorites. Also, Bert is deciding to get sober to help ease his crazy schedule!</p><p><a href=\"https://tomsegura.com/tour\">https://tomsegura.com/tour</a><br /><a href=\"https://www.bertbertbert.com/tour\">https://www.bertbertbert.com/tour</a><br /><a href=\"https://store.ymhstudios.com/\">https://store.ymhstudios.com/</a></p>\n",
      "audioUrl": "https://dts.podtrac.com/redirect.mp3/pdst.fm/e/chrt.fm/track/288D49/stitcher.simplecastaudio.com/8063fbab-45ba-43b8-b65a-468cc5752cdf/episodes/d71bf01c-71b5-466a-8f45-e4b25bc8deab/audio/128/default.mp3?aid=rss_feed&awCollectionId=8063fbab-45ba-43b8-b65a-468cc5752cdf&awEpisodeId=d71bf01c-71b5-466a-8f45-e4b25bc8deab&feed=xyBuzW92"
    },
    {
      "uuid": "af95904d-6283-465a-8d20-6ddb12c6b870",
      "name": "Episode 200 Spectacular | 2 Bears, 1 Cave Ep. 200",
      "description": "<p>It’s the 200th episode of 2 Bears, 1 Cave, and Tom Segura and Bert Kreischer got each other some awesome gifts to celebrate! Tom shows Bert Kevin Leonardo’s infamous “Nair Hair Removal” video, and Bert discusses having Covid 7 times, history, cancel culture, luxury tour buses, and much more!</p><p><a href=\"https://tomsegura.com/tour\">https://tomsegura.com/tour</a><br /><a href=\"https://www.bertbertbert.com/tour\">https://www.bertbertbert.com/tour</a><br /><a href=\"https://store.ymhstudios.com/\">https://store.ymhstudios.com/</a></p>\n",
      "audioUrl": "https://dts.podtrac.com/redirect.mp3/pdst.fm/e/chrt.fm/track/288D49/stitcher.simplecastaudio.com/8063fbab-45ba-43b8-b65a-468cc5752cdf/episodes/ce8fe47f-1f42-442f-b5c1-04955a9a5e2d/audio/128/default.mp3?aid=rss_feed&awCollectionId=8063fbab-45ba-43b8-b65a-468cc5752cdf&awEpisodeId=ce8fe47f-1f42-442f-b5c1-04955a9a5e2d&feed=xyBuzW92"
    },
    {
      "uuid": "be2ef13d-a4ac-4715-b121-7e57a418adb0",
      "name": "I Almost Died | 2 Bears, 1 Cave Ep. 199",
      "description": "<p>It's another week of 2 Bears 1 Cave with the OG bears Tom Segura and Bert Kreischer! They bears start off with sharing how they recently dealt with conflict resolution between them, spray tans, the worst picture of Bert yet, and the Just For Laughs Comedian of the Year award. The bears see if you can cure stinky body parts, they discuss surfing, and Tom shares a story of how he almost drowned. They wrap up the episode with reviewing videos of Great White Sharks, Orcas and Polar Bears attacking people.</p><p><a href=\"https://tomsegura.com/tour\">https://tomsegura.com/tour</a><br /><a href=\"https://www.bertbertbert.com/tour\">https://www.bertbertbert.com/tour</a><br /><a href=\"https://store.ymhstudios.com/\">https://store.ymhstudios.com/</a></p>\n",
      "audioUrl": "https://dts.podtrac.com/redirect.mp3/pdst.fm/e/chrt.fm/track/288D49/stitcher.simplecastaudio.com/8063fbab-45ba-43b8-b65a-468cc5752cdf/episodes/f927ebdd-5e3c-4934-95d8-12f43a4e2f0d/audio/128/default.mp3?aid=rss_feed&awCollectionId=8063fbab-45ba-43b8-b65a-468cc5752cdf&awEpisodeId=f927ebdd-5e3c-4934-95d8-12f43a4e2f0d&feed=xyBuzW92"
    },
    {
      "uuid": "bcef6c7b-4c0e-4b20-989b-02d353381296",
      "name": "Beer Olympics | 2 Bears, 1 Cave Ep. 198",
      "description": "<p>This week we bring you 2 Bears 1 Cave with Tom Segura and Bert Kreischer… in 4K! The bears are back in their Austin den and Bert tells Tom all about The Beer Olympics hosted by Bussin’ With The Boys, surrounded by ELITE athletes like Taylor Lewan, David Bakhtiari, Michael Chandler, and Shane Gillis. Tom then shares with Bert that their overweight producer, Nadav, has been challenged and is training for the NYC Marathon. Bert shows how strong he’s become and shares his personal experiences and advice with Nadav for the upcoming marathon.</p><p><a href=\"https://tomsegura.com/tour\">https://tomsegura.com/tour</a><br /><a href=\"https://www.bertbertbert.com/tour\">https://www.bertbertbert.com/tour</a><br /><a href=\"https://store.ymhstudios.com/\">https://store.ymhstudios.com/</a></p>\n",
      "audioUrl": "https://dts.podtrac.com/redirect.mp3/pdst.fm/e/chrt.fm/track/288D49/stitcher.simplecastaudio.com/8063fbab-45ba-43b8-b65a-468cc5752cdf/episodes/309e7d0c-857b-4843-a7f0-e23b5bda4c22/audio/128/default.mp3?aid=rss_feed&awCollectionId=8063fbab-45ba-43b8-b65a-468cc5752cdf&awEpisodeId=309e7d0c-857b-4843-a7f0-e23b5bda4c22&feed=xyBuzW92"
    },
    {
      "uuid": "68b6ce18-420a-47a3-bcc2-59133b1c4163",
      "name": "Wildest Shark Attacks w/ Theo Von | 2 Bears, 1 Cave Ep. 197",
      "description": "<p>SPONSORS: </p><p>- Go to https://Saatva.com/theshit to get $200 off ANY mattress of your choice.</p><p><br />This week we have a very special 2 Bears 1 Cave with Tom Segura and guest bear Theo Von! They discuss having sunglass options, old school comedians with gimmicks, Matt Rife, and the evolution of getting on TV shows. They talk about Ole Miss and LSU College Football. They discuss how money has the potential to demotivate you and the feeling of making people laugh.</p><p><a href=\"https://tomsegura.com/tour\">https://tomsegura.com/tour</a><br /><a href=\"https://www.bertbertbert.com/tour\">https://www.bertbertbert.com/tour</a><br /><a href=\"https://store.ymhstudios.com/\">https://store.ymhstudios.com/</a></p>\n",
      "audioUrl": "https://dts.podtrac.com/redirect.mp3/pdst.fm/e/chrt.fm/track/288D49/stitcher.simplecastaudio.com/8063fbab-45ba-43b8-b65a-468cc5752cdf/episodes/fbc42d22-8bb0-4b9d-8c56-e563365ba085/audio/128/default.mp3?aid=rss_feed&awCollectionId=8063fbab-45ba-43b8-b65a-468cc5752cdf&awEpisodeId=fbc42d22-8bb0-4b9d-8c56-e563365ba085&feed=xyBuzW92"
    }
  ]
}
]);

// const genreKeys = {"PODCASTSERIES_SOCIETY_AND_CULTURE" : {"name": "Culture", "icon": "🤡" }}
// // genreKeys[podcast.genre]

