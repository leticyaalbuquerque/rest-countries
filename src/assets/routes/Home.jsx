/* import { useState } from "react"; */
import { useState } from "react";
import CardCountry from "../components/CardCountry";
import DropdownFilter from "../components/DropdownFilter";
import Search from "../components/Search";
import Data from "../data/data.json";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [valueFilter, setValueFilter] = useState('');
    const [countryName, setCountryName] = useState('');
    const navigate = useNavigate()

    const handleDetails = (country) => {
        navigate("/rest-countries/countries-details", { state: country })
    }

    const handleValueChange = (e) => {
        setValueFilter(e)
    }

    const handleSearchInput = (e) => {
        setCountryName(e.target.value)
    }

    const filteredCards = Data.filter(country => {
        if (countryName) return country.name.includes(countryName)

        if (valueFilter !== "Filter by Region") return country.region === valueFilter

        return country
    })


    return (
        <div className="w-screen min-h-screen bg-very-light-gray dark:bg-very-dark-blue-bg py-6 lg:py-12">
            <div className="container mx-auto h-full w-full px-8 lg:px-20">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-6 lg:pb-12">
                    <Search onChange={handleSearchInput} />
                    <DropdownFilter onChange={handleValueChange} />
                </div>

                <div className="w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 xl:gap-16">
                    {filteredCards.map((country) => (
                        <div onClick={() => handleDetails(country)} key={country.name}>
                            <CardCountry
                                country={country}
                                img={country.flags.png}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}