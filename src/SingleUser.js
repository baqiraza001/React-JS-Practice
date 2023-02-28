import { Box, Link } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function SingleUser({ user }) {
    return (
        <Box>
           <Card sx={{ borderRadius: 0, margin: "10px", paddingTop: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <CardMedia
                    sx={{ width: "70px", height: "70px" }}
                    component="img"
                    image={user.avatar_url}
                />
                <CardActions>
                    <Link href={user.html_url} variant="body2">{user.login}</Link>
                </CardActions>
            </Card> 
        </Box>
    );
}

export default SingleUser;