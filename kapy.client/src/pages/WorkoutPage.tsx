import { Workout } from "../classes/Workout.ts";

interface WorkoutPageProps {
    workout: Workout;
}

function WorkoutPage({ workout }: WorkoutPageProps) {


    return (
        <div>
            {workout.name}
        </div>
    );
}

export default WorkoutPage;