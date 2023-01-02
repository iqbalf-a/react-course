import React from "react";
import { onChangeText} from "../../utils/eventHandlers";

const useAddCourseType = () => {
    const [typeName, setTypeName] = React.useState("");
    const [isDisable, setDisable] = React.useState(true);

    const getter = {typeName, isDisable};
    const setter = {
        typeName: onChangeText(setTypeName),
    }

    React.useEffect(() => {
        if (typeName) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }, [typeName])

    return {
        getter, setter
    }
}

export default useAddCourseType;
