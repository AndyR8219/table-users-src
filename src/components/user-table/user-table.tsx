import { TableHeader, TableRow } from './components'
import { UserData } from '../../types/UserData'
import './user-table.css'

interface IUserListProps {
  userItems: UserData[]
  searchValue: string
}

export const UserTable: React.FC<IUserListProps> = ({
  userItems,
  searchValue,
}) => {
  const userList = userItems.filter((userItem) =>
    userItem?.name?.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <TableHeader />
      {userList.length > 0 ? (
        userList.map((userItem) => (
          <TableRow userItem={userItem} key={userItem.loginId} />
        ))
      ) : (
        <div className="no-matches">Совпадений не найдено</div>
      )}
    </div>
  )
}
