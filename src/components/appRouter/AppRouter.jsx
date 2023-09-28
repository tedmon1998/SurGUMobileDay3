import MainPage from "pages/MainPage";
import NofoundPage from "pages/NofoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { publickRoutes } from 'router/index.js'


function AppRouter() {
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to='/main' />} /> */}
            <Route path="/" element={<MainPage />} />
            {
                publickRoutes.map(rout =>
                    <Route path={rout.path} element={<rout.component />} key={rout.path} />
                )
            }
            <Route path="*" element={<NofoundPage />} />
        </Routes>
    );
}

export default AppRouter;