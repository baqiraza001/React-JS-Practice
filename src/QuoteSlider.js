import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import SingleQuote from "./SingleQuote";

function QuoteSlider() {
    const [quotes, setQuotes] = useState([]);
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
              await fetch(
                "https://type.fit/api/quotes"
              )
            ).json();
            setQuotes(data);
            setLoading(false);
        };
        dataFetch();
    }, []);

    const handleNextquote = () => quotes[quoteIndex+1] ? setQuoteIndex(quoteIndex+1) : setQuoteIndex(0);  
    const handlePrevquote = () => quotes[quoteIndex-1] ? setQuoteIndex(quoteIndex-1) : setQuoteIndex(quotes.length - 1);  
    
    return (
        <Box mt={5} display="flex" justifyContent="center" alignItems="center">
           {
                quotes.length === 0
                ?
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
                :
                <>
                    <Box position="relative" left={`40px`}>
                        <IconButton onClick={handlePrevquote} color="primary" aria-label="Previous">
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <SingleQuote quote={quotes[quoteIndex]}/>
                        <div>{quoteIndex+1} of {quotes.length}</div>
                    </Box>
                    <Box position="relative" right={`40px`}>
                        <IconButton onClick={handleNextquote} color="primary" aria-label="Previous">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </>
           }
        </Box>
    );
};

export default QuoteSlider;