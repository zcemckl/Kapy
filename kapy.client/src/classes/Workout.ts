export interface IWorkoutNote {
    id: number;
    content: string;
    width: number;
    height: number;
}

export interface IWorkout {
    id: number;
    name: string;
    description: string;
    notes: IWorkoutNote[];
    hashtags: string[];
}

export function DefaultWorkout(): IWorkout {
    return {
        id: 0,
        name: "Running with strapped weights",
        description: "One leg after another, a workout can't get any simpler. Add weighted vest for extra difficulty.",
        notes: [{
            id: 0,
            content: "watch out for cars",
            width: 250,
            height: 250
        }, {
            id: 0,
            content: "hands should be in line with legs before rising to prevent back pain",
            width: 250,
            height: 400
        }, {
            id: 0,
            content: "watch out for pets",
            width: 250,
            height: 150
        }],
        hashtags: ["simple", "daily"]
    };
}