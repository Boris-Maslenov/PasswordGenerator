import React from 'react';
import { Container, Slider, Typography, FormControlLabel, Checkbox, Box, Button } from '@material-ui/core';


export const PasswordGeneratorVuew = ( {
            onStrategyChange, 
            acriveStrategies, 
            suggestedPassword, 
            length, strategyList, 
            onLengthChange, 
            minLength = 3, 
            maxLength = 15 } ) => {

                return <Container maxWidth="md">
                            <Typography variant="h2"  component="h1">
                                { suggestedPassword }
                            </Typography>
                            <Box display="flex" justifyContent="flex-start">
                                <Typography var="h3" component="h3">
                                    length: { length }
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="flex-start">
                                    <Slider
                                        value={length} 
                                        onChange={ (_, newValue) => onLengthChange(newValue) } 
                                        step={1} min={minLength} 
                                        max={maxLength}
                                     />
                            </Box>
                            <Box display="flex" justifyContent="flex-start">
                                    {
                                        strategyList.map( strategyName => < FormControlLabel
                                            label={strategyName}
                                            control={ 
                                                        <Checkbox 
                                                            checked={ acriveStrategies.includes( strategyName ) }
                                                            onChange={ () => onStrategyChange(strategyName) }
                                                            name={strategyName}
                                                            color={`primary`}
                                                        />
                                                    }
                                                                            />)
                                    }
                            </Box>
                        </Container>

}