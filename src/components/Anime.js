import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.js';
import Header from "./Header.js";
import MainContent from "./MainContent.js"
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

export default function MainAnime() {
    const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");
  const animeClient = new AnimeClient();

	const GetTopAnime = async () => {
    const animes = await animeClient.getAnimeRecommendations(1);
    SetTopAnime(animes['data'].slice(0, 10));
  }

	const HandleSearch = e => {
		e.preventDefault();
		FetchAnime(search);
	}

  const PostAnime = async (data) => {
    let temp = [];  // Hold genres for each anime entry
    
    data.forEach((entry) => {
      entry.genres.forEach((genre) => {
        temp.push(genre.name);
        console.log(genre.name);
      });

      fetch('http://localhost:3001/anime', {
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
    const animes = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
    .then(res => res.json())
    .catch(err => console.error(err));
    SetAnimeList(animes.data);

    // Post data to database
    await PostAnime(animes.data);
	}

	useEffect(() => {
		GetTopAnime();
	}, []);
    return (
        <>
                  <div className="App">
            <Header />
            <div className="content-wrap">
              <Sidebar 
                topAnime={topAnime} />
              <MainContent
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                animeList={animeList} />
            </div>
		      </div> 
        </>
    );
}