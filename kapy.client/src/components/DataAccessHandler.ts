class DataAccessHandler {
    private static instance: DataAccessHandler;
    private db: IDBDatabase | null = null;

    private constructor() {
        this.initDB();
    }

    public static getInstance(): DataAccessHandler {
        if (!DataAccessHandler.instance) {
            DataAccessHandler.instance = new DataAccessHandler();
        }
        return DataAccessHandler.instance;
    }

    private initDB(): void {
        const request = window.indexedDB.open("MyDatabase", 1);

        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains("MyStore")) {
                db.createObjectStore("MyStore", { keyPath: "id" });
            }
        };

        request.onsuccess = (event: Event) => {
            this.db = (event.target as IDBOpenDBRequest).result;
        };

        request.onerror = (event: Event) => {
            console.error("Database error: ", (event.target as IDBOpenDBRequest).error);
        };
    }

    public addItem(item: any): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject("Database is not initialized");
                return;
            }

            const transaction = this.db.transaction(["MyStore"], "readwrite");
            const store = transaction.objectStore("MyStore");
            const request = store.add(item);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }

    public getItem(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject("Database is not initialized");
                return;
            }

            const transaction = this.db.transaction(["MyStore"], "readonly");
            const store = transaction.objectStore("MyStore");
            const request = store.get(id);

            request.onsuccess = (event: Event) => {
                resolve((event.target as IDBRequest).result);
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }

    public deleteItem(id: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.db) {
                reject("Database is not initialized");
                return;
            }

            const transaction = this.db.transaction(["MyStore"], "readwrite");
            const store = transaction.objectStore("MyStore");
            const request = store.delete(id);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = (event: Event) => {
                reject((event.target as IDBRequest).error);
            };
        });
    }
}

export default DataAccessHandler;
