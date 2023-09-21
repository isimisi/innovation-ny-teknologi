import ScreenLayout from '../../Components/ScreenLayout';
import Home from '../../Components/Home';

// home screen som lige nu kun loader home screen
// skal måske lave useefect her og hente data
export default function HomeScreen() {
   return (
      <ScreenLayout>
         <Home />
      </ScreenLayout>
   );
}
