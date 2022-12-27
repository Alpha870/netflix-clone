import './Row.css'

const Row = ({title, fetchUrl, isLargeRow}) => {



  return (
    <div>
      <h4 className='h4-row'>{title}</h4>
    </div>
  )
}

export default Row