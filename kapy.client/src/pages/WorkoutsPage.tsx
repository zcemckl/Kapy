import 'simplebar';  
import 'simplebar/dist/simplebar.css';  
import ResizeObserver from 'resize-observer-polyfill';  
import { DefaultWorkout, Workout } from '../classes/Workout.ts';  

window.ResizeObserver = ResizeObserver;  

interface WorkoutsPageProps {
    workouts: Workout[];  
    setPage: (page: string) => void;  
    setWorkout: (workout: Workout) => void;
    setWorkouts: (workouts: Workout[]) => void;
}  

interface WorkoutsLayoutProps {
    setPage: (page: string) => void;
    setWorkout: (workout: Workout) => void;
}

function WorkoutsPage({ workouts, setPage, setWorkout,setWorkouts }: WorkoutsPageProps) {  
    if (false) {
        setPage('workout');
        setWorkout(DefaultWorkout());
        setWorkouts([DefaultWorkout()]);
    }

    function handleClick(workout:Workout) {
        setPage('workout');
        setWorkout(workout);
    }

    return (  
        <div className="flex flex-col">  
            <div className="p-7 grid" style={{ gridTemplateColumns: "5rem auto" }}>  
                <span className="text-lg mr-4 font-bold m-auto" style={{ color: 'rgb(248, 246, 241)' }}>Filters:</span>  
                <div data-simplebar className="w-full max-h-20 overflow-y-auto">  
                    <div className="flex flex-row flex-wrap">
                        {workouts
                            .flatMap((workout) => workout.hashtags)
                            .filter((value, index, self) => self.indexOf(value) === index)
                            .map(hashtag => (<button key={hashtag} className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">{hashtag}</button>))}                        
                    </div>  
                </div>  
            </div>  
            <div data-simplebar className="w-full p-5" style={{ height: "calc(100svh - 20rem)" }}>  
                <div className="flex flex-row flex-wrap justify-center">  
                    {workouts.map(
                        (workout) => (<button key={workout.id} className="w-32 h-32 bg-red-500 m-5" onClick={() => handleClick(workout)}>{workout.name}</button>)
                    )}
                </div>  
            </div>  
        </div>  
    );  
}  

export function WorkoutsLayout({ setPage, setWorkout }: WorkoutsLayoutProps) {
    function handleClick() {
        setPage('workout');
        setWorkout(DefaultWorkout());
    }

    return (  
        <button onClick={handleClick}>              
            Add
        </button>  
    );  
}  

export default WorkoutsPage;