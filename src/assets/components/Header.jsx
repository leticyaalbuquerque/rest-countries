import { HiMoon } from 'react-icons/hi'

export default function Header({ onDarkMode }) {

    return (
        <div className={`w-screen bg-white dark:bg-dark-blue drop-shadow-md`}>
            <div className="container mx-auto px-8 py-4 lg:px-20 lg:py-4 w-full flex justify-between items-center">
                <h1 className="font-bold text-very-dark-blue-text dark:text-white text-start text-base lg:text-lg">Where in the world?</h1>
                <button onClick={onDarkMode}>
                    <HiMoon className='w-5 h-5 lg:w-6 lg:h-6 fill-very-dark-blue-text dark:fill-white' />
                </button>
            </div>
        </div>
    )
}