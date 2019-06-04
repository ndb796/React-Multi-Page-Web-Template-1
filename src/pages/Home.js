import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function Home() {
  return (
    <div>
      <br/>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Background Image"
            image="/background.jpg"
            title="Background Image"
          />
          <CardContent>
            메인 페이지입니다.
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Home;