function Header({manga}) {
	return (
		<header>
			<h1>The<strong>{manga ? 'Manga' : 'Anime'}</strong>Database</h1>
		</header>
	)
}

export default Header