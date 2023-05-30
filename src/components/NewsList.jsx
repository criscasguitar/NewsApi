import Grid from "@mui/material/Grid"
import Typography  from "@mui/material/Typography"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNews from "../hooks/useNews"
import Noticia from "./Noticia"

function NewsList() {

    const {noticias, totalNews, handleChangePage, pagina} = useNews()

    const totalPages = Math.ceil(totalNews / 20);
    console.log(totalPages)

  return (
    <>
        <Typography
            textAlign={'center'}  
            marginY={5}
            variant="h3"
            component={"h2"}
        >
            Latest news
        </Typography>

        <Grid
            container
            spacing={2}
        >
            
            {noticias.map(noticia => (
                <Noticia
                    noticia={noticia}
                    key={noticia.url}
                />
            ))}
        </Grid>

        <Stack 
            sx={{
                marginY: 4
            }}
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Pagination 
                count={totalPages} 
                color="primary" 
                onChange={handleChangePage}
                page={pagina}
            />
            
        </Stack>
    </>
  )
}

export default NewsList