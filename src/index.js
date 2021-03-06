/** @jsx h */
import { h, render, Fragment } from 'preact'
import { useState } from 'preact/hooks'
import 'normalize.css'
import 'concrete.css'
import Room from './Room'
import './main.css'
import rooms from './rooms.json'

const buildings = Object.keys(rooms)

function Main () {
  const [selectedBuilding, setSelectedBuilding] = useState('all')

  return (
    <main class='container'>

      <header>
        <h1 class='less-margin title'>rEPFL</h1>
        <h3 class='less-margin'>find a free room @ EPFL</h3>
      </header>

      <p class='button-list'>

        {['all'].concat(buildings).map(building => (
          <Fragment>
            <button
              onClick={() => setSelectedBuilding(building)}
              class={selectedBuilding === building ? 'filled' : ''}
            >
              {building.toUpperCase()}
            </button>{' '}
          </Fragment>
        ))}

      </p>

      {buildings.map(building => (
        <div className={selectedBuilding !== 'all' && selectedBuilding !== building && 'hidden'}>
          <h2 class='text-center table-h2'>{building.toUpperCase()}</h2>
          <hr class='table-hr' />
          <table>
            <tbody>
              {rooms[building].map(room => <Room key={room} name={room} />)}
            </tbody>
          </table>
        </div>
      ))}

      <footer>
        <h5 class='less-margin'>made with {'<3'} by <a href='https://louismerl.in'>Louis Merlin</a></h5>
        <h5 class='less-margin'>using <a href='https://preactjs.com'>preact</a> and <a href='https://concrete.style'>concrete.css</a></h5>
        <h5 class='less-margin'>need more rooms ? <a href='https://github.com/louismerlin/repfl/blob/master/src/rooms.json'>add them</a> or <a href='mailto:louis.merlin@epfl.ch'>email me</a></h5>
        <h5 class='less-margin'>don't hesitate to <a href='https://github.com/louismerlin/repfl'>star and/or contribute</a></h5>
      </footer>

    </main>
  )
}

render(<Main />, document.body)
