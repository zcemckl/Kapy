import { IWorkout } from "../models/Workout.ts";
import DbProvider from "./DbProvider.ts";

class WorkoutDataAccess {
    private static instance: WorkoutDataAccess;
    private db: IDBDatabase;

    private constructor() {
        this.db = DbProvider.getDb();
    }

    public static getInstance(): WorkoutDataAccess {
        if (!WorkoutDataAccess.instance) {
            WorkoutDataAccess.instance = new WorkoutDataAccess();
        }
        return WorkoutDataAccess.instance;
    }

    public addWorkout(item: IWorkout): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.db = DbProvider.getDb();
            }

            const transaction = this.db.transaction(["Workouts"], "readwrite");
            const store = transaction.objectStore("Workouts");
            const request = store.add(item);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }

    public updateWorkout(item: IWorkout): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.db = DbProvider.getDb();
            }

            const transaction = this.db.transaction(["Workouts"], "readwrite");
            const store = transaction.objectStore("Workouts");
            const request = store.put(item);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }

    public getWorkoutByKey(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.db = DbProvider.getDb();
            }

            const transaction = this.db.transaction(["Workouts"], "readonly");
            const store = transaction.objectStore("Workouts");
            const request = store.get(key);

            request.onsuccess = (event: Event) => {
                resolve((event.target as IDBRequest).result);
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }

    public getWorkouts(): Promise<IWorkout[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.db = DbProvider.getDb();
            }

            const transaction = this.db.transaction(["Workouts"], "readonly");
            const store = transaction.objectStore("Workouts");
            const request = store.getAll();

            request.onsuccess = (event: Event) => {
                resolve((event.target as IDBRequest).result);
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }

    public getWorkoutsbyHastag(hashtags: string[]): Promise<IWorkout[]> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.db = DbProvider.getDb();
            }

            const transaction = this.db.transaction(["Workouts"], "readonly");
            const store = transaction.objectStore("Workouts");
            const index = store.index("hashtags");
            const results: IWorkout[] = [];
            let pending = hashtags.length;

            hashtags.forEach((hashtag) => {
                const request = index.getAll(hashtag);

                request.onsuccess = (event: Event) => {
                    const fetchedWorkouts = (event.target as IDBRequest).result as IWorkout[];
                    fetchedWorkouts.forEach((workout) => {
                        if (!results.some((result) => result.key === workout.key)) {
                            results.push(workout);
                        }
                    });
                    pending -= 1;
                    if (pending === 0) {
                        resolve(results);
                    }
                };

                request.onerror = (event: Event) => {
                    reject((event.target as IDBRequest).error);
                };
            });
        });
    }

    public deleteWorkout(key: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                this.db = DbProvider.getDb();
            }

            const transaction = this.db.transaction(["Workouts"], "readwrite");
            const store = transaction.objectStore("Workouts");
            const request = store.delete(key);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }
}

export default WorkoutDataAccess;
