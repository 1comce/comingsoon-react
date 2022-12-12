import DateTime from './DateTime';
import Location from './Location';
import { ContentProvider } from '../../contexts/ContentContext';
const Content = () => {
    return (
        <ContentProvider>
            <div id="content">
                <h1>COMING SOON</h1>
                <hr />
                <DateTime></DateTime>
                <Location></Location>
            </div>
        </ContentProvider>
    );
};
export default Content;
