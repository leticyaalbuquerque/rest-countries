import { useNavigate, useLocation, Navigate } from "react-router-dom"
import { BsArrowLeftShort } from "react-icons/bs"

export default function CountriesDetails() {
    const navigate = useNavigate()
    const { state: country } = useLocation()


    const handleVoltar = () => {
        navigate("/")
    }

    if (!country) return (
        <Navigate to="/" />
    )

    return (
        <div className="w-screen min-h-screen bg-very-light-gray dark:bg-very-dark-blue-bg py-10 lg:py-12">
            <div className="container mx-auto h-full w-full px-8 lg:px-20">
                <button onClick={handleVoltar} className="flex items-center gap-2 bg-white dark:bg-dark-blue font-semibold text-very-dark-blue-text dark:text-white text-base px-4 py-2 mb-10 md:mb-12 rounded-md drop-shadow-md">
                    <BsArrowLeftShort className="w-5 h-5" />
                    Back</button>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20">
                    <div className="w-full h-[240px] md:h-[260px] xl:h-[350px] overflow-hidden">
                        <img src={country.flags.png} alt="Image Country" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-2xl font-bold text-very-dark-blue-text dark:text-white mb-8">{country.name}</h1>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 lg:gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Native Name: <span className="font-light">{country.nativeName}</span></span>
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Population: <span className="font-light">{country.population}</span></span>
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Region: <span className="font-light">{country.region}</span></span>
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Sub Region: <span className="font-light">{country.subregion}</span></span>
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Capital: <span className="font-light">{country.capital}</span></span>
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Top Level Domain: <span className="font-light">{country.topLevelDomain}</span></span>
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Currencies: <span className="font-light">{country.currencies.map(e => e.name).join(', ')}</span></span>
                                <span className="font-semibold text-very-dark-blue-text dark:text-white text-start text-sm">Languages: <span className="font-light">{country.languages.map(e => e.name).join(', ')}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}