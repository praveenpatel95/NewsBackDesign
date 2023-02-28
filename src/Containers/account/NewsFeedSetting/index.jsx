import {Helmet, HelmetProvider} from "react-helmet-async";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel, Select,
} from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function NewsFeedSetting() {
    const categories = [
        'Entertainment',
        'Sports',
        'Technology',
        'Fashion',
        'World',
        'Movies',
    ];

    const authors = [
        'Leo Tolstoy',
        'Mark Twain',
        'Stephen King',
        'Jane Austen',
        'Charles Dickens',
    ]
    return (
        <HelmetProvider>
            <Helmet>
                <title>Change Password</title>
            </Helmet>
            <Container
                maxWidth="sm"
                sx={{
                    py: '60px'
                }}
            >

                <Card pt={3} pb={2} px={4}>
                    <CardContent>
                        <Typography variant="h4" mb={5}>
                            News Feed Setting
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} mb={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Source</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select Source"
                                    >
                                        <MenuItem value='news-api'>News API</MenuItem>
                                        <MenuItem value='the-guardian'>The Guardian</MenuItem>
                                        <MenuItem value='new-york-times'>New York Times</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} mb={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select Source"
                                    >
                                        {categories?.map((category) => (
                                            <MenuItem value={category}>{category}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} mb={3}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Authors</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select Source"
                                    >
                                        {authors?.map((author) => (
                                            <MenuItem value={author}>{author}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} mb={3}>
                                <Button type="submit" variant="contained" size="large" color="warning" sx={{py: 2}}
                                        fullWidth>Save Setting</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

            </Container>
        </HelmetProvider>
    )
}

export default NewsFeedSetting;