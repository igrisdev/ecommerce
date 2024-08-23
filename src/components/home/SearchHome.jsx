import { useState } from 'react'

export const SearchHome = () => {
  const [isOpenCategory, setIsOpenCategory] = useState(false)
  const [allCategories] = useState([
    'All categories',
    'Mockups',
    'Templates',
    'Design',
    'Logos',
  ])
  const [categorySelected, setCategorySelected] = useState('All categories')

  const handleOpenCategory = () => {
    setIsOpenCategory(!isOpenCategory)
  }

  const handleCategorySelected = (category) => {
    setCategorySelected(category)
    setIsOpenCategory(false)
  }

  return (
    <form className='mx-auto w-full max-w-lg'>
      <div className='flex relative'>
        <button
          id='dropdown-button'
          onClick={handleOpenCategory}
          data-dropdown-toggle='dropdown'
          className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200'
          type='button'
        >
          {categorySelected}
          <svg
            className='w-2.5 h-2.5 ms-2.5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 4 4 4-4'
            ></path>
          </svg>
        </button>
        {isOpenCategory && (
          <div
            id='dropdown'
            className='z-10 absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
          >
            <ul
              className='py-2 text-sm text-gray-700'
              aria-labelledby='dropdown-button'
            >
              {allCategories.map((category, index) => {
                if (category === categorySelected) {
                  return null
                }

                return (
                  <li key={index}>
                    <button
                      onClick={() => handleCategorySelected(category)}
                      type='button'
                      className='inline-flex w-full px-4 py-2 hover:bg-gray-100'
                    >
                      {category}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        <div className='relative w-full'>
          <input
            type='search'
            id='search-dropdown'
            className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300'
            placeholder='Buscar Productos ...'
            required
          />
          <button
            type='submit'
            className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-local_background_secondary rounded-e-lg border border-local_background_secondary hover:bg-local_background_secondary/90'
          >
            <svg
              className='w-4 h-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}
