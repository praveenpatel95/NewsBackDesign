import {Card, CardContent, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {getNewsAPISources} from "../../../../stores/NewsApi/actions";
import Loader from "../../../../Components/Loader";
import {useEffect} from "react";

function Sources({setSelectedSource, selectedSource}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsAPISources())
    }, [dispatch]);

    const {isNewsApiSourcesFetching, newsAPISources, newsAPISourceError} = useSelector(state => state?.NewsAPIReducer);

    const handleSource = (event) => {
        const target = event.target;
        let value = target.value;
        if (target.checked) {
            setSelectedSource([...selectedSource, value]);
        } else {
            setSelectedSource(
                selectedSource.filter((source) => source !== value),
            );
        }
    }
    return (
        <Card>
            <CardContent>
                <Typography component="h4" variant="h6">Filter by sources</Typography>
                {isNewsApiSourcesFetching ?
                    <Loader/>
                    :
                    <div>
                        {newsAPISources?.length > 0 ?
                            <FormGroup>
                                {newsAPISources.map((source, index) => (

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={e => handleSource(e)}
                                            />}
                                        label={source?.name}
                                        key={source?.id}
                                        value={source?.id}
                                    />

                                ))}
                            </FormGroup>
                            :
                            <Typography variant="p" color="error">No data found.</Typography>
                        }
                        {newsAPISourceError &&
                            <Typography variant="p" color="error">{newsAPISourceError}</Typography>
                        }

                    </div>

                }

            </CardContent>
        </Card>
    )
}

export default Sources;