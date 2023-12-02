import React from 'react';
import { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CodeData } from '../Contexts/PageContext';
import {langParseMap} from '../../API/FormatCode/FormatCode';
export default function LanguageSelector() {
    const { code, setCode } = useContext(CodeData);
    const supportedLanguages = [...langParseMap.map((item)=>item.language)];

    const handleChange = (e) => {
        const language = e.target.value;
        setCode(prev => ({ ...prev, language}));
        localStorage.setItem('language', language);
    };
    
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select-small"
                value={code.language}
                label="Language"
                onChange={handleChange}
            >
                {
                    supportedLanguages.map((lang, index) => {
                        return (
                            <MenuItem value={lang} key={index}>
                                {lang}
                            </MenuItem>
                        )
                    })
                }

            </Select>
        </FormControl>
    );
}