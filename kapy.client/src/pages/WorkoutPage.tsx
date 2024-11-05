import { Workout } from "../classes/Workout.ts";

interface WorkoutPageProps {
    workout: Workout;
    mode: string;
}

interface WorkoutLayoutProps {
    mode: string;
    setMode: (mode: string) => void;
}

function WorkoutPage({ workout, mode }: WorkoutPageProps) {
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
                                {note}
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
                        <textarea className='text-3xl py-3 resize-none' >
                            {workout.name}
                        </textarea>
                        <textarea className='text-lg min-h-40 h-full resize-none'>
                            {workout.description}
                        </textarea>
                        <div className='flex flex-row space-x-3 py-3'>
                            {workout.hashtags.map((hashtag, index) => (<input key={index} className='text-lg'>
                                #{hashtag}
                            </input>))}
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
                        <div className='flex flex-row space-x-2 p-3 resize' style={{ color: 'rgb(248, 246, 241)' }} >
                            {workout.notes.map((note, index) => (<textarea key={index} className='text-lg text-center m-auto' style={{ backgroundColor: 'rgb(255, 146, 86)', resize: 'both' }} >
                                {note}
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

export function WorkoutLayout({ mode, setMode }: WorkoutLayoutProps) {
    function handleClick() {
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