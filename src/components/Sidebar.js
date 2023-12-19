import React from 'react'

function Sidebar({ topAnime, manga }) {
	return (
		<aside>
			<nav>
				<h3 className='top-header'>Top {manga ? 'Manga' : 'Anime'}</h3>
				{topAnime.map(anime => (
					<a 
						href={anime.entry.url} 
						target="_blank"
						key={anime.entry.mal_id} 
						rel="noreferrer">
						{ anime.entry.title }
					</a>
				))}
			</nav>
		</aside>
	)
}

export default Sidebar