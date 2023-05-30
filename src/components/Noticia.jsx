import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"
import moment from 'moment';

const Noticia = ({noticia}) => {

  const {urlToImage, url, title, description, source, publishedAt} = noticia

  const fecha = moment(publishedAt)
  const fechaFormateada = fecha.format('DD/MM/YYYY')
  return (
    <Grid item md={6} lg={4}>
      <Card>

        {urlToImage && (
          <CardMedia
          component="img"
          alt={`News Image ${title}`}
          image={urlToImage}
          height={'250px'}
        />

        )}

        <CardContent
        >
          <Typography variant="body1" color='error'>
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2">
            {description}
          </Typography>

          <Typography 
            variant="body2" 
            marginY={2}
            color={'error'}
          >
            {fechaFormateada}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={'100%'}
            textAlign={'center'}
            sx={{
              textDecoration: 'none'
            }}
          >
            See More
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia