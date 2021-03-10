import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import { Context } from '../../Context/GlobalContext';
import { CountryType } from './../Cards/CountryCards';

const Form = styled.form``;

export const SearchForm: React.FC = () => {
    // const [  ]
    const { 
        countries, 
        searchValue, 
        handleChange, 
        handleSelectChange 
    } = useContext(Context)
    
    console.log(searchValue);

    return (
        <form>
            <div>
                <fieldset>
                    <input type="text" value={searchValue} onChange={handleChange}/>
                </fieldset>

                <select value={searchValue} onChange={handleSelectChange}>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </form>
    )
}
