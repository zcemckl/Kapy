export interface Workout {
    id: number;
    name: string;
    description: string;
    notes: string[];
    hashtags: string[];
}

export function DefaultWorkout() : Workout {
    return {
        id: 0,
        name: "Running with strapped weights",
        description: "One leg after another, a workout can't get any simpler. Add weighted vest for extra difficulty.",
        notes: ["watch out for cars","hands should be in line with legs before rising to prevent back pain","watch out for pets"],
        hashtags: ["simple", "daily"]
    };
}