import React, { useState } from 'react';
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@mui/material';
import { Delete, Favorite, FavoriteBorder, Save } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const CheckboxExample = () => {
    const [checked, setChecked] = useState();
    return (
        <FormControlLabel
            control={
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    // color='success'
                    sx={{ color: '#673ab7', '&.Mui-checked': { color: red[800] } }}
                    inputProps={{
                        'aria-label': 'secondary checkbox'
                    }}
                />
            }
            label='Testing Checkbox'
        />
    );
}

const TestPage = () => {
    return (
        <div>
            <CheckboxExample />
            <ButtonGroup
                variant='contained'
                size='large'
            >
                <Button
                    // disabled
                    // endIcon={<MusicNoteOutlined />}
                    startIcon={<Save />}
                    color='primary'
                >
                    Save
                </Button>
                <Button
                    startIcon={<Delete />}
                    color='secondary'
                >
                    Discard
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default TestPage;