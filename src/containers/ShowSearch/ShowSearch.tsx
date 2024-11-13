import {Autocomplete, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {fetchShows} from "../slices/showSlice.ts";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";

const ShowSearch = () => {
    const dispatch = useAppDispatch();
    const shows = useAppSelector((state) => state.show.shows);
    const [request, setRequest] = useState<string>("");
    const navigate = useNavigate();


    useEffect(() => {
        if (request) {
            dispatch(fetchShows(request));
        }
    }, [dispatch, request]);


    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{ padding: 4 }}>
                    <Grid size={12}>
                        <Autocomplete
                            options={shows}
                            getOptionLabel={(show) => show.name}
                            onInputChange={(_, value) => setRequest(value)}
                            renderInput={(params) => <TextField {...params} label="Search for TV Shows" />}
                            onChange={(_, value) => value && navigate(`/shows/${value.id}`)}
                        />
                    </Grid>
                </Grid>
            </Container>

        </>
    );
};

export default ShowSearch;