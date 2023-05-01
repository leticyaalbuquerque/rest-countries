import { BiSearch } from 'react-icons/bi'

export default function Search({ onChange }) {
    return (
        <div className="flex items-center gap-4 bg-white dark:bg-dark-blue rounded-md drop-shadow px-6 py-3 w-full lg:w-2/5">
            <BiSearch className='w-6 h-6 fill-dark-gray dark:fill-white' />
            <input onChange={onChange} type="text" placeholder='Search for a country...' className='w-full bg-transparent outline-none font-semibold text-start text-very-dark-blue-text dark:text-white text-base placeholder:text-sm' />
        </div>
    )
}