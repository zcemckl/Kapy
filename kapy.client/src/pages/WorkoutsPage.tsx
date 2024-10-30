import 'simplebar';  
import 'simplebar/dist/simplebar.css';  
import ResizeObserver from 'resize-observer-polyfill';  
import { Workout } from '../classes/Workout.ts';  

window.ResizeObserver = ResizeObserver;  

interface WorkoutsPageProps {
    setPage: (page: string) => void;  
    setWorkout: (workout: Workout) => void;  
}  

function WorkoutsPage({ setPage, setWorkout }: WorkoutsPageProps) {  
    if (false) {
        setPage('');
        setWorkout({
            id: 0,
            name: '',
            description: '',
            notes: [],
            hashtags: []
        });
    }

    return (  
        <div className="flex flex-col">  
            <div className="p-7 grid" style={{ gridTemplateColumns: "5rem auto" }}>  
                <span className="text-lg mr-4 font-bold m-auto" style={{ color: 'rgb(248, 246, 241)' }}>Filters:</span>  
                <div data-simplebar className="w-full max-h-20 overflow-y-auto">  
                    <div className="flex flex-row flex-wrap">  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">chill</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">metcon</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">anaerobic</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">hiit</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">chest</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">no equipment</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">chest</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">glutes</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">chill</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">metcon</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">anaerobic</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">hiit</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">chest</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">no equipment</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">chest</button>  
                        <button className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-1 px-1 rounded">glutes</button>  
                    </div>  
                </div>  
            </div>  
            <div data-simplebar className="w-full p-5" style={{ height: "calc(100svh - 20rem)" }}>  
                <div className="flex flex-row flex-wrap justify-center">  
                    <button className="w-32 h-32 bg-red-500 m-5">test1</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                    <button className="w-32 h-32 bg-red-500 m-5">test</button>  
                </div>  
            </div>  
        </div>  
    );  
}  

export function AddWorkout({ setWorkout }: WorkoutsPageProps) {
    if (false) {
        setWorkout({
            id: 0,
            name: '',
            description: '',
            notes: [],
            hashtags: []
        });
    }

    return (  
        <div>              
        </div>  
    );  
}  

export default WorkoutsPage;