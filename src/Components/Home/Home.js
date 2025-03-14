import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import JokeCard from '../JokeCard/JokeCard';

const Home = ({ jokes, getJokes, addJoke }) => {


    return (
        <div className='stackDiv'>
            <Stack
                direction="column"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                margin={2}
                width='100%'
                >
                <JokeCard jokes={jokes} addJoke={addJoke}/>
                <Button className='new-joke-button' variant='contained'  onClick={() => getJokes()}>New dad Joke</Button>

            </Stack>
        </div>
    )
}

export default Home
Home.propTypes = {
    jokes: PropTypes.object,
    getJokes: PropTypes.func,
    addJoke: PropTypes.func
}