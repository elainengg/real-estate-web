import RealEstate from "./RealEstate";
// import store from "./Kanbas/store";
// import { Provider } from "react-redux";


import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      {/* <Provider store={store}> */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="RealEstate" />} />
            <Route path="/RealEstate/*" element={<RealEstate />} />
          </Routes>
        </div> 
        {/* </Provider> */}
    </HashRouter>
  );
}