export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=xrk0noVYLgQ5BrYdjIhgsk9ZaU90kB03&q=${category}&limit=20`

  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_width.url
  }))

  return gifs
}
