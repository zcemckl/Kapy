interface HomeProps {
    setPage: (page: string) => void;
}

function HomePage({ setPage }: HomeProps) {
    return (
        <div className="flex flex-col justify-center items-center w-svw h-svh space-y-14">
            <h1 className="font-sans text-7xl font-extrabold"
                style={{ color: 'rgb(171, 215, 255)' }}>Kapy</h1>
            <h3 className="font-sans text-3xl font-bold"
                style={{ color: 'rgb(248, 246, 241)' }}>Log, Learn, Lift</h3>
            <div className="flex flex-row justify-center items-center space-x-36">
                <button type="button"
                    className="h-64 w-52 flex flex-col justify-center items-center font-bold py-2 px-4 rounded-t-full space-y-4"
                    style={{ backgroundColor: 'rgb(25, 162, 141)' }}
                    onClick={() => setPage('routines')}>
                    <div className="h-28 w-24 flex flex-col justify-center items-center">
                        <img src="src/assets/stopwatch.png" alt="Routines" />
                    </div>
                    <h4 className="font-sans text-xl font-bold">Routines</h4>
                </button>
                <button type="button"
                    className="h-64 w-52 flex flex-col justify-center items-center font-bold py-2 px-4 rounded-t-full space-y-4"
                    style={{ backgroundColor: 'rgb(255, 198, 16)' }}
                    onClick={() => setPage('workouts')}>
                    <div className="h-28 w-26 flex flex-col justify-center items-center">
                        <img src="src/assets/dumbbell.png" alt="Workouts" />
                    </div>
                    <h4 className="font-sans text-xl font-bold">Workouts</h4>
                </button>
            </div>
        </div>
    );
}

export default HomePage;