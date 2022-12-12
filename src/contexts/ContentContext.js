import { createContext, useReducer, useState } from 'react';
const ContentContext = createContext({});

export const ContentProvider = ({ children }) => {
    const [isClicked, setClicked] = useState(false);

    const contentContextData = { isClicked, setClicked };
    return <ContentContext.Provider value={contentContextData}>{children}</ContentContext.Provider>;
};
export default ContentContext;
