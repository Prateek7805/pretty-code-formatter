import React from "react";
import { IconButton } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';
export default function CopyTextButton(props){
    return (
        <Tooltip title='Copy'>
            <IconButton className='copy-btn' variant='outlined' {...props}>
                <ContentCopy/>
            </IconButton>
        </Tooltip>
    )
}