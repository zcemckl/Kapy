import { useState } from 'react';
import HomePage from './pages/HomePage';
import WorkoutsPage, { WorkoutsLayout } from './pages/WorkoutsPage';
import WorkoutPage, { WorkoutLayout } from './pages/WorkoutPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import { DefaultWorkout, IWorkout } from './models/Workout.ts';

//const sampleWorkouts: IWorkout[] = [
//    {
//        key: 1,
//        name: "V",
//        description: "V",
//        notes: [{
//            key: 1,
//            content: "",
//            width: 100,
//            height: 100
//        }, {
//            key: 2,
//            content: "",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Weight", "Chill"]
//    },
//    {
//        key: 2,
//        name: "W",
//        description: "W",
//        notes: [{
//            key: 3,
//            content: "",
//            width: 100,
//            height: 100
//        }, {
//            key: 4,
//            content: "",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Weight", "Chill"]
//    },
//    {
//        key: 3,
//        name: "Inclined Weighted Plank",
//        description: "Curl a dumbell while in inclined elbow plank position with legs spread",
//        notes: [{
//            key: 5,
//            content: "Focus on the core balance",
//            width: 100,
//            height: 100
//        }, {
//            key: 6,
//            content: "Don't focus on the curl",
//            width: 100,
//            height: 100
//        }, {
//            key: 7,
//            content: "Keep core tight, not slack",
//            width: 100,
//            height: 100
//        }, {
//            key: 8,
//            content: "Slightly bend legs",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Core Endurance"]
//    },
//    {
//        key: 4,
//        name: "Guided wheel twist",
//        description: "Using elevated dumbell as a guide, twist body to feel it between the legs",
//        notes: [{
//            key: 9,
//            content: "Start with hinge position",
//            width: 100,
//            height: 100
//        }, {
//            key: 10,
//            content: "lifting leg should be lifted further",
//            width: 100,
//            height: 100
//        }, {
//            key: 11,
//            content: "twist slowly",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Core Endurance"]
//    },
//    {
//        key: 5,
//        name: "Weighted Side Kneel",
//        description: "Kneel on one foot while holding a dumbbell and lean into direction of the foot",
//        notes: [{
//            key: 12,
//            content: "leg should starting at 90deg",
//            width: 100,
//            height: 100
//        }, {
//            key: 13,
//            content: "dumbbell should be held horizontal",
//            width: 100,
//            height: 100
//        }, {
//            key: 14,
//            content: "use cusion on kneeling knee",
//            width: 100,
//            height: 100
//        }, {
//            key: 15,
//            content: "hip should be following motion",
//            width: 100,
//            height: 100
//        }, {
//            key: 16,
//            content: "upperbody should not 'lead' hip motion",
//            width: 100,
//            height: 100
//        }, {
//            key: 17,
//            content: "hip, knee and body motion should be in line with foot",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Core Endurance"]
//    },
//    {
//        key: 6,
//        name: "Seated good mornings",
//        description: "Lean forward with straight back",
//        notes: [{
//            key: 18,
//            content: "don't arch back",
//            width: 100,
//            height: 100
//        }, {
//            key: 19,
//            content: "don't worry about butt leaving seat",
//            width: 100,
//            height: 100
//        }, {
//            key: 20,
//            content: "Hold single weight with clasped hands between thumb and index",
//            width: 100,
//            height: 100
//        }, {
//            key: 21,
//            content: "should feel a stretch up the spine",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Core Endurance"]
//    },
//    {
//        key: 7,
//        name: "Devil presses",
//        description: "burpees with weights",
//        notes: [{
//            key: 22,
//            content: "Make sure arms align with legs when rising",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Core Endurance"]
//    },
//    {
//        key: 8,
//        name: "Squat",
//        description: "squat",
//        notes: [{
//            key: 23,
//            content: "Elbows below bar",
//            width: 100,
//            height: 100
//        }, {
//            key: 24,
//            content: "Legs shouldnt cave inwards",
//            width: 100,
//            height: 100
//        }, {
//            key: 25,
//            content: "Legs should be hip width and kept loose",
//            width: 100,
//            height: 100
//        }],
//        hashtags: ["Squat"]
//    }
//];

function App() {
    const [page, setPage] = useState('home');
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
                <WorkoutsPage setPage={setPage} setWorkout={setWorkout}></WorkoutsPage>
            );
            pageButtons = (<WorkoutsLayout setPage={setPage} setWorkout={setWorkout}></WorkoutsLayout>);
            break;
        case 'workout':
            pageComponent = (
                <WorkoutPage workout={workout} mode={workoutPageMode} setWorkout={setWorkout}></WorkoutPage>
            );
            pageButtons = (<WorkoutLayout workout={workout} mode={workoutPageMode} setMode={setWorkoutPageMode}></WorkoutLayout>);
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