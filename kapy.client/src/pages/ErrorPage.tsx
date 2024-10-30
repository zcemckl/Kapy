function ErrorPage() {
    return (
        <div>
            <h1>Kapy</h1>
            <h3>Log, Learn, Lift</h3>
            <div className="flex flex-row justify-center items-center">
                <button type="button" className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Routines</button>
                <button type="button" className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Workouts</button>                
            </div>
        </div>
    );
}

export default ErrorPage;