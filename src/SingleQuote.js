import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SingleQuote({ quote }) {
    return (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {quote.text}
                </Typography>
                <Typography sx={{ my: 2 }} color="text.secondary">
                {quote.author}
                </Typography>
            </CardContent>
            </Card>
        </Box>
      );
}

export default SingleQuote;