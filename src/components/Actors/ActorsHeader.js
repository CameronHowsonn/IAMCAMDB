const ActorsHeader = ({ time_frame, setTimeFrame }) => {
  return (
    <header className="actors-header">
      <h1 className="big-text">
        Actors trending{' '}
        {time_frame === 'week' ? ` this ${time_frame}` : 'today'}
      </h1>
      <select
        name="time_frame"
        id="time_frame"
        onChange={e => setTimeFrame(e.target.value)}
      >
        <option value="week">Sort By Week</option>
        <option value="day">Sort By Day</option>
      </select>
    </header>
  )
}

export default ActorsHeader
