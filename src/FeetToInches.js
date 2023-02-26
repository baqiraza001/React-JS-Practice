import BmiRangeSlider from "./BmiRangeSlider";
import { useMemo, useState } from "react";

function FeetToInches() {
    const [feet, setFeet] = useState(40);
    const [inches, setInches] = useState(40);

    return (
        <>
            <BmiRangeSlider title="Feet" unit="ft" minValue={40} maxValue={220} value={feet} setValue={setFeet} />
            <BmiRangeSlider title="Inches" unit="in" minValue={40} maxValue={220} value={inches} setValue={setInches} />
        </>
    );
}

export default FeetToInches;