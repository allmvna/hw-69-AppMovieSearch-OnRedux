import ShowDetails from "../ShowDetails/ShowDetails.tsx";
import ShowSearch from "../ShowSearch/ShowSearch.tsx";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";


const SearchApp = () => {
    return (
        <>
            <header>
                <Box sx={{flexGrow: 1}}>
                    <AppBar
                        position="static"
                        sx={{
                            padding: "10px",
                            backgroundColor: "#3e2648",
                        }}
                    >
                        <Toolbar>
                            <Container
                                sx={{
                                    width: "100%",
                                }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        flexGrow: 1,
                                        textTransform: "uppercase",
                                        textDecoration: "none",
                                        color: "#ffff"
                                    }}>
                                    TV Shows
                                </Typography>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            <main>
                <Container>
                    <ShowSearch />
                    <Routes>
                        <Route path="/shows/:id" element={<ShowDetails />} />
                    </Routes>
                </Container>
            </main>
        </>
    );
};

export default SearchApp;