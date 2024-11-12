import {Autocomplete, Button, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {fetchShows} from "../slices/showSlice.tsx";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";

const ShowSearch = () => {
    const dispatch = useAppDispatch();
    const shows = useAppSelector((state) => state.show.shows);
    const [request, setRequest] = useState("");

    useEffect(() => {
        if (request) {
            dispatch(fetchShows(request));
        }
    }, [dispatch, request]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (request) {
            dispatch(fetchShows(request));
        }
    };



    return (
        <>
            <Container maxWidth="lg">
                <form onSubmit={onSubmit}>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            mx: "auto",
                            borderRadius: "10px",
                            p: 4,
                        }}
                    >
                        <Grid size={12}>
                            <Autocomplete
                                options={shows.map((show) => show.name)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Search for TV Show"
                                        variant="outlined"
                                        onChange={(e) => setRequest(e.target.value)}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={12} sx={{ textAlign: "center" }}>
                            <Button
                                size="large"
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#451b52",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        border: "2px solid #451b52",
                                        color: '#451b52'
                                    },
                                }}
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                </Container>

        </>
    );
};

export default ShowSearch;