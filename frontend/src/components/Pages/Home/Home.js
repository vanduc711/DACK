import './Home.css';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Trainding from './Trainding/Trainding';
import Trailer from './Trailer/Trailer';
import Category from './Categorys/Category';
import Info from './Info/Info';
import Tranfor from './Tranfor/Tranfor';
import Follows from './Follows/Follows';

function Home() {
  return (
        <div className="HomePage">
            <div className='Content'>
                <div className="Trailer">
                    <Trailer></Trailer>
                </div>

                <div>
                    <Trainding></Trainding>
                </div>
                <div>
                    <Category></Category>
                </div>
                <div>
                    <Info></Info>
                </div>
                <div>
                    <Tranfor></Tranfor>
                </div>
                <div>
                    <Follows></Follows>
                </div>
            </div>
        </div>
    );
}

export default Home;
