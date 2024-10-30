import { useState } from 'react';
import HomePage from './pages/HomePage';
import WorkoutsPage from './pages/WorkoutsPage';
import WorkoutPage from './pages/WorkoutPage';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import { Workout } from './classes/Workout.ts';  

//interface Forecast {
//    date: string;
//    temperatureC: number;
//    temperatureF: number;
//    summary: string;
//}

function App() {
    //const [forecasts, setForecasts] = useState<Forecast[]>();
    const [page, setPage] = useState('home');
    const [workout, setWorkout] = useState<Workout>({
        id: 0,
        name: '',
        description: '',
        notes: [],
        hashtags: []  
    });

    //setPage('HomePage');

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

    //const contents = forecasts === undefined
    //    ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
    //    : <table className="table table-striped" aria-labelledby="tableLabel">
    //        <thead>
    //            <tr>
    //                <th>Date</th>
    //                <th>Temp. (C)</th>
    //                <th>Temp. (F)</th>
    //                <th>Summary</th>
    //            </tr>
    //        </thead>
    //        <tbody>
    //            {forecasts.map(forecast =>
    //                <tr key={forecast.date}>
    //                    <td>{forecast.date}</td>
    //                    <td>{forecast.temperatureC}</td>
    //                    <td>{forecast.temperatureF}</td>
    //                    <td>{forecast.summary}</td>
    //                </tr>
    //            )}
    //        </tbody>
    //    </table>;

    //return (
    //    <div>
    //        <h1 id="tableLabel">Weather forecast</h1>
    //        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPage("test1")}>TEST</button>
    //        <p>This component demonstrates fetching data from the server.</p>
    //        {page == 'test1' ? (<p>This component demonstrates fetching data from the server.</p>) : (<p>This </p>)}
    //        {contents}

    if (page == 'home') {
        return (
            <HomePage setPage={setPage}></HomePage>
        );
    }
         
    var pageComponent = (<ErrorPage></ErrorPage>);
    var pageButton = (<ErrorPage></ErrorPage>);

    switch (page) {
        case 'workouts':
            pageComponent = (
                <WorkoutsPage setPage={setPage} setWorkout={setWorkout}></WorkoutsPage>
            );
            pageButton = (<button type='button'>Add</button>);
            break;
        case 'workout':
            pageComponent = (
                <WorkoutPage workout={ workout }></WorkoutPage>
            );
            pageButton = (<button type='button'>Save/Edit</button>);
            break;
        default:
            pageComponent = (
                <ErrorPage></ErrorPage>
            );
            break;
    };

    return (
        <Layout setPage={setPage} currentPage={page} currentPageButton={pageButton}>
            { pageComponent }
        </Layout>
    )

    //async function populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    setForecasts(data);
    //}
}

export default App;