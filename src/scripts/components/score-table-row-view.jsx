import React from 'react'

import ScoreTablePositionCellView from './score-table-position-cell-view'
import ScoreTableServiceStateCellView from './score-table-service-state-cell-view'
import ScoreTableTotalScoreCellView from './score-table-total-score-cell-view'
import ScoreTableScoreCellView from './score-table-score-cell-view'
import ScoreTableTeamCellView from './score-table-team-cell-view'

export default class ScoreTableRowView extends React.Component {
  render () {
    let cells = this.props.order.map((column, ndx) => {
      let value = this.props.data[column]

      if (column === 'position') {
        return <ScoreTablePositionCellView key={ndx} value={value} />
      } else if (column.lastIndexOf('#service_') === 0) {
        return <ScoreTableServiceStateCellView key={ndx} value={value} />
      } else if (column === 'totalRelative') {
        return <ScoreTableTotalScoreCellView key={ndx} value={value} lastAttack={this.props.data.lastAttack} muted={this.props.muted} />
      } else if (column === 'attack') {
        return <ScoreTableScoreCellView key={ndx} absoluteValue={this.props.data.attackPoints} relativeValue={this.props.data.attackRelative} muted={this.props.muted} />
      } else if (column === 'availability') {
        return <ScoreTableScoreCellView key={ndx} absoluteValue={this.props.data.availabilityPoints} relativeValue={this.props.data.availabilityRelative} muted={this.props.muted} />
      } else if (column === 'defence') {
        return <ScoreTableScoreCellView key={ndx} absoluteValue={this.props.data.defencePoints} relativeValue={this.props.data.defenceRelative} muted={this.props.muted} />
      } else if (column === 'team') {
        return <ScoreTableTeamCellView key={ndx} value={value} marked={this.props.identity.isTeam() && this.props.identity.getId() === this.props.data.id} guest={this.props.data.guest} teamId={this.props.data.id} />
      }

      return (
        <td key={ndx}>
          {value}
        </td>
      )
    })

    return (
      <tr>
        {cells}
      </tr>
    )
  }
}
