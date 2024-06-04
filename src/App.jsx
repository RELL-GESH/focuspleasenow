import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Domů from './pages/Domů'
import Dokumenty from'./pages/Dokumenty'
import OObci from'./pages/OObci'
import ÚzemníPlányObceDobřeň from'./pages/ÚzemníPlányObceDobřeň'
import Fotogalerie from'./pages/Fotogalerie'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Domů />} />
      <Route path='/domů' element= {<Domů />} />
      <Route path='/oobci' element= {<OObci />} />
      <Route path='/dokumenty' element= {<Dokumenty />} />
      <Route path='/fotogalerie' element= {<Fotogalerie />} />
      <Route path='/územníplányobcedobřeň' element= {<ÚzemníPlányObceDobřeň />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
