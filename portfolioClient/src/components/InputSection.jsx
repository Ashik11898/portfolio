import React from 'react';
import { TextField, Button, Typography, Box, Stack, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const InputSection = ({ title, items, fields, handleChange, addField, removeField }) => {

let currentIndex = items.length -1

  return (
          <>
                <Typography variant="h6" color='red'>{title}</Typography>
                {items.map((item, index) => (
                  <Paper key={index} sx={{ p: 2, mb: 2, mt:2}}>
                    <Typography variant="h6" color='red'>Company:{index+1}</Typography>
                    <Stack spacing={2}>
                    
                      {fields.map(({ label, key, isNested, fields: nestedFields }) => (
                        <Box key={key} sx={{ flex: 1, mb: 2 }}>
                          {isNested && Array.isArray(item[key]) ? (
                            <>
                              <Typography variant="subtitle1">Total {label}:{items[index].projects.length}</Typography>
                              {item[key].map((nestedItem, nestedIndex) => (
                                
                                <Paper key={`nested`+nestedIndex+1} sx={{ p: 2, mb: 1 }} >
                                  <p>project:{nestedIndex+1}</p>
                                  {nestedFields.map(({ label: nestedLabel, key: nestedKey }) => (
                                    <TextField
                                      fullWidth
                                      label={nestedLabel}
                                      value={nestedItem[nestedKey]}
                                      onChange={(e) =>
                                        handleChange(
                                          e,
                                          title.toLowerCase(),
                                          index,
                                          key,
                                          nestedIndex,
                                          nestedKey
                                        )
                                      }
                                      key={nestedKey}
                                      variant="outlined"
                                      sx={{ mb: 1 }}
                                    />
                                  ))}
                                  
                                
                                </Paper>
                                
                              
                              ))}
                              <button onClick={() =>addField(currentIndex,"add-projects",index)}>
                                Add Project
                              </button>
                            </>
                          ) : (
                            <TextField
                              fullWidth
                              label={label}
                              value={item[key]}
                              onChange={(e) => handleChange(e, title.toLowerCase(), index, key)}
                              variant="outlined"
                              sx={{ mb: 1 }}
                            />
                          )}
                        </Box>
                      ))}
                    </Stack>
                    <Box sx={{ textAlign: "right" }}>
                      <IconButton color="error" onClick={() => removeField(title.toLowerCase(), index)}>
                        Remove Experience
                      </IconButton>
                     
                    </Box>
                  </Paper>
                ))}
                 <Button variant="contained" color="success" sx={{ mb: 5}} onClick={()=>addField(currentIndex,"add-experience")}>Add {title}</Button>

          </>
  );
}

export default InputSection;
