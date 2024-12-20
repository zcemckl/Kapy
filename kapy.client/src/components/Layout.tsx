interface ILayoutProps {
    setPage: (page: string) => void;
    currentPage: string;
    currentPageButtons: React.ReactNode;
    children?: React.ReactNode;
}

function Layout({ setPage, currentPage, currentPageButtons, children }: ILayoutProps) {
    var parentPage = 'error'
    switch (currentPage) {
        case 'workout':
        case 'workouts':
            parentPage = 'workouts'
            break;
        case 'routine':
        case 'routines':
            parentPage = 'routines'
            break;
        default:
            parentPage='error'
    }

    return (
        <div className="max-w-svw max-h-svh w-svw h-svh grid grid-cols-1 p-3" style={{ gridTemplateRows: "6rem auto 4rem" }}>
            <div className="flex flex-row justify-start items-center space-x-16 p-5">
                <button className="font-sans text-5xl font-extrabold"
                    style={{ color: 'rgb(171, 215, 255)' }}
                    onClick={() => setPage('home')}>
                    Kapy
                </button>
                <button className="font-sans text-lg font-bold self-end"
                    style={{ color: 'rgb(248, 246, 241)' }}
                    onClick={() => setPage(parentPage)}>
                    {parentPage.toUpperCase()}
                </button>
                <div className='w-full flex flex-row justify-end px-10'>
                    { currentPageButtons }
                </div>
            </div>
            {children}
            <div>
                Footer
            </div>
        </div>
    );
}

export default Layout;