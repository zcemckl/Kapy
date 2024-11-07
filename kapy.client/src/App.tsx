import { useState } from 'react';
import HomePage from './pages/HomePage';
import WorkoutsPage, { WorkoutsLayout } from './pages/WorkoutsPage';
import WorkoutPage, { WorkoutLayout } from './pages/WorkoutPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import { DefaultWorkout, IWorkout } from './classes/Workout.ts';  

const sampleWorkouts: IWorkout[] = [
    {
        "id": 1,
        "name": "V",
        "description": "V",
        "notes": [{
            id: 1,
            content: "",
            width: 100,
            height: 100
        }, {
            id: 2,
            content: "",
            width: 100,
            height: 100
        }],
        "hashtags": ["Weight", "Chill"]
    },
    {
        "id": 2,
        "name": "W",
        "description": "W",
        "notes": [{
            id: 3,
            content: "",
            width: 100,
            height: 100
        }, {
            id: 4,
            content: "",
            width: 100,
            height: 100
        }],
        "hashtags": ["Weight", "Chill"]
    },
    {
        "id": 3,
        "name": "Inclined Weighted Plank",
        "description": "Curl a dumbell while in inclined elbow plank position with legs spread",
        "notes": [{
            id: 5,
            content: "Focus on the core balance",
            width: 100,
            height: 100
        }, {
            id: 6,
            content: "Don't focus on the curl",
            width: 100,
            height: 100
        }, {
            id: 7,
            content: "Keep core tight, not slack",
            width: 100,
            height: 100
        }, {
            id: 8,
            content: "Slightly bend legs",
            width: 100,
            height: 100
        }],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 4,
        "name": "Guided wheel twist",
        "description": "Using elevated dumbell as a guide, twist body to feel it between the legs",
        "notes": [{
            id: 9,
            content: "Start with hinge position",
            width: 100,
            height: 100
        }, {
            id: 10,
            content: "lifting leg should be lifted further",
            width: 100,
            height: 100
        }, {
            id: 11,
            content: "twist slowly",
            width: 100,
            height: 100
        }],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 5,
        "name": "Weighted Side Kneel",
        "description": "Kneel on one foot while holding a dumbbell and lean into direction of the foot",
        "notes": [{
            id: 12,
            content: "leg should starting at 90deg",
            width: 100,
            height: 100
        }, {
            id: 13,
            content: "dumbbell should be held horizontal",
            width: 100,
            height: 100
        }, {
            id: 14,
            content: "use cusion on kneeling knee",
            width: 100,
            height: 100
        }, {
            id: 15,
            content: "hip should be following motion",
            width: 100,
            height: 100
        }, {
            id: 16,
            content: "upperbody should not 'lead' hip motion",
            width: 100,
            height: 100
        }, {
            id: 17,
            content: "hip, knee and body motion should be in line with foot",
            width: 100,
            height: 100
        }],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 6,
        "name": "Seated good mornings",
        "description": "Lean forward with straight back",
        "notes": [{
            id: 18,
            content: "don't arch back",
            width: 100,
            height: 100
        }, {
            id: 19,
            content: "don't worry about butt leaving seat",
            width: 100,
            height: 100
        }, {
            id: 20,
            content: "Hold single weight with clasped hands between thumb and index",
            width: 100,
            height: 100
        }, {
            id: 21,
            content: "should feel a stretch up the spine",
            width: 100,
            height: 100
        }],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 7,
        "name": "Devil presses",
        "description": "burpees with weights",
        "notes": [{
            id: 22,
            content: "Make sure arms align with legs when rising",
            width: 100,
            height: 100
        }],
        "hashtags": ["Core Endurance"]
    },
    {
        "id": 8,
        "name": "Squat",
        "description": "squat",
        "notes": [{
            id: 23,
            content: "Elbows below bar",
            width: 100,
            height: 100
        }, {
            id: 24,
            content: "Legs shouldnt cave inwards",
            width: 100,
            height: 100
        }, {
            id: 25,
            content: "Legs should be hip width and kept loose",
            width: 100,
            height: 100
        }],
        "hashtags": ["Squat"]
    }
];

function App() {
    const [page, setPage] = useState('home');
    const [workouts, setWorkouts] = useState<IWorkout[]>(sampleWorkouts);
    const [workout, setWorkout] = useState<IWorkout>(DefaultWorkout());
    const [workoutPageMode, setWorkoutPageMode] = useState('read');

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
            pageButtons = (<WorkoutsLayout setPage={setPage} setWorkout={setWorkout}></WorkoutsLayout>);
            break;
        case 'workout':
            pageComponent = (
                <WorkoutPage workout={workout} mode={workoutPageMode} setWorkout={setWorkout}></WorkoutPage>
            );
            pageButtons = (<WorkoutLayout mode={workoutPageMode} setMode={setWorkoutPageMode}></WorkoutLayout>);
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