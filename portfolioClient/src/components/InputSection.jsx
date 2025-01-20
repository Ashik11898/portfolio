import React from 'react';
import { TextField, Button, Typography, Box, Stack, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const InputSection = ({ title, items, fields, handleChange, addField, removeField }) => {
//   items.forEach(data => console.log("each ", data));
console.log("items",items);

  return (
   <>
{items.map((item, index) => (
  <Paper key={index} sx={{ p: 2, mb: 2 }}>
    <Stack spacing={2}>
      {fields.map(({ label, key, isNested, fields: nestedFields }) => (
        <Box key={key} sx={{ flex: 1, mb: 2 }}>
          {isNested && Array.isArray(item[key]) ? (
            <>
              <Typography variant="subtitle1">{label}</Typography>
              {item[key].map((nestedItem, nestedIndex) => (
                <Paper key={nestedIndex} sx={{ p: 2, mb: 1 }}>
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
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  ))}
                  <Button
                    variant="text"
                    color="error"
                    onClick={() =>
                      removeField(`${title.toLowerCase()}[${index}].${key}`, nestedIndex)
                    }
                  >
                    Remove Project
                  </Button>
                </Paper>
              ))}
              <Button
                variant="text"
                color="primary"
                onClick={() =>
                  addField(`${title.toLowerCase()}[${index}].${key}`, {
                    name: "",
                    responsibilities: "",
                    technologies: "",
                  })
                }
              >
                Add Project
              </Button>
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

   </>
  );
}

export default InputSection;
