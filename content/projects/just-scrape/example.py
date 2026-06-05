from just_scrape import JustScrape

client = JustScrape()

# Search for titles, by query string.
results = client.search.get("Breaking")

# Title details, by full URL path (the part after the domain).
movie = client.url_title_details.get("/us/movie/the-thursday-murder-club")
show = client.url_title_details.get("/us/tv-show/strip-law")

# The episodes in a season, by season node ID.
episodes = client.season_episodes.get("tss337460")

# Streaming/buy/rent offers for a title, by node ID.
offers = client.buy_box_offers.get("tse9298997")

# Newly released titles. Defaults to today; accepts filters.
new_titles = client.new_titles.get(
    filter_packages=["net"],
    available_to_packages=["net"],
)

# A title's editorial article, by full URL path.
article = client.title_detail_article.get("/us/movie/the-thursday-murder-club")
