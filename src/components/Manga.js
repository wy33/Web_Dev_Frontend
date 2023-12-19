import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.js';
import Header from "./Header.js";
import MainContent from "./MainContent.js"
import { MangaClient } from '@tutkli/jikan-ts';

export default function MainManga() {
    const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
  const animeClient = new MangaClient();

	const GetTopAnime = async () => {
    const animes = await animeClient.getMangaRecommendations(1);
    SetTopAnime(animes['data'].slice(0, 10));
  }

	const HandleSearch = e => {
		e.preventDefault();
		FetchAnime(search);
	}

  const PostManga = async (data) => {
    let temp = [];  // Hold genres for each manga entry
    
    data.forEach((entry) => {
      entry.genres.forEach((genre) => {
        temp.push(genre.name);
        console.log(genre.name);
      });

      fetch('http://localhost:3001/manga', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: entry.title_english,
          rating: entry.score,
          image: entry.images.jpg.image_url,
          url: entry.url,
          genres: temp
        })
      })
      .then(temp = []); // Empty temp array for next entry's set of genres
    })
  }

	const FetchAnime = async (query) => {
    const animes = await fetch(`https://api.jikan.moe/v4/manga?q=${query}`)
    .then(res => res.json())
    .catch(err => console.error(err));
    SetAnimeList(animes.data);

    // Post data to database
    PostManga(animes.data);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);
    return (
        <>
                  <div className="App">
            <Header manga={true} />
            <div className="content-wrap">
              <Sidebar 
                topAnime={topAnime} manga={true} />
              <MainContent
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                animeList={animeList} 
                manga={true}/>
            </div>
		      </div> 
        </>
    );
}