import { Component } from "react";
import { Button, Grid, Stack } from "@mui/material";
import DifficultyIndicator from "./DifficultyIndicator";
import { TextField } from "@mui/material";
import { FormGroup } from "@mui/material";
import { Switch } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";

import BurgerImage from '../assets/img/burger.jpg'
import { UploadButton } from "./UploadButton";

class RecipeEditBody extends Component {

    constructor(props){
        super(props);
        
        this.handleSwitchToggle = this.handleSwitchToggle.bind(this);

        this.state = {
            isPosted : false
        };
    }

    handleSwitchToggle(event) {
        
        const checked = event.target.checked;

        this.setState({
            isPosted : checked
        });
    }

    render(){

        let postedStr = "";
        if (this.state.isPosted)
            postedStr = "Publicada";
        else
            postedStr = "No publicada";

        return (
            <>
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }} 
                p={12}
                direction='column'
            >
                <Grid item xs={4} sm={4} md={12}>
                    <TextField
                        required
                        fullWidth
                        id="recipe-name"
                        label="Nombre de la Receta"
                        name="recipe-name"
                        defaultValue={this.props.recipeName}
                    />
                </Grid>
                
                <Grid 
                    item
                    container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    alignContent='center'
                    alignItems='center'
                    justifyContent='center'
                >
                    
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <UploadButton text='Subir Imagen'></UploadButton>
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked={this.state.isPosted} onChange={this.handleSwitchToggle} />} label={postedStr} />
                    </FormGroup>
                    <FormHelperText>Presionar para que la receta se publique</FormHelperText>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Categorias"
                        multiline
                        helperText='Escriba las categorias separadas por una coma. Ejemplo (vegana, argentina)'
                        rows={4}
                        fullWidth
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                </Grid>
                
                <Grid item xs={4} sm={4} md={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Ingredientes"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={12}>
                    <DifficultyIndicator disabled={false} difficultyValue='4'></DifficultyIndicator>
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Procedimiento"
                        multiline
                        rows={4}
                        fullWidth
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={4}>
                    <Stack spacing={2} direction='row'>
                        <Button variant='contained' color="primary">Guardar Cambios</Button>
                        <Button variant='contained' color='error'>Eliminar Receta</Button>
                    </Stack>
                </Grid>
            </Grid>
            </>
        )
    }
}


RecipeEditBody.defaultProps = {
    recipeName : 'Hamburguesa',
};


export default RecipeEditBody;