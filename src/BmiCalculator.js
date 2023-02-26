import BmiRangeSlider from "./BmiRangeSlider";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Chip } from "@mui/material";
import { useMemo, useState } from "react";

function BmiCalculator({ title }) {
    
    const [weight, setWeight] = useState(40);
    const [height, setHeight] = useState(140);

    const bmiValue = useMemo( () => {
        const heightSquare = (height / 100) * (height / 100); //divided by 100 to convert height into meteres first
        return ( weight / heightSquare ).toFixed(1);
    }, [weight, height]);

    return (
        <Box display="flex" sx={{ "width": "500px" }} margin="auto" justifyContent="center" flex="1">
            <Card sx={{ "borderRadius": 0, width: "500px" }}>
                <CardHeader
                    sx={{ "backgroundColor": "#1b1096", color: "White" }}
                    title={<Typography variant="h4">{title}</Typography>}
                    disableTypography
                />
                <CardContent>
                    <BmiRangeSlider title="Weight" unit="kg" minValue={40} maxValue={220} value={weight} setValue={setWeight} />
                    <BmiRangeSlider title="Height" unit="cm" minValue={140} maxValue={220} value={height} setValue={setHeight} />
                    <Box>
                        <Typography gutterBottom>Your BMI is</Typography>
                        <Chip label={bmiValue} sx={{ "backgroundColor": "#1b1096", "padding": "20px 10px", "borderRadius": "20px"}} color="primary" />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default BmiCalculator;