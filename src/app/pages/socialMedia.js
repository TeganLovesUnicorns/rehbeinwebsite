import React from 'react'
import { Header, Icon } from 'semantic-ui-react'


import 'semantic-ui-css/components/button.css';

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