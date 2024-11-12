import ShowSearch from "./containers/ShowSearch/ShowSearch.tsx";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";

const App = () => {
    return (

        <>
            <header>
                <Box sx={{ flexGrow: 1 }}>
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
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: "uppercase" }}>
                                    TV Shows
                                </Typography>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            <main>
                <ShowSearch/>
            </main>
        </>
        );
};

export default App;
