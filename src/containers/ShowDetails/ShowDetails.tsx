import {Alert, Box, Card, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {fetchShowDetails} from "../slices/showDetailsSlice.ts";
import {useEffect} from "react";
import Preloader from "../../UI/Preloader/Preloader.tsx";


const ShowDetails = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const showDetails = useAppSelector((state) => state.showDetails.showDetails);
    const { isLoading, error } = useAppSelector((state) => state.showDetails);

    useEffect(() => {
        if (id) dispatch(fetchShowDetails(Number(id)));
    }, [dispatch, id]);


    return (
        <>
            {isLoading ? (
            <Preloader />
        ) : error ? (
            <Alert severity="error">No data. Try again!</Alert>
        ) : (
            <Container sx={{ mt: 3 }}>
                {showDetails && (
                    <>
                        <Card sx={{ p: 3, border: '2px solid #3e2648' }}>
                            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold'}}>{showDetails.name}</Typography>
                            <Box sx={{ display: 'flex' }}>
                                {showDetails.image && (
                                    <img src={showDetails.image.medium} alt={showDetails.name} style={{ marginRight: 20 }} />
                                )}
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    {showDetails.genres && showDetails.genres.length > 0 ? (
                                        <Typography sx={{ mb: 1, fontWeight: 'bold' }}>
                                            Genre: {showDetails.genres[0]}
                                        </Typography>
                                    ) : (
                                        <Typography sx={{ mb: 1}}>
                                            Genre: No data available
                                        </Typography>
                                    )}

                                    <Typography sx={{ mb: 1, fontWeight: 'bold' }}>
                                        Premiere: {showDetails.premiered || "No date available"}
                                    </Typography>
                                    <strong>Theme: </strong>
                                    {showDetails.summary ? (
                                        <span dangerouslySetInnerHTML={{ __html: showDetails.summary }} />
                                    ) : (
                                        "No data available."
                                    )}
                                </Typography>
                            </Box>
                        </Card>
                    </>
                )}
            </Container>
            )}
        </>
    );
};

export default ShowDetails;