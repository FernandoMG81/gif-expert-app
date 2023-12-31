import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (newCategory) => {
    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>Gif searcher</h1>

      <AddCategory
          // setCategories={setCategories}
        onNewCategory={onAddCategory}

      />

      { categories.map(category => (
        <GifGrid
          key={category}
          category={category}/>
      )) }

    </>
  )
}
