# Project To Dos

## Search View
[x] search term input and submit button on DOM
[x] value in search input stored in local state
[x] when submit button is clicked dispatch the input value to fetchSearchGifs saga
[ ] fetchSearchGifs saga sends GET req with search value to giphy server route
[ ] create /routes/giphy.router.js
[ ] giphy API key stored in .env file
[ ] when giphy route receives GET req, it queries the `Giphy API Search Endpoint` using the search string and .env API key, and sends response to client with API results
[ ] fetchSearchGifs saga saves results array from GET to searchResults reducer
[ ] searchResults reducer (array) is rendered on DOM 
[ ] Favorite button rendered with each gif
[ ] when Favorite button is clicked dispatch gif url to addFavorite saga
[ ] when Favorite button is clicked disable it
[ ] addFavorite saga sends POST to favorite server router with gif url
[ ] create table "favorite" with columns "id" (serial PK), "url" (varchar(1000)), "category_id" (int, references category)
[ ] favorite router POST inserts url into favorite table
[ ] addFavorite saga calls fetchFavorites saga
[ ] link to Favorites View

## Favorites View
[ ] fetchFavorites saga sends GET to favorite server router
[ ] favorite router GET selects all from favorite table and joins to category table on favorite.category_id = category.id
[ ] favorite router GET sends response to client with query results
[ ] fetchFavorites saga saves GET results to favorites reducer
[ ] favorites reducer (array) renders to DOM
[ ] on view load (useEffect) dispatch to fetchCategories saga
[ ] fetchCategories saga sends GET req to category server route
[ ] fetchCategories saga saves GET results to categories reducer
[ ] category dropdown (values are from categories reducer) and save button renders with each gif
[ ] if gif has a category, it's auto-selected in dropdown
[ ] when save is clicked, category id and gif id are dispatched to updateFavorite saga
[ ] updateFavorite saga sends PUT req to favorite server router with gif id in req url and category id in req data
[ ] favorite router PUT updates favorite table to set category_id = req.data where id = req.params, then sends 200 to client
[ ] updateFavorite saga calls fetchFavorites saga
[ ] link to Search View

## Finishing touches
[ ] test add favorite
[ ] check correct categories show when favorites rendered
[ ] test save category (initially null)
[ ] test update category (initially not null)
[ ] header styling
[ ] body styling
[ ] search form styling
[ ] search results styling
[ ] favorites list styling
[ ] conditionally style favorites list item based on its saved category 