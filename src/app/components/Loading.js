import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
// Styling imported below
import 'semantic-ui-css/components/dimmer.css'
import 'semantic-ui-css/components/loader.css'
import 'semantic-ui-css/components/image.css'
import 'semantic-ui-css/components/segment.css'


const LoadingSpinner = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size='medium'>Loading...</Loader>
      </Dimmer>

      <Image src='/static/images/short-paragraph.png' />
      </Segment>
  </div>
);

export default LoadingSpinner;
