import { Workout } from "../classes/Workout.ts";

interface WorkoutPageProps {
    workout: Workout;
}

function WorkoutPage({ workout }: WorkoutPageProps) {
    return (
        <div className='flex flex-col w-full h-full font-sans'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-7/10 text-3xl'>
                    <span>
                        {workout.name}
                    </span>
                    <span className='h-auto text-lg'>
                        {workout.description}
                    </span>
                    <div className='flex flex-row text-lg space-x-3'>                        
                        {workout.hashtags.map((hashtag) => (<span className='text-lg'>
                            #{hashtag}
                        </span>))}
                    </div>
                </div>
                <div className='w-3/10'>
                    {}
                </div>

            </div>
            <div className='flex flex-row'>
                <div className='w-6/10'>
                    {workout.notes}
                </div>
                <div className='w-4/10'>
                    {}
                </div>
            </div>
        </div>
    );
}

export default WorkoutPage;