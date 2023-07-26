import Biodata from "../components/body-components/personal-info/Biodata";
import Education from "../components/body-components/personal-info/Education";
import Contact from "../components/body-components/personal-info/Contact";
import {pageTitleStyle} from "./style";
import {bioData, contData, photoData} from "../data/bioData";
import MaintainPage from "../others/MaintainPage";

const PersonalInfo = () => {
    return (
        <>
            <div className="mt-3" style={pageTitleStyle}>
                <h6>Biographical Data</h6>
            </div>
            <div style={{fontSize: '12px'}}>
                {/*<Biodata data={bioData} photo={photoData}/>*/}
                {/*<Education/>*/}
                {/*<Contact data={contData}/>*/}
                <MaintainPage/>
            </div>
        </>
    )
};

export default PersonalInfo;