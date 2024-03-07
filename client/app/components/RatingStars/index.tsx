import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function RatingStars({rating, width, height} : { rating: number, width?:number, height?: number}){
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if ( i <= rating )
      stars.push(<StarIcon key={ i }
                           style = {{height: `${height}`, width: `${width}`}}
                           />);
    else 
      stars.push(<StarBorderIcon key={i}
                              style={{height: `${height}`, width: `${width}`}}  />);
                          }


  return <div>{stars}</div>;
};
