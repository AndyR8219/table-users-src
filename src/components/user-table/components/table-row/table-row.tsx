import { UserData } from '../../../../types/UserData'
import { formateDate } from '../../../../utils'
import './table-row.css'

interface IUserItem {
  userItem: UserData
}

export const TableRow: React.FC<IUserItem> = ({ userItem }) => {
  const {
    loginId,
    name,
    pictureTumb,
    pictureLarge,
    location,
    email,
    phone,
    registeredAt,
  } = userItem
  return (
    <div className="table-row" key={loginId}>
      <div>{name}</div>
      <div className="wrapper-img">
        <img src={pictureTumb} alt="Thumbnail" />
        <div className="tooltip">
          <img src={pictureLarge} alt="Large" />
        </div>
      </div>
      <div>{location}</div>
      <div>{email}</div>
      <div>{phone}</div>
      <div>{formateDate(registeredAt)}</div>
    </div>
  )
}
