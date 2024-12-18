class DbProvider {
    private static db: IDBDatabase;

    public static getDb(): IDBDatabase {
        if (!this.db) {
            this.initDB();
        }
        return this.db;
    }

    private static initDB(): void {
        console.log("Opening IndexedDB...");
        const request = window.indexedDB.open("KapyDB", 2);

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            console.log("Upgrading IndexedDB...");
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains("Workouts")) {
                const objectStore = db.createObjectStore("Workouts", { keyPath: "key", autoIncrement: true });
                objectStore.createIndex("name", "name", { unique: false });
                objectStore.createIndex("hashtags", "hashtags", { unique: false });
            }
        };

        request.onsuccess = (event: Event) => {
            console.log("IndexedDB opened successfully.");
            this.db = (event.target as IDBOpenDBRequest).result;
        };

        request.onerror = (event: Event) => {
            console.error("Database error: ", (event.target as IDBOpenDBRequest).error);
        };

        request.onblocked = () => {
            console.warn("Database open request is blocked.");
        };
    }
}

export default DbProvider;
