import React, {useEffect, useState, ChangeEvent} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from "axios";

interface Country {
    geonameId: string;
    countryName: string;
}

interface Region {
    geonameId: string;
    adminCode1: string;
    countryCode: string;
    name: string;
}

interface City {
    geonameId: string;
    name: string;
}

interface LocationProps {
    handleLocation: (date: string) => void
    location: string | undefined,
}

const LocationForm: React.FC<LocationProps> = ({handleLocation, location}) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [regions, setRegions] = useState<Region[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
    const [selectedCity, setSelectedCity] = useState<string[]>([]);

    useEffect(() => {
        if (location) {
            const locationArr = location.split(', ')
            //add logic to handle initial previous data
        }
    }, [location])

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('http://api.geonames.org/countryInfoJSON?username=ivanquizproject');
                const data = await response.json();
                setCountries(data.geonames);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = event.target.value.split(',');
        if (selectedCountry[0] === 'default') {
            setSelectedCountry([]);
            return;
        }
        setSelectedCountry(selectedCountry);
        setSelectedRegion([]);

        const fetchRegions = async () => {
            try {
                const response = await fetch(
                    `http://api.geonames.org/childrenJSON?geonameId=${selectedCountry[0]}&username=ivanquizproject`
                );
                const data = await response.json();
                setRegions(data.geonames);
            } catch (error) {
                console.error('Error fetching regions:', error);
            }
        };

        fetchRegions();
    };

    const handleRegionChange = async (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedRegion = event.target.value.split(',');
        if (selectedRegion[0] === 'default') {
            setSelectedRegion([]);
            return;
        }
        setSelectedRegion(selectedRegion);
        setSelectedCity([])

        const fetchCities = async () => {
            try {
                const response = await fetch(
                    `http://api.geonames.org/searchJSON?country=${selectedRegion[3]}&adminCode1=${selectedRegion[2]}&lang=en&username=ivanquizproject`)
                const data = await response.json();
                setCities(data.geonames);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const city = e.target.value.split(',');
        console.log(city)
        setSelectedCity(city)
    }

    useEffect(() => {
        let locationString = '';

        if (selectedCountry[1]) locationString += selectedCountry[1];
        if (selectedRegion[1]) locationString += `, ${selectedRegion[1]}`;
        if (selectedCity[1]) locationString += `, ${selectedCity[1]}`;

        handleLocation(locationString);
    }, [selectedCountry, selectedCity, selectedRegion])

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Button
                onClick={() => console.log(selectedCountry.length, `${selectedCountry[1]}, ${selectedRegion[1]}, ${selectedCity[1]}`)}></Button>

            <Form.Select
                className="me-2"
                onChange={handleCountryChange}
                value={selectedCountry.toString()}
            >
                <option value="default">Country/Region</option>
                {countries && countries.map((country) => (
                    <option key={country.geonameId} value={`${country.geonameId}, ${country.countryName}`}>
                        {country.countryName}
                    </option>
                ))}
            </Form.Select>

            <Form.Select
                className="me-2"
                disabled={!selectedCountry.length}
                onChange={handleRegionChange}
                value={selectedRegion.toString()}
            >
                <option value="default">State/Province</option>
                {regions && regions.map((region) => (
                    <option key={region.geonameId}
                            value={`${region.geonameId}, ${region.name}, ${region.adminCode1}, ${region.countryCode}`}>
                        {region.name}
                    </option>
                ))}
            </Form.Select>

            <Form.Select
                disabled={!selectedRegion.length || !selectedCountry.length}
                onChange={handleCityChange}
                value={selectedCity.toString()}
            >
                <option value="default">City/town</option>
                {cities && cities.map((city) => (
                    <option key={city.geonameId} value={`${city.geonameId}, ${city.name}`}>
                        {city.name}
                    </option>
                ))}
            </Form.Select>
        </div>
    );
};

export default LocationForm;