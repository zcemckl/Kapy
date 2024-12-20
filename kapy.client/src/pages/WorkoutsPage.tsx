import 'simplebar';  
import 'simplebar/dist/simplebar.css';  
import ResizeObserver from 'resize-observer-polyfill';  
import { DefaultWorkout, IWorkout } from '../models/Workout.ts';  
import WorkoutDataAccess from '../data/WorkoutDataAccess.ts';
import { useEffect, useState } from 'react';

window.ResizeObserver = ResizeObserver;  

interface IWorkoutsPageProps {
    setPage: (page: string) => void;  
    setWorkout: (workout: IWorkout) => void;
}  

interface IWorkoutsLayoutProps {
    setPage: (page: string) => void;
    setWorkout: (workout: IWorkout) => void;
}

function WorkoutsPage({ setPage, setWorkout }: IWorkoutsPageProps) {  
    const [allWorkouts, setAllWorkouts] = useState<IWorkout[]>([]);
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() =>
    {
        const getWorkouts = async () => {
            setAllWorkouts(await WorkoutDataAccess.getInstance().getWorkouts());
        }

        getWorkouts();
    });

    function handleWorkoutClick(workout:IWorkout) {
        setPage('workout');
        setWorkout(workout);
    }

    async function handleFilterClick(hashtag: string) {
        if (filters.includes(hashtag)) {
            setFilters(filters.filter(filter => filter !== hashtag));
        }
        else {
            setFilters([...filters, hashtag]);
        }
    }

    return (  
        <div className="flex flex-col">  
            <div className="p-7 grid" style={{ gridTemplateColumns: "5rem auto" }}>  
                <span className="text-lg mr-4 font-bold m-auto" style={{ color: 'rgb(248, 246, 241)' }}>Filters:</span>  
                <div data-simplebar className="w-full max-h-20 overflow-y-auto">  
                    <div className="flex flex-row flex-wrap">
                        {allWorkouts
                            .flatMap((workout) => workout.hashtags)
                            .filter((value, index, self) => self.indexOf(value) === index)
                            .map(hashtag => (<button key={hashtag} className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded" onClick={() => handleFilterClick(hashtag)}>{hashtag}</button>))}                        
                    </div>  
                </div>  
            </div>  
            <div data-simplebar className="w-full p-5" style={{ height: "calc(100svh - 20rem)" }}>  
                <div className="flex flex-row flex-wrap justify-center">  
                    {allWorkouts.filter(workout => filters.length != 0 ? filters.some(filter => workout.hashtags.includes(filter)) : true)
                        .map((workout) => (<button key={workout.key} className="w-32 h-32 bg-red-500 m-5" onClick={() => handleWorkoutClick(workout)}>{workout.name}</button>)
                    )}
                </div>  
            </div>  
        </div>  
    );  
}  

export function WorkoutsLayout({ setPage, setWorkout }: IWorkoutsLayoutProps) {
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