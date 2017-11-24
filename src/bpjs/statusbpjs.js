import React, { Component } from 'react';
import Navbar from '../navbar';
import { Icon, Table } from 'semantic-ui-react'

class StatusBPJS extends Component {
  render() {

      
    let name = "Trundy Alian";
    let expense = "Rp. 250.000";
    return (
      <div>
      
      <Navbar name='Status BPJS'/>
      <h3 className="status_text">Status BPJS, {name}</h3>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Month</Table.HeaderCell>
            <Table.HeaderCell>Expense</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          <Table.Row negative>
            <Table.Cell>February 2017</Table.Cell>
            <Table.Cell>{expense}</Table.Cell>
            <Table.Cell>
              <Icon name='close' />
                Not Paid
            </Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>January 2017</Table.Cell>
            <Table.Cell>{expense}</Table.Cell>
            <Table.Cell>
              <Icon name='checkmark' />
              Paid
            </Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>December 2016</Table.Cell>
            <Table.Cell>{expense}</Table.Cell>
            <Table.Cell>
              <Icon name='checkmark' />
              Paid
            </Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>November 2016</Table.Cell>
            <Table.Cell>{expense}</Table.Cell>
            <Table.Cell>
              <Icon name='checkmark' />
              Paid
            </Table.Cell>
          </Table.Row>
          <Table.Row positive>
            <Table.Cell>November 2016</Table.Cell>
            <Table.Cell>{expense}</Table.Cell>
            <Table.Cell>
              <Icon name='checkmark' />
              Paid
            </Table.Cell>
          </Table.Row>



        </Table.Body>
      </Table>

      </div>
    );
  }
}
export default StatusBPJS;