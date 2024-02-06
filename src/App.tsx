import { useEffect, useState } from 'react'
import { Loading, Search, UserTable } from './components'
import { mapUserData } from './utils'
import { DATA_USERS_URL } from './constants'
import { UserData } from './types/UserData'
import './App.css'

const App: React.FC = () => {
  const [dataUsers, setDataUsers] = useState<UserData[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(DATA_USERS_URL)
      .then((resData) => resData.json())
      .then((data) => mapUserData(data))
      .then((data: UserData[]) => setDataUsers(data))
      .catch((err) => console.log('Ошибка загрузки данных', err))
  }, [])

  return !dataUsers.length ? (
    <Loading />
  ) : (
    <div className="app">
      <Search setSearch={setSearch} />
      <UserTable userItems={dataUsers} searchValue={search} />
    </div>
  )
}

export default App
