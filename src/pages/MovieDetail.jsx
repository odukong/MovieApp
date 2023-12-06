import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {
    const { title } = useParams(); 

    const { state } = useLocation();
    console.log(title);
    console.log(state);

    return (
        <div className='app__movieDetail'>
            <div className='app__movieDetail-img'><img src={`https://image.tmdb.org/t/p/w300${state.item.item.poster_path}`} alt="영화디테일"/></div>
            <div className='app__movieDetail-contents' style={{fontSize:"28px"}}>{title}</div>
        </div>
    );
}