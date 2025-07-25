import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { Toaster } from 'sonner'
import { SearchProvider } from './context'

const App = () => {
  return (
    <>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>

      <Toaster richColors className='text-left' position='bottom-center' />
    </>
  )
}

export default App
