import Header from './components/Header/header'
import DemoPage from './components/Tabela/page'


export default function App() {
  return(
    <div className="bg-[#121214] p-10 w-full justify-center items-center flex flex-col h-[100vh] ">
      <div className=" w-[90%] ">
        <Header/>
        <DemoPage/>
      </div>
    </div>
  )
}