import { useRef, useState } from 'react'
import { debounce } from '../../utils'
import { DELAY } from '../../constants'
import './search.css'

interface ISetSearch {
  setSearch: (value: string) => void
}

export const Search: React.FC<ISetSearch> = ({ setSearch }) => {
  const [value, setValue] = useState('')
  const debouncedOnSearch = useRef(debounce(setSearch, DELAY)).current

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value)
    debouncedOnSearch(target.value)
  }

  const handleCearInput: React.MouseEventHandler<HTMLButtonElement> = () => {
    setValue('')
    setSearch('')
  }

  return (
    <div className="wrapper-input">
      <input
        className="input"
        type="text"
        placeholder="Поиск по имени..."
        onChange={onChange}
        value={value}
      />
      <button className="btn-clear" onClick={handleCearInput}>
        X
      </button>
    </div>
  )
}
