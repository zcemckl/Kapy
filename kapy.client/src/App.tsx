import { useState } from 'react';
import HomePage from './pages/HomePage';
import WorkoutsPage, { AddWorkout } from './pages/WorkoutsPage';
import WorkoutPage from './pages/WorkoutPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import { DefaultWorkout, Workout } from './classes/Workout.ts';  

const sampleWorkouts: Workout[] = [
    {
        "id": 1,
        "name": "W",
        "description": "W",
        "notes": ["", ""],
        "hashtags": ["Weight", "Chill"]
    },
    {
        "id": 2,
        "name": "W",
        "description": "W",
        "notes": ["", ""],
        "hashtags": ["Weight", "Chill"]
    },
    {
        "id": 3,
        "name": "Inclined Weighted Plank",
        "description": "Curl a dumbell while in inclined elbow plank position with legs spread",
        "notes": [
            "Focus on the core balance",
            "Don't focus on the curl",
            "Keep core tight, not slack",
            "Slightly bend legs"
        ],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 4,
        "name": "Guided wheel twist",
        "description": "Using elevated dumbell as a guide, twist body to feel it between the legs",
        "notes": [
            "Start with hinge position",
            "lifting leg should be lifted further",
            "twist slowly"
        ],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 5,
        "name": "Weighted Side Kneel",
        "description": "Kneel on one foot while holding a dumbbell and lean into direction of the foot",
        "notes": [
            "leg should starting at 90deg",
            "dumbbell should be held horizontal",
            "use cusion on kneeling knee",
            "hip should be following motion",
            "upperbody should not 'lead' hip motion",
            "hip, knee and body motion should be in line with foot"
        ],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 6,
        "name": "Seated good mornings",
        "description": "Lean forward with straight back",
        "notes": [
            "don't arch back",
            "don't worry about butt leaving seat",
            "Hold single weight with clasped hands between thumb and index",
            "should feel a stretch up the spine"
        ],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 7,
        "name": "Devil presses",
        "description": "burpees with weights",
        "notes": [
            "Make sure arms align with legs when rising"
        ],
        "hashtags": ["Core Endurance"]
    }
];

function App() {
    const [page, setPage] = useState('home');
    const [workouts, setWorkouts] = useState<Workout[]>(sampleWorkouts);
    const [workout, setWorkout] = useState<Workout>(DefaultWorkout());

    if (page == 'home') {
        return (
            <HomePage setPage={setPage}></HomePage>
        );
    }
         
    var pageComponent = (<ErrorPage></ErrorPage>);
    var pageButtons = (<ErrorPage></ErrorPage>);

    switch (page) {
        case 'workouts':
            pageComponent = (
                <WorkoutsPage workouts={workouts} setPage={setPage} setWorkout={setWorkout} setWorkouts={setWorkouts}></WorkoutsPage>
            );
            pageButtons = (<AddWorkout setPage={setPage} setWorkout={setWorkout}></AddWorkout>);
            break;
        case 'workout':
            pageComponent = (
                <WorkoutPage workout={ workout }></WorkoutPage>
            );
            pageButtons = (<button type='button' className='bg-red-300 h-16 w-30'>Save/Edit</button>);
            break;
        default:
            pageComponent = (
                <ErrorPage></ErrorPage>
            );
            break;
    };

    return (
        <Layout setPage={setPage} currentPage={page} currentPageButtons={pageButtons}>
            { pageComponent }
        </Layout>
    )
}

export default App;