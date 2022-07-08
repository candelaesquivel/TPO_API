
import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Grid } from "@mui/material";
import PasswordIcon from '@mui/icons-material/Password';
import ResponsiveDialog  from '../Misc/ResponsiveDialog';
import { validateNameOrLastName, validatePhone } from "../../utilities/ValidateHandlers";
import React, { useState} from 'react';

export function ResetDataBody(props){

    const [hasError, setHasError] = useState(false)

    let validateFunc;
    let defaultErrorMsg;

    if (props.inputLabel == 'Nombre')
    {
        validateFunc = validateNameOrLastName
        defaultErrorMsg = 'Se requieren al menos 2 caracteres para el nombre'

    }
    else if (props.inputLabel == 'Apellido')
    {
        validateFunc = validateNameOrLastName
        defaultErrorMsg = 'Se requieren al menos 2 caracteres para el apellido'
    }
    else if (props.inputLabel == 'Teléfono')
    {
        validateFunc = validatePhone
        defaultErrorMsg = 'Se requieren al menos 5 caracteres para el tlf y que sean todos numericos'
    }

    return(

        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
            </Box>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <PasswordIcon/>
            </Avatar>
            <Typography variant='h6'>
                {props.title}
            </Typography>

            <Box component="form" noValidate sx={{ mt: 3 }} >
                <Grid container spacing={2}>
                
                    <Grid item xs={12}>
                        <TextField
                        required
                        fullWidth
                        id="name"
                        label={props.inputLabel}
                        name="name"
                        autoComplete="name"
                        error={hasError}
                        helperText={hasError ? defaultErrorMsg : ""}
                        />
                    </Grid>

                    

                    <Grid item xs={12} sm={6}>
                        <ResponsiveDialog
                            buttonText = {'Modificar'}
                            messageTittle = ''
                            messageText={props.inputLabel + ' modificado correctamente'}
                            dialogOptionText = 'Salir'
                        >

                        </ResponsiveDialog>
                    </Grid>
        
                </Grid>
            </Box>

        </Container>
    );
}