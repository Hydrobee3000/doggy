import preloader from './../../assets/preloader.svg'

let Preloader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '20%',
        marginLeft: '-5.5em',
        width: '100px',
        height: '100px',
        zIndex: 999,
      }}>
      <img src={preloader} alt='preloader' />
    </div>
  )
}

export default Preloader
