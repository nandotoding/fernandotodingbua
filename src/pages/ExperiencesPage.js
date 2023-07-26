import {experData} from "../data/experData";
import ExperTable from "../components/body-components/experiences/ExperTable";
import {pageTitleStyle} from "./style";
import MaintainPage from "../others/MaintainPage";

const ExperiencesPage = () => {
    return (
        <>
            <div className="mt-3" style={pageTitleStyle}>
                <h6>Project Experiences</h6>
            </div>
            {/*<div>*/}
            {/*    <ExperTable data={experData.reverse()}/>*/}
            {/*</div>*/}
            <MaintainPage/>
        </>
    )
};

export default ExperiencesPage;