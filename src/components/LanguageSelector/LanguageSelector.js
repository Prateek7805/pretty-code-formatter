import React from 'react';
import { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CodeData } from '../Contexts/PageContext';

export default function LanguageSelector() {
    const { code, setCode } = useContext(CodeData);
    const supportedLanguages = ['Select', 'JSON', 'XML', 'YML', 'javascript'];
    const handleChange = (e) => {
        const language = e.target.value;
        setCode(prev => ({ ...prev, language }));
    };
    const handleValue = () => {
        const language = code.language;
        const supported = supportedLanguages.some(item=>item.toLowerCase() === language.toLowerCase());
        console.log(supported);
        if(supported){
            return language;
        }
        return 'select';
    }
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select-small"
                value={handleValue()}
                label="Language"
                onChange={handleChange}
            >
                {
                    supportedLanguages.map((lang, index) => {
                        return (
                            <MenuItem value={lang.toLowerCase()} key={index}>
                                {lang}
                            </MenuItem>
                        )
                    })
                }

            </Select>
        </FormControl>
    );
}