import { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function DropdownFilter( { onChange }) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('Filter by Region')

    const handleClick = () => {
        setOpen(!open)
    }

    const handleSelect = (e) => {
        setSelected(e.target.value)
        setOpen(!open)
    }

    useEffect(() => {
        onChange(selected)
    }, [selected, onChange])

    return (
        <div className="relative inline-block">
            <div>
                <button onClick={handleClick} type="button" className="inline-flex w-48 items-center justify-between rounded-md bg-white dark:bg-dark-blue drop-shadow px-4 py-3 font-semibold text-very-dark-blue-text dark:text-white text-sm" aria-expanded="true" aria-haspopup="true">
                    {selected}
                    <MdKeyboardArrowDown className='w-4 h-4' />
                </button>
            </div>

            <div className={`${open ? "flex" : "hidden"} absolute left-0 md:right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white dark:bg-dark-blue drop-shadow focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    <button onClick={handleSelect} value="Filter by Region" className="text-very-dark-blue-text dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">All</button>
                    <button onClick={handleSelect} value="Africa" className="text-very-dark-blue-text dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Africa</button>
                    <button onClick={handleSelect} value="Americas" className="text-very-dark-blue-text dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Americas</button>
                    <button onClick={handleSelect} value="Asia" className="text-very-dark-blue-text dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Asia</button>
                    <button onClick={handleSelect} value="Europe" className="text-very-dark-blue-text dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Europe</button>
                    <button onClick={handleSelect} value="Oceania" className="text-very-dark-blue-text dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-5">Oceania</button>
                </div>
            </div>
        </div>
    )
}