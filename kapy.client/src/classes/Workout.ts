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
        name: 'test1',
        description: 'test1',
        notes: ['1','2','3'],
        hashtags: ['test1', 'test2', 'test3']
    };
}