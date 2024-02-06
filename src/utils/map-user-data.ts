import { UserData } from '../types/UserData'

interface IResult {
  results: any[]
}

export const mapUserData = <T extends IResult>({ results }: T): UserData[] => {
  return results.map((elem) => ({
    name: elem.name.first + ' ' + elem.name.last,
    pictureTumb: elem.picture.thumbnail,
    pictureLarge: elem.picture.large,
    location: elem.location.state + ' ' + elem.location.city,
    email: elem.email,
    phone: elem.phone,
    registeredAt: elem.registered.date,
    loginId: elem.login.uuid,
  }))
}
