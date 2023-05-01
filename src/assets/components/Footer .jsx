export default function Footer() {
    return (
        <div className='w-screen bg-white dark:bg-dark-blue drop-shadow-md'>
            <div className="container mx-auto px-6 py-4 lg:px-20 lg:py-4 w-full flex flex-col items-center">
                <span className="font-light text-sm text-very-dark-blue-text dark:text-white">Challenge by <a href="https://www.frontendmentor.io/" target="__blank" className="italic text-dark-gray dark:text-white/80">Frontend Mentor</a>.</span>
                <span className="font-light text-sm text-very-dark-blue-text dark:text-white">Coded by <a href="https://leticyaalbuquerque.github.io/" target="__blank" className="italic text-dark-gray dark:text-white/80">Letícia Rodrigues</a>.</span>
            </div>
        </div>
    )
}