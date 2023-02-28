import {Card, CardContent, FormControl, InputLabel, Select} from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

function Sources({orderBy, setOrderBy}) {

    return (
        <Card>
            <CardContent>
                <Typography component="h4" variant="h6" mb={3}>Sort by</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Source</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Source"
                        value={orderBy}
                        onChange={(e) => setOrderBy(e.target.value)}
                    >
                        <MenuItem value='newest'>Newest</MenuItem>
                        <MenuItem value='oldest'>Oldest</MenuItem>
                        <MenuItem value='relevance'>Relevance</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    )
}

export default Sources;