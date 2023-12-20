Frontend for WebDev Final from Team 9!

The Frontend project requirements were done as follows:
UI (React)
    Created a Navbar to navigate the site (https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/Navbar.js#L4)
    Created 3 or more additional components
        1 or more components should take text-based user input (Search; https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/MainContent.js#L11)
        1 or more components should display data representing a single instance from a model (The Anime and Manga pages; https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/Anime.js#L7)
            Clicking on one of these components should show additional information related to that instance (Links to MAL's comprehensive page on the media; https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/AnimeCard.js#L7)
        1 or more components should display data based on store state (Search Results; https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/MainContent.js#L19)
        Components should enable to user to perform CRUD operations on the backend models (Populated by searching: https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/Anime.js#L23)
    Client-Side Routing (React Router)
        Create 2 our more routes that display different components based on the URL, that are accessible from the navbar/topbar (Anime from above and Manga: https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/Manga.js#L7)
        Use dynamic segments to display appropriate info based on the segment info (Search Results from above)
            Ex: Appropriate task is displayed when the URL matches `/tasks/:taskId`
    State Management (Redux)
        Create a store and a reducer to handle incoming actions 
        Create 1 or more action creators to create actions based on inputs (Search from above, take user input and search)
        Update store state using dispatch and actions (Mainly used state, as most things would end up in the DB anyway, https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/AnimeCard.js#L3)
        Reflect updates to the state in the frontend UI (https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/AnimeCard.js#L3)
    API Calls (External and to Backend)
        Backend: Using the backend routes, should be able to perform CRUD operations on database models (https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/Anime.js#L23)
        External: Should make 2 or more External API calls (https://github.com/wy33/Web_Dev_Frontend/blob/218f5546891bf32c25bb1dce57f914199ea9c5c8/src/components/Manga.js#L14 & Backend)
