export interface IWorkoutNote {
    key: number;
    content: string;
    width: number;
    height: number;
}

export interface IWorkout {
    key: number;
    name: string;
    description: string;
    notes: IWorkoutNote[];
    hashtags: string[];
}

export function clone(workout: IWorkout): IWorkout {
    return {
        ...workout,
        notes: workout.notes.map(note => ({ ...note })),
        hashtags: [...workout.hashtags]
    };
}

export function DefaultWorkout(): IWorkout {
    return {
        key: 0,
        name: "Running",
        description: "One leg after another, a workout can't get any simpler.",
        notes: [{
            key: 1,
            content: "watch out for cars",
            width: 250,
            height: 250
        },{
            key: 2,
            content: "watch out for pets",
            width: 250,
            height: 150
        }],
        hashtags: ["simple", "daily"]
    };
}