import * as React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex h-screen w-full bg-bg-primary overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col relative h-full">
                <TopBar />
                <main className="flex-1 overflow-y-scroll scrollable relative p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
