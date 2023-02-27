import {Box, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, Select, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useValidator from "../../../utils/useValidator";
import * as Yup from 'yup';
import {useNavigate} from "react-router";

function Searchbar() {
    const navigate = useNavigate();
    const onSubmit = () => {
        const navigateUrl = `${values.source}?q=${values.keyword}`
        navigate(navigateUrl);
    }

    const {
        values,
        setValues,
        touched,
        errors,
        handleSubmit,
    } = useValidator({
        initialValues: {
            keyword: '',
            source: '',
        },
        validationSchema: Yup.object().shape({
            keyword: Yup.string().required('Enter a keyword.'),
            source: Yup.string().required('Select Source.'),
        }),
        onSubmit,
    });
    return (
        <Container sx={{my: 5}}>
            <Box sx={{flexGrow: 1, px: 5, mx: 5}}>
                <Grid item sm={12} sx={{pb: 1}}>
                    <Typography component="h2" variant="h4">
                        Search article
                    </Typography>
                </Grid>
                <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                placeholder="Enter a keyword for search article"
                                value={values.keyword}
                                onChange={(e) => setValues({...values, keyword: e.target.value})}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon/>
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                required
                            />
                            {touched?.keyword && errors?.keyword ? (
                                <FormHelperText error>{errors?.keyword}</FormHelperText>
                            ) : (
                                ''
                            )}
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Source</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Source"
                                    value={values.source}
                                    onChange={(e) => setValues({...values, source: e.target.value})}
                                >
                                    <MenuItem value='news-api'>News API</MenuItem>
                                    <MenuItem value='the-guardian'>The Guardian</MenuItem>
                                    <MenuItem value='new-york-times'>New York Times</MenuItem>
                                </Select>
                            </FormControl>
                            {touched?.source && errors?.source ? (
                                <FormHelperText error>{errors?.source}</FormHelperText>
                            ) : (
                                ''
                            )}
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button type="submit" variant="contained" size="large" color="warning" sx={{py: 2}}
                                    fullWidth>Search</Button>
                        </Grid>


                    </Grid>
                </form>
                <Grid item sm={16} sx={{pt: 3}}>
                    <Typography component="p" variant="small">
                        Search article from NewsAPI, The Guardian and New York times. Enter your keyword and select
                        article source.
                    </Typography>
                </Grid>
            </Box>
        </Container>
    )
}

export default Searchbar;