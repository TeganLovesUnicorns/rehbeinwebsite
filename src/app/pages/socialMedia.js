import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

import Nav from '../components/Nav';

import 'semantic-ui-css/components/button.css';
// import 'semantic-ui-css/components/icon.css';
import '../styles/main.scss';


// const IconExampleTwitterGroup = () => (
//   <Header as='h2'>
//     <Icon.Group size='large'>
//       <Icon name='twitter' />
//       <Icon corner name='add' />
//     </Icon.Group>
//     Add on Twitter
//   </Header>
// )

// export default IconExampleTwitterGroup

class socialMedia extends React.Component {
  render () {
    return (
        <div>
          <Nav />
          <h1>Social Media</h1>
          <h2>
          {/* <Icon.Group size='small'> */}
            <Icon name='instagram' size='massive' />
            {/* <Icon corner name='add' /> */}
          {/* </Icon.Group> */}
          Add on instagram
          </h2>
        </div>
    )
  }
}

export default socialMedia;