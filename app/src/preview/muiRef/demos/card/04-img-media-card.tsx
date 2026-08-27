import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          도마뱀
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          도마뱀은 널리 퍼진 유린목 파충류로, 6,000종이 넘고 남극을 뺀 모든 대륙에 살아요
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">공유</Button>
        <Button size="small">더 알아보기</Button>
      </CardActions>
    </Card>
  );
}
