import { FormControl, InputLabel, Select, MenuItem, } from "@mui/material"
import useNews from "../hooks/useNews"


const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertaiment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Technology'},
]

function Form() {

    const {category, handleChangeCategory} = useNews()

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select 
                label='Category'
                onChange={handleChangeCategory}
                value={category}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem 
                        key={categoria.value}
                        value={categoria.value}
                    >
                        {categoria.label}
                    </MenuItem>
                ))}

            </Select>

            
        </FormControl>
    </form>
  )
}

export default Form