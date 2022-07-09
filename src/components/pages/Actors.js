import { useState } from 'react'
import ActorsHeader from '../Actors/ActorsHeader'
import ActorsList from '../Actors/ActorsList'

const Actors = () => {
  const [time_frame, setTimeFrame] = useState('week')

  return (
    <section className="actors">
      <ActorsHeader setTimeFrame={setTimeFrame} time_frame={time_frame} />
      <ActorsList time_frame={time_frame} />
    </section>
  )
}

export default Actors
