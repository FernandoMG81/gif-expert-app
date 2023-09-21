import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'
import Masonry from 'react-layout-masonry'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={10}>
        {images.map(img => (
          <GifItem
            key={img.id}
            {...img}/>
        ))}
      </Masonry>

    </>
  )
}
