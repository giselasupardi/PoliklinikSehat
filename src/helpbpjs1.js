import React, { Component } from 'react';
import {Grid, Icon, Button} from 'semantic-ui-react'
import {Link } from "react-router-dom";

import './css/helpbpjs.css';

class BPJSHelper1 extends Component {

  render() {

    return (
      <div className='instruction-div'>

        <Grid>
          <Grid.Row>
            <Grid.Column width={3} className='arrow'>
            </Grid.Column>
            <Grid.Column width={10}>
              <p> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam ab, aliquam numquam in excepturi, officia? Tempore nulla, 
                saepe ipsa libero architecto expedita quasi sint perspiciatis doloribus 
                enim eligendi nam voluptate. 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quis repudiandae iste omnis aspernatur, necessitatibus accusamus 
                quasi aliquid unde modi impedit labore doloribus reiciendis sit amet atque, 
                eaque molestias. Obcaecati, vel!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Iure harum architecto laboriosam dicta tempore recusandae molestiae 
                est saepe earum ut officiis assumenda, illum dolorem fugit accusantium 
                consequuntur beatae aperiam! Iste.
              </p>
            </Grid.Column>
            <Grid.Column width={3} className='arrow'>
              <Link to='/helpbpjs/next'>
              <Icon name='chevron right' size='big'/>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className='button'>
            <Button primary floated='left'> For More Information </Button>
            <Link to='/bpjsvalidation'>
            <Button negative className='backbutton' floated='right'> Back</Button>
            </Link>
        </div>
      </div>
    );
  }
}
export default BPJSHelper1;