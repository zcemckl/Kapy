import { IWorkout, clone } from "../classes/Workout.ts";
import ErrorPage from "./ErrorPage.tsx";
import WorkoutDataAccess from '../data/WorkoutDataAccess.ts';  

interface IWorkoutPageProps {
    workout: IWorkout;
    mode: string;
    setWorkout: (workout: IWorkout) => void;
}

interface IWorkoutLayoutProps {
    workout: IWorkout;
    mode: string;
    setMode: (mode: string) => void;
}

function WorkoutPage({ workout, mode, setWorkout }: IWorkoutPageProps) {
    function handleChange(callback: () => void) {
        callback();
        setWorkout(clone(workout));
    }
    function handleAddNoteClick() {
        const newKey = workout.notes.reduce((max, note) => Math.max(max, note.key), 0) + 1;
        workout.notes.push({ key: newKey, content: "", width: 250, height: 250 });
        setWorkout(clone(workout));
    }

    switch (mode) {
        case 'read':
            return (
                <div className='grid w-full h-full font-sans p-3' style={{ color: 'rgb(248, 246, 241)', gridTemplate: '50% 50% / 70% 30%' }}>
                    <div className='m-1 flex flex-col justify-between' style={{ gridArea: '1/1/2/2' }}>
                        <span className='text-3xl py-3'>
                            {workout.name}
                        </span>
                        <span className='text-lg min-h-40 h-full'>
                            {workout.description}
                        </span>
                        <div className='flex flex-row space-x-3 py-3'>
                            {workout.hashtags.map((hashtag, index) => (<span key={index} className='text-lg'>
                                #{hashtag}
                            </span>))}
                        </div>
                    </div>
                    <div className='rounded-lg m-1 grid' style={{ gridArea: '1/2/2/3', backgroundColor: 'rgba(247, 226, 198,0.6)', gridTemplateRows: '2rem auto' }}>
                        <span className='p-3 font-bold' style={{ color: 'rgb(32,52,98)' }} >
                            Sets
                        </span>
                        <div>
                        </div>
                    </div>
                    <div className='rounded-lg m-1 grid' style={{ gridArea: '2/1/3/2', backgroundColor: 'rgba(209, 193, 239,0.6)', gridTemplateRows: '2rem auto' }}>
                        <span className='p-3 font-bold opacity-100' style={{ color: 'rgb(32,52,98)' }} >
                            Notes
                        </span>
                        <div className='flex flex-row space-x-2 p-3' style={{ color: 'rgb(248, 246, 241)' }} >
                            {workout.notes.map((note, index) => (<span key={index} className='text-lg text-center m-auto' style={{ backgroundColor: 'rgb(255, 146, 86)', height: '', width: '' }} >
                                {note.content}
                            </span>))}
                        </div>
                    </div>
                    <div className='rounded-lg m-1 grid' style={{ gridArea: '2/2/3/3', backgroundColor: 'rgba(191, 223, 140,0.6)', gridTemplateRows: '2rem auto' }}>
                        <span className='p-3 font-bold' style={{ color: 'rgb(32,52,98)' }} >
                            Images
                        </span>
                        <div>
                        </div>
                    </div>
                </div>
            );
        case 'write':
            return (
                <div className='grid w-full h-full font-sans p-3' style={{ color: 'rgb(248, 246, 241)', gridTemplate: '50% 50% / 70% 30%' }}>
                    <div className='m-1 flex flex-col justify-between' style={{ gridArea: '1/1/2/2' }}>
                        <textarea className='text-3xl py-3 resize-none' value={workout.name} onChange={(e) => handleChange(() => {workout.name = e.target.value}) }>
                        </textarea>
                        <textarea className='text-lg min-h-40 h-full resize-none' value={workout.description} onChange={(e) => handleChange(() => { workout.description = e.target.value })}>
                        </textarea>
                        <div className='flex flex-row space-x-3 py-3'>
                            {workout.hashtags.map((hashtag, index) => (
                                <div>
                                    <span key={index} className='text-lg'>#</span>
                                    <input key={index} className='text-lg' value={hashtag} onChange={(e) => handleChange(() => { hashtag = e.target.value })} />
                                </div>))}
                        </div>
                    </div>
                    <div className='rounded-lg m-1 grid' style={{ gridArea: '1/2/2/3', backgroundColor: 'rgba(247, 226, 198,0.6)', gridTemplateRows: '2rem auto' }}>
                        <span className='p-3 font-bold' style={{ color: 'rgb(32,52,98)' }} >
                            Sets
                        </span>
                        <div>
                        </div>
                    </div>
                    <div className='rounded-lg m-1 grid' style={{ gridArea: '2/1/3/2', backgroundColor: 'rgba(209, 193, 239,0.6)', gridTemplateRows: '2rem auto' }}>
                        <span className='p-3 font-bold opacity-100' style={{ color: 'rgb(32,52,98)' }} >
                            Notes
                        </span>
                        <button className='bg-green-300 h-16 w-30' onClick={ handleAddNoteClick }>
                            +
                        </button>
                        <div className='flex flex-row space-x-2 p-3 resize' style={{ color: 'rgb(248, 246, 241)' }} >
                            {workout.notes.map((note, index) =>
                            (<textarea key={index}
                                className='text-lg text-center m-auto'
                                style={{ backgroundColor: 'rgb(255, 146, 86)', resize: 'both', width: { note.width }, height: { note.height } }}
                                value={note.content}
                                onChange={(e) => handleChange(() => { note.content = e.target.value })}>
                            </textarea>))}
                        </div>
                    </div>
                    <div className='rounded-lg m-1 grid' style={{ gridArea: '2/2/3/3', backgroundColor: 'rgba(191, 223, 140,0.6)', gridTemplateRows: '2rem auto' }}>
                        <span className='p-3 font-bold' style={{ color: 'rgb(32,52,98)' }} >
                            Images
                        </span>
                        <div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <ErrorPage></ErrorPage>
            );
    }
}

export function WorkoutLayout({ workout, mode, setMode }: IWorkoutLayoutProps) {
    function handleClick() {
        if (mode == 'write') {
            if (workout.key == 0) {
                delete workout.key; 
                WorkoutDataAccess.getInstance().addWorkout(workout);
            }
            else {
                WorkoutDataAccess.getInstance().updateWorkout(workout);
            }
        }

        setMode(mode == 'read' ? 'write' : 'read');
    }

    switch (mode) {
        case 'read':
            return (<button type='button' className='bg-green-300 h-16 w-30' onClick={handleClick}>Edit</button>);
        case 'write':
            return (<button type='button' className='bg-red-300 h-16 w-30' onClick={handleClick}>Save</button>);
        default:
            return (
                <ErrorPage></ErrorPage>
            );
    }
}

export default WorkoutPage;