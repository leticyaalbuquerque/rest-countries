export default function CardCountry(props) {
    return (
        <div className="w-full bg-white dark:bg-dark-blue rounded-md drop-shadow overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300">
            <img src={props.img} alt="" className="w-full h-52 md:h-36 lg:h-32 xl:h-40 object-cover object-center" />
            <div className="flex flex-col items-start p-8 md:p-4">
                <h2 className="font-bold text-very-dark-blue-text dark:text-white text-start text-base pb-3">{props.name}</h2>
                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Population: <span className="font-light">{props.population}</span></span>
                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Region: <span className="font-light">{props.region}</span></span>
                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Capital: <span className="font-light">{props.capital}</span></span>
            </div>
        </div>
    )
}