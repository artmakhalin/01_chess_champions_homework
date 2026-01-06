import './App.css'
import Champion from './components/Champion'

function App() {

  return (
    <>
      <Champion name={"Wilhelm Steinitz"} imgUrl={"https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpntpDFh.jpeg"} years={"1886 - 1894"} country={"Austria"}/>
      <Champion name={"Emanuel Lasker"} imgUrl={"https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpSMzrrG.jpeg"} years={"1894-1921"} country={"Germany"}/>
      <Champion name={"Jose Raul Capablanca"} imgUrl={"https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpl6eb2D.jpeg"} years={"1921 - 1927"} country={"Cuba"}/>
    </>
  )
}

export default App
