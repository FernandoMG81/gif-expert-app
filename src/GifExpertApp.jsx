import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory = (newCategory) => {
    if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* títulos */}
      <h1>GifExpertApp</h1>

      {/* inputs */}
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
