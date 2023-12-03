import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { CodeData, ModalData } from '../../Contexts/PageContext';
import ExampleGen from '../../../API/ExampleGen/ExampleGen';


export default function ExampleButton(props) {
    const { code, setCode } = useContext(CodeData);
    const { setMData } = useContext(ModalData);
    const handleClick = () => {
        try {
            const language = code.language;
            const demo = ExampleGen(language);
            setCode(prev=> ({
                ...prev,
                unformatted: demo
            }));
        } catch (error) {
            setMData(prev => ({
                ...prev,
                alertModal: {
                    ...prev.alertModal,
                    open: true,
                    title: 'Alert',
                    msg: error.message
                }
            }
            )
            );
        }
    }
    return (
        <IconButton onClick={handleClick} {...props}>
            <Tooltip title='Example'>
                <AutoFixNormalIcon />
            </Tooltip>
        </IconButton>
    )
}