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

	const FetchAnime = async (query) => {
    const animes = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
    .then(res => res.json())
    .catch(err => console.error(err));
    SetAnimeList(animes.data);
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