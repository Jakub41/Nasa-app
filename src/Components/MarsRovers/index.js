import React from 'react';
import RoversMain from './RoversMain';

export default function MarsRoversIndex({ curiosity, opportunity, spirit }) {
  return <RoversMain curiosity={curiosity} opportunity={opportunity} spirit={spirit} />;
}

/*
<Container>
        <Jumbotron className="mt-3">
          <Container>
            <Image src={ImgMars} alt="mars-view" />
            <h1 className="display-4">THE ROVERS</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Container>
*/
