import {Card, CardContent, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../../Components/Loader";
import {useEffect} from "react";
import {getTheGuardianSources} from "../../../../stores/TheGuardian/actions";

function Sources({setSelectedSource, selectedSource}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTheGuardianSources())
    }, [dispatch]);

    const {theGuardianSources, isTheGuardianSourcesFetching, theGuardianSourceError} = useSelector(state => state?.TheGuardianReducer);

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
                {isTheGuardianSourcesFetching ?
                    <Loader/>
                    :
                    <div>
                        {theGuardianSources?.length > 0 ?
                            <FormGroup>
                                {theGuardianSources.map((source, index) => (

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={e => handleSource(e)}
                                            />}
                                        label={source?.webTitle}
                                        key={source?.id}
                                        value={source?.id}
                                    />

                                ))}
                            </FormGroup>
                            :
                            <Typography variant="p" color="error">No data found.</Typography>
                        }
                        {theGuardianSourceError &&
                            <Typography variant="p" color="error">{theGuardianSourceError}</Typography>
                        }

                    </div>

                }

            </CardContent>
        </Card>
    )
}

export default Sources;